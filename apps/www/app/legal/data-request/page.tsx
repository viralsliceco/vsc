import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Request",
  description:
    "Request a copy, correction, or deletion of personal data Viral Slice Co. holds about you.",
};

export default function DataRequestPage() {
  return (
    <>
      <h1>Data Request</h1>
      <p className="effective">Effective date: May 11, 2026</p>

      <p>You can ask us to:</p>
      <ul>
        <li><strong>Provide</strong> a copy of the personal information we hold about you</li>
        <li><strong>Delete</strong> the personal information we hold about you</li>
        <li><strong>Correct</strong> information that is inaccurate</li>
      </ul>

      <h2>How to request</h2>
      <p>
        Send an email to <a href="mailto:hello@viralsliceco.com">hello@viralsliceco.com</a> with one
        of the following subject lines:
      </p>
      <ul>
        <li>&quot;Data Access Request&quot; — if you want a copy</li>
        <li>&quot;Data Deletion Request&quot; — if you want it deleted</li>
        <li>&quot;Data Correction Request&quot; — if you want something updated</li>
      </ul>
      <p>In the body, include:</p>
      <ul>
        <li>The email address or phone number you used when you submitted our form (so we can locate your record)</li>
        <li>A brief description of the action you would like us to take</li>
      </ul>

      <h2>What happens next</h2>
      <p>We will:</p>
      <ul>
        <li>Acknowledge your request within 5 business days</li>
        <li>Complete your request within 30 days</li>
        <li>Send you a confirmation when it is done</li>
      </ul>
      <p>
        If we cannot fulfill your request (for example, if we are legally required to retain certain
        records for tax or compliance reasons), we will explain why in our response.
      </p>

      <h2>What deletion covers</h2>
      <p>A deletion request removes your record from:</p>
      <ul>
        <li>Our internal Google Sheets log</li>
        <li>Our active email lists and scheduled outreach</li>
        <li>Resend transactional email history, where supported by Resend&apos;s retention policies</li>
      </ul>
      <p>
        We cannot delete information that has already been transmitted to Meta or Google for ad
        measurement — those services have their own retention policies that we are not able to
        override on your behalf. We will, however, exclude your contact information from future
        custom audience uploads.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:hello@viralsliceco.com">hello@viralsliceco.com</a>
      </p>
    </>
  );
}
