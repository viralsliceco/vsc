import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies viralsliceco.com uses and how to control them.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="effective">Effective date: May 11, 2026</p>

      <p>
        This policy explains what cookies and similar tracking technologies viralsliceco.com uses,
        and what you can do about them.
      </p>

      <h2>What is a cookie?</h2>
      <p>
        A cookie is a small text file that a website saves in your browser. Cookies help us remember
        information about your visit (like which ad brought you to the Site) so we can measure
        performance and improve the experience.
      </p>

      <h2>Cookies we use</h2>

      <h3>Strictly necessary</h3>
      <p>
        These keep the Site functioning. The session-storage entries that persist your progress
        between the steps of our intake form are an example. We do not ask permission for these
        because the Site does not function without them.
      </p>

      <h3>Analytics</h3>
      <ul>
        <li><strong>Google Analytics 4</strong> (<code>_ga</code>, <code>_gid</code>) — measures site traffic and form completion rates</li>
        <li><strong>PostHog</strong> — product analytics, session replays of anonymized form-interaction patterns</li>
        <li><strong>Vercel Analytics</strong> — web vitals and traffic counts</li>
      </ul>

      <h3>Advertising and attribution</h3>
      <ul>
        <li><strong>Meta Pixel</strong> (<code>_fbp</code>, <code>_fbc</code>) — measures Facebook and Instagram ad performance</li>
        <li><strong>Attribution storage</strong> — UTM tracking parameters, Facebook click IDs (fbclid), and Google click IDs (gclid) are stored in your browser&apos;s session storage so they survive across our multi-step form. This data is cleared when you close the browser tab.</li>
      </ul>

      <h2>How to manage cookies</h2>
      <p>
        You can clear cookies or block them in your browser&apos;s settings. Most browsers also offer
        a &quot;private&quot; or &quot;incognito&quot; mode that does not persist cookies between sessions.
      </p>
      <p>
        Blocking cookies will not prevent you from using the Site, but it may limit our ability to
        attribute your visit to specific marketing campaigns.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as we add or remove tracking technologies. The &quot;Effective date&quot;
        above reflects the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:james@viralsliceco.com">james@viralsliceco.com</a>
      </p>
    </>
  );
}
