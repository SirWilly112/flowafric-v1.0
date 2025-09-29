"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "flowafric_cookie_consent";

type ConsentState = "granted" | "denied" | null;

type ConsentContextType = {
  consent: ConsentState;
  grant: () => void;
  deny: () => void;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {}
  }, []);

  const grant = () => {
    try { localStorage.setItem(CONSENT_KEY, "granted"); } catch {}
    setConsent("granted");
  };
  const deny = () => {
    try { localStorage.setItem(CONSENT_KEY, "denied"); } catch {}
    setConsent("denied");
  };

  const value = useMemo(() => ({ consent, grant, deny }), [consent]);

  return (
    <ConsentContext.Provider value={value}>
      {/* Load Analytics only after consent */}
      {consent === "granted" && (
        <>
          {/* Google Analytics (gtag.js) */}
          {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', { anonymize_ip: true });
                `}
              </Script>
            </>
          )}

          {/* Sentry via CDN (browser SDK) */}
          {process.env.NEXT_PUBLIC_SENTRY_DSN && (
            <>
              <Script
                src="https://browser.sentry-cdn.com/7.120.0/bundle.min.js"
                integrity="sha384-GJX0k0bU8mGZ3H9Qe+Z4y8bWgW8R3K5hN0S7y1eH9hY3q3h5XwR8zZJp3rJf6m2A"
                crossOrigin="anonymous"
                strategy="afterInteractive"
              />
              <Script id="sentry-init" strategy="afterInteractive">
                {`
                  if (window.Sentry) {
                    window.Sentry.init({
                      dsn: '${process.env.NEXT_PUBLIC_SENTRY_DSN}',
                      tracesSampleRate: 0.1,
                      replaysSessionSampleRate: 0.1,
                    });
                  }
                `}
              </Script>
            </>
          )}
        </>
      )}
      {children}
    </ConsentContext.Provider>
  );
}
