"use client";

import { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [hp, setHp] = useState(""); // honeypot

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus("error");
      setFeedback("Please fill in your name, a valid email, a subject, and a message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, hp }),
      });
      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFeedback("Thanks! Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (err) {
      setStatus("error");
      setFeedback("Could not send your message. Please try again later.");
    }
  }

  return (
    <>
      {/* reCAPTCHA v3 loader */}
      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // Acquire reCAPTCHA token if configured
          let token = "";
          try {
            if (window.grecaptcha && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
              await window.grecaptcha.ready();
              token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'contact' });
            }
          } catch {}

          // Attach token into hidden hp state to send along (separate field recaptchaToken)
          setStatus("loading");
          setFeedback("");

          // Validate essentials locally first
          if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            setStatus("error");
            setFeedback("Please fill in your name, a valid email, a subject, and a message.");
            return;
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error");
            setFeedback("Please enter a valid email address.");
            return;
          }

          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, subject, message, hp, recaptchaToken: token }),
            });
            if (!res.ok) {
              const errData = await res.json().catch(() => ({}));
              throw new Error(errData.error || `HTTP ${res.status}`);
            }
            setStatus("success");
            setFeedback("Thanks! Your message has been sent.");
            setName("");
            setEmail("");
            setMessage("");
            setSubject("");
          } catch (err) {
            const msg = err instanceof Error ? err.message : "Could not send your message. Please try again later.";
            setStatus("error");
            setFeedback(msg);
          }
        }}
        className="space-y-4"
      >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Your email"
        />
      </div>
      {/* Honeypot field (leave empty) */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label>
          Do not fill this field
          <input
            type="text"
            autoComplete="off"
            tabIndex={-1}
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            aria-label="Leave this field empty"
          />
        </label>
      </div>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Subject"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="How can we help?"
        rows={5}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Your message"
      />
      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        {feedback && (
          <p className={`text-sm ${status === "success" ? "text-emerald-300" : "text-red-300"}`}>{feedback}</p>
        )}
      </div>
      <p className="text-xs text-white/70">We’ll reply to {process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "our support email"}.</p>
    </form>
    </>
  );
}
