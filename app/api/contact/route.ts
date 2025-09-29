import { NextResponse } from 'next/server';

// Simple in-memory rate limiter: 5 requests per IP per hour
const rateLimit = new Map<string, number[]>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip) || [];
  // Remove old timestamps
  const valid = timestamps.filter(ts => now - ts < WINDOW_MS);
  if (valid.length >= LIMIT) {
    return true;
  }
  valid.push(now);
  rateLimit.set(ip, valid);
  return false;
}

export async function POST(request: Request) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
             request.headers.get('x-real-ip') ||
             request.headers.get('cf-connecting-ip') ||
             'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Try again later.' }, { status: 429 });
  }

  try {
    const rawBody = await request.clone().text();
    let body;
    try {
      body = JSON.parse(rawBody);
    } catch (jsonErr) {
      console.error('JSON parse error:', jsonErr);
      return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
    }
    const { name, email, subject: userSubject, message, hp, recaptchaToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }
    // Honeypot triggered -> silently accept to avoid clueing bots
    if (typeof hp === 'string' && hp.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    // Verify reCAPTCHA v3 if configured
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.3');
    if (recaptchaSecret && recaptchaToken) {
      try {
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken }),
        });
        const verifyJson = await verifyRes.json();
        if (!verifyJson.success || (typeof verifyJson.score === 'number' && verifyJson.score < minScore)) {
          return NextResponse.json({ ok: false, error: `reCAPTCHA verification failed (score ${verifyJson.score || 'N/A'})` }, { status: 400 });
        }
        if (verifyJson.action !== 'contact') {
          return NextResponse.json({ ok: false, error: `reCAPTCHA action mismatch (${verifyJson.action})` }, { status: 400 });
        }
      } catch (e) {
        return NextResponse.json({ ok: false, error: 'reCAPTCHA error' }, { status: 400 });
      }
    }

    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
    const senderEmail = process.env.BREVO_SENDER_EMAIL || toEmail;
    const senderName = process.env.BREVO_SENDER_NAME || 'FlowAfric Website';

    if (!apiKey || !toEmail) {
      return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 500 });
    }

    const subject = (typeof userSubject === 'string' && userSubject.trim().length > 0)
      ? `FlowAfric Contact: ${userSubject.trim()}`
      : `New Contact Message from ${name}`;
    const textContent = `From: ${name} <${email}>

${message}`;

    // Send via Brevo SMTP API
    let res;
    try {
      res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          sender: { email: senderEmail, name: senderName },
          to: [{ email: toEmail }],
          replyTo: { email, name },
          subject,
          textContent,
          htmlContent: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
        }),
      });
    } catch (fetchErr) {
      return NextResponse.json({ ok: false, error: 'Email service unavailable' }, { status: 502 });
    }

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
