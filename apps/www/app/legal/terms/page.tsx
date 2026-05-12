import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of viralsliceco.com.",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="effective">Effective date: May 11, 2026</p>

      <p>By using viralsliceco.com (the &quot;Site&quot;), you agree to these terms.</p>

      <h2>The Site</h2>
      <p>
        We provide information about Viral Slice Co.&apos;s marketing services and a way to apply for
        a strategy call. The content on the Site is informational; nothing here constitutes a
        guarantee, contract, or offer of service. Engagement with us begins only after a separate
        written services agreement is signed by both parties.
      </p>

      <h2>Your submissions</h2>
      <p>
        When you submit our intake form, you represent that the information you provide is accurate
        and that you are authorized to submit it on behalf of any business you describe. We use the
        information as described in our <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on the Site — including text, logos, video, and design — is owned by Viral Slice
        Co. or licensed to us. You may not copy, distribute, or republish it without our written
        permission.
      </p>

      <h2>No warranty</h2>
      <p>
        The Site is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not
        promise that the Site will be available without interruption or free of errors.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Viral Slice Co. will not be liable for any indirect,
        incidental, special, or consequential damages arising from your use of, or inability to use,
        the Site.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms at any time. The &quot;Effective date&quot; above reflects the most recent
        revision. Continued use of the Site after a change constitutes acceptance of the updated
        terms.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:james@viralsliceco.com">james@viralsliceco.com</a>
      </p>
    </>
  );
}
