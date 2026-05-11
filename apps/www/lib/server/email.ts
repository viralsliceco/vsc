// Sends a lead-alert email to the internal address via Resend's REST API.
// We hit the API directly (no SDK) to avoid adding a dependency.
// Failures are logged but non-fatal — see sheets.ts comment for rationale.

import type { LeadInput } from "../lead-types";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:#666;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
    <td style="padding:6px 0;color:#111;font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

export async function sendLeadEmail(
  lead: LeadInput,
  meta: { submittedAt: string },
): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "Viral Slice Leads <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn("[lead] RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL not set — skipping email");
    return { ok: false, error: "Email not configured" };
  }

  const subject = `New lead — ${lead.fullName} (${lead.businessName})`;
  const html = `<!doctype html>
<html><body style="margin:0;background:#f6f6f6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
  <div style="max-width:560px;margin:24px auto;background:#fff;border-radius:12px;padding:24px;border:1px solid #eee;">
    <h2 style="margin:0 0 4px;font-size:18px;color:#111;">New lead from the website</h2>
    <p style="margin:0 0 16px;color:#666;font-size:13px;">${escapeHtml(meta.submittedAt)}</p>
    <table style="border-collapse:collapse;width:100%;">
      ${row("Name", lead.fullName)}
      ${row("Email", lead.email)}
      ${row("Phone", lead.phone)}
      ${row("Business", lead.businessName)}
      ${row("Website", lead.website || undefined)}
      ${row("Industry", lead.industry)}
      ${row("Monthly revenue", lead.monthlyRevenue)}
      ${row("Marketing budget", lead.marketingBudget)}
      ${row("Primary goal", lead.primaryGoal)}
      ${row("Timeline", lead.timeline)}
      ${row("Notes", lead.notes || undefined)}
    </table>
    <h3 style="margin:24px 0 8px;font-size:14px;color:#111;">Attribution</h3>
    <table style="border-collapse:collapse;width:100%;">
      ${row("utm_source", lead.utm_source || undefined)}
      ${row("utm_medium", lead.utm_medium || undefined)}
      ${row("utm_campaign", lead.utm_campaign || undefined)}
      ${row("utm_term", lead.utm_term || undefined)}
      ${row("utm_content", lead.utm_content || undefined)}
      ${row("fbclid", lead.fbclid || undefined)}
      ${row("gclid", lead.gclid || undefined)}
      ${row("Referrer", lead.referrer || undefined)}
      ${row("Landing page", lead.landingPage || undefined)}
    </table>
  </div>
</body></html>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead] Resend returned non-OK", res.status, text);
      return { ok: false, error: `Resend ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[lead] Resend failed", err);
    return { ok: false, error: (err as Error).message };
  }
}
