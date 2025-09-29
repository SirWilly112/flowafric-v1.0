"use client";

import { useConsent } from "@/components/consent-provider";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const { consent, grant, deny } = useConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(consent === null);
  }, [consent]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 cookie-banner p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white text-sm">
          We use cookies to enhance your experience, analyze traffic, and enable analytics once you consent.{' '}
          <a href="/cookies" className="underline text-emerald-300 hover:text-emerald-200">Learn more</a>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={deny}
            className="px-3 py-2 rounded-md border border-white/20 text-white hover:bg-white/10 text-sm"
          >
            Decline
          </button>
          <button
            onClick={grant}
            className="px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
