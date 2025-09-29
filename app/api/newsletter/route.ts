import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    // TODO: Integrate with your email provider here (e.g., Mailchimp/Brevo)
    // Example placeholder: console log. Replace with real API call.
    console.log('[Newsletter] New subscriber:', email);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
