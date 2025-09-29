"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "/api/newsletter";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setMessage("");

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // Fallback: simulate success when no endpoint configured
        await new Promise((r) => setTimeout(r, 600));
      }
      setStatus("success");
      setMessage("Thanks! You're subscribed.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Subscription failed. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 font-semibold rounded-lg disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {message && (
        <div className={`text-sm text-center sm:text-left w-full ${status === "success" ? "text-emerald-300" : "text-red-300"}`}>
          {message}
        </div>
      )}
    </form>
  );
}
