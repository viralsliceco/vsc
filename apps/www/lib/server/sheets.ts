// Posts a lead row to a Google Apps Script web-app webhook.
// The Apps Script (see SETUP.md) appends a row to the connected Google Sheet.
// Designed to never throw — failures are logged so the API route can still
// fire the email + return success to the user. We never block the user on
// a backend integration glitch.

import type { LeadInput } from "../lead-types";

export async function appendLeadToSheet(
  lead: LeadInput,
  meta: { submittedAt: string; userAgent?: string; ip?: string },
): Promise<{ ok: boolean; error?: string }> {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) {
    console.warn("[lead] SHEETS_WEBHOOK_URL not set — skipping sheet append");
    return { ok: false, error: "SHEETS_WEBHOOK_URL not configured" };
  }

  const payload = {
    submittedAt: meta.submittedAt,
    userAgent: meta.userAgent ?? "",
    ip: meta.ip ?? "",
    ...lead,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Apps Script web apps can be slow on cold start; keep a sane cap.
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead] Sheets webhook returned non-OK", res.status, text);
      return { ok: false, error: `Sheets webhook ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[lead] Sheets webhook failed", err);
    return { ok: false, error: (err as Error).message };
  }
}
