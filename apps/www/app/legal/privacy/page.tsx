import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Viral Slice Co. collects, uses, and protects the information you submit on viralsliceco.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="effective">Effective date: May 11, 2026</p>

      <p>
        Viral Slice Co. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates viralsliceco.com (the &quot;Site&quot;).
        This Privacy Policy explains what information we collect when you use the Site,
        how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit our intake form on <strong>/get-started</strong> or <strong>/contact</strong>,
        we collect:
      </p>
      <ul>
        <li>Your full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Business name and (if provided) website</li>
        <li>Industry, monthly revenue range, and marketing budget range</li>
        <li>Your stated marketing goals and timeline</li>
        <li>Any free-text notes you choose to share</li>
      </ul>

      <p>We also automatically capture, where available:</p>
      <ul>
        <li>Page URL and referrer</li>
        <li>UTM tracking parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content)</li>
        <li>Facebook click ID (fbclid) and Google click ID (gclid) for ad attribution</li>
        <li>IP address and user agent (used for fraud prevention and ad-attribution; never displayed or sold)</li>
        <li>Browser cookies set by analytics and advertising services (see Cookies)</li>
      </ul>

      <h2>How we use it</h2>
      <p>We use the information you submit to:</p>
      <ul>
        <li>Decide whether we are a fit for working together and contact you about scheduling a strategy call</li>
        <li>Pre-populate context for our conversation so the call is more useful to you</li>
        <li>Measure the performance of our marketing campaigns</li>
        <li>Respond to inquiries</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>Third-party services we use</h2>
      <p>
        Your submission is shared with the following services strictly for the purposes described
        above. Each has its own privacy policy, and we share only the data each service needs to do
        its job.
      </p>
      <ul>
        <li><strong>Google Sheets</strong> — stores our internal lead log</li>
        <li><strong>Resend</strong> — sends us a lead-alert email when you submit</li>
        <li><strong>Google Analytics 4</strong> — anonymized site analytics</li>
        <li><strong>Meta (Facebook) Pixel and Conversions API</strong> — ad performance measurement</li>
        <li><strong>Vercel</strong> — hosts the site</li>
        <li><strong>PostHog</strong> — product analytics</li>
      </ul>

      <h2>Cookies and similar technologies</h2>
      <p>
        We use cookies and similar technologies for analytics and advertising attribution.
        Common ones include <code>_fbp</code> and <code>_fbc</code> (Meta Pixel), <code>_ga</code> and
        <code> _gid</code> (Google Analytics), and PostHog session cookies. See our{" "}
        <a href="/legal/cookies">Cookie Policy</a> for the full breakdown.
      </p>
      <p>
        You can clear or block cookies via your browser&apos;s settings. Blocking them will not break
        the Site but will limit our ability to measure ad performance.
      </p>

      <h2>Your rights</h2>
      <p>You can:</p>
      <ul>
        <li>Request a copy of the personal data we hold about you</li>
        <li>Request that we delete it</li>
        <li>Request that we correct inaccurate data</li>
        <li>Opt out of marketing communications</li>
      </ul>
      <p>
        To exercise any of these rights, see our <a href="/legal/data-request">Data Request</a> page
        or email <a href="mailto:hello@viralsliceco.com">hello@viralsliceco.com</a>. We will respond
        within 30 days.
      </p>

      <h2>Children</h2>
      <p>
        The Site is not directed at children under 13. We do not knowingly collect personal data
        from minors.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the Site and our services evolve. The &quot;Effective date&quot;
        above will reflect the most recent change.
      </p>

      <h2>Contact</h2>
      <p>
        Viral Slice Co.
        <br />
        <a href="mailto:hello@viralsliceco.com">hello@viralsliceco.com</a>
      </p>
    </>
  );
}
