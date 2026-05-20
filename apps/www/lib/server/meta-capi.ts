// Meta Conversions API — server-side mirror of the client Pixel `Lead` event.
// This dramatically improves attribution under iOS/ITP restrictions.
// Pair the server event with the client `fbq('track','Lead',...,{eventID})` of
// the same eventID so Meta dedupes them.
//
// Required env vars:
//   META_PIXEL_ID        — the pixel ID (same as NEXT_PUBLIC_META_PIXEL_ID)
//   META_CAPI_TOKEN      — a System User access token with ads_management scope
//
// If either is missing this becomes a no-op (logged warning, ok:false).

import { createHash } from "node:crypto";
import type { LeadInput } from "../lead-types";

function sha256(s: string): string {
  return createHash("sha256").update(s.trim().toLowerCase()).digest("hex");
}

function digitsOnly(s: string): string {
  return s.replace(/\D+/g, "");
}

export async function sendMetaLeadEvent(
  lead: LeadInput,
  meta: {
    eventId: string;
    eventSourceUrl?: string;
    clientIp?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
  },
): Promise<{ ok: boolean; error?: string }> {
  // The pixel ID is not secret (it's already exposed client-side via
  // NEXT_PUBLIC_META_PIXEL_ID), so we fall back to it rather than requiring
  // a separate server-only META_PIXEL_ID env var. Only META_CAPI_TOKEN
  // genuinely needs to be a private server-side secret.
  const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token) {
    console.warn("[lead] pixel ID or META_CAPI_TOKEN not set — skipping CAPI");
    return { ok: false, error: "CAPI not configured" };
  }

  const userData: Record<string, string | string[]> = {
    em: [sha256(lead.email)],
    ph: [sha256(digitsOnly(lead.phone))],
    fn: [sha256(lead.fullName.split(" ")[0] || lead.fullName)],
    ln: [sha256(lead.fullName.split(" ").slice(1).join(" ") || lead.fullName)],
  };
  if (meta.clientIp) userData.client_ip_address = meta.clientIp;
  if (meta.userAgent) userData.client_user_agent = meta.userAgent;
  if (meta.fbp) userData.fbp = meta.fbp;
  if (meta.fbc) userData.fbc = meta.fbc;

  const body: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: meta.eventId,
        action_source: "website",
        event_source_url: meta.eventSourceUrl,
        user_data: userData,
        custom_data: {
          content_name: "Lead Form Submitted",
          lead_business: lead.businessName,
          lead_industry: lead.industry,
          lead_revenue: lead.monthlyRevenue,
          lead_budget: lead.marketingBudget,
        },
      },
    ],
  };

  // If META_TEST_EVENT_CODE is set, tag events so they surface in the
  // Events Manager "Test Events" tab as Server events. Use this only for
  // verification — UNSET it in production once confirmed, otherwise real
  // conversions get routed to test data and won't count toward ad
  // optimization.
  const testEventCode = process.env.META_TEST_EVENT_CODE;
  if (testEventCode) {
    body.test_event_code = testEventCode;
  }

  try {
    const url = `https://graph.facebook.com/v18.0/${encodeURIComponent(pixelId)}/events?access_token=${encodeURIComponent(token)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead] Meta CAPI returned non-OK", res.status, text);
      return { ok: false, error: `CAPI ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[lead] Meta CAPI failed", err);
    return { ok: false, error: (err as Error).message };
  }
}
