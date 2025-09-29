export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
      <h1>Cookies & Tracking</h1>
      <p>
        FlowAfric uses a minimal set of client-side storage and third‑party scripts to improve
        your experience and understand website performance. We only enable analytics after you
        provide consent via the cookie banner.
      </p>

      <h2>What We Store</h2>
      <ul>
        <li>
          <strong>Consent status</strong> (localStorage key <code>flowafric_cookie_consent</code>): remembers whether you granted
          or denied analytics. Values: <code>granted</code> | <code>denied</code>.
        </li>
        <li>
          <strong>Google Analytics</strong> (optional, only after consent): may set cookies like <code>_ga</code> to measure anonymous usage.
          IP anonymization is enabled.
        </li>
        <li>
          <strong>Sentry</strong> (optional, only after consent): captures front‑end error reports and performance traces; no marketing cookies.
        </li>
      </ul>

      <h2>How to Change Your Choice</h2>
      <p>
        You can revoke consent at any time by clearing your browser site data for FlowAfric, or by removing
        the localStorage key <code>flowafric_cookie_consent</code>. On next visit, the banner will reappear.
      </p>

      <h2>Newsletter</h2>
      <p>
        When you subscribe, we process the email address you provide to send updates about FlowAfric. You can unsubscribe at any time via the link in our emails.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, email us at <a href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a>.
      </p>
    </main>
  );
}
