// POST /api/lead — single submission endpoint for the multi-step lead form.
//
// Responsibilities:
//   1. Validate the payload against the shared Zod schema.
//   2. Fan out three side-effects in parallel:
//        - append a row to Google Sheets (via Apps Script webhook)
//        - email the lead alert (via Resend)
//        - mirror a `Lead` event to Meta Conversions API
//   3. Return { ok, eventId } so the client can fire its own pixel `Lead`
//      event with the same eventID for server/client dedupe.
//
// All three side-effects are best-effort: if Sheets or CAPI fail the user
// still gets a success response and is sent to the booking page. The email
// is the canonical record so we surface a partial-failure flag in logs.

import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { leadSchema } from "@/lib/lead-types";
import { appendLeadToSheet } from "@/lib/server/sheets";
import { sendLeadEmail } from "@/lib/server/email";
import { sendMetaLeadEvent } from "@/lib/server/meta-capi";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getClientIp(req: Request): string | undefined {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  return req.headers.get("x-real-ip") ?? undefined;
}

function getCookieValue(cookieHeader: string | null, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(";")) {
    const [k, ...rest] = part.trim().split("=");
    if (k === name) return rest.join("=");
  }
  return undefined;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const lead = parsed.data;

  const submittedAt = new Date().toISOString();
  const userAgent = req.headers.get("user-agent") ?? undefined;
  const clientIp = getClientIp(req);
  const cookieHeader = req.headers.get("cookie");
  const fbp = getCookieValue(cookieHeader, "_fbp");
  const fbc = getCookieValue(cookieHeader, "_fbc");
  const eventId = randomUUID();

  // Fan-out — all three calls are non-throwing per their contracts.
  const [sheets, email, capi] = await Promise.all([
    appendLeadToSheet(lead, { submittedAt, userAgent, ip: clientIp }),
    sendLeadEmail(lead, { submittedAt }),
    sendMetaLeadEvent(lead, {
      eventId,
      eventSourceUrl: lead.landingPage
        ? new URL(lead.landingPage, "https://viralsliceco.com").toString()
        : undefined,
      clientIp,
      userAgent,
      fbp,
      fbc,
    }),
  ]);

  if (!sheets.ok || !email.ok || !capi.ok) {
    console.warn("[lead] partial-failure", {
      sheets: sheets.ok,
      email: email.ok,
      capi: capi.ok,
      errors: { sheets: sheets.error, email: email.error, capi: capi.error },
    });
  }

  return NextResponse.json({ ok: true, eventId });
}
