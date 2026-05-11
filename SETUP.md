# Viral Slice Co — Rebuild Setup Guide

This is the one-time setup to turn the rebuilt site into a working
Facebook Ads → Form → Vet → Book-a-Call funnel.

You need to do **four things outside of Vercel**, then paste five values
into the Vercel project's environment variables. Total time: ~30 minutes.

## TL;DR — the env vars you need to set in Vercel

| Variable                        | Source                                  |
| ------------------------------- | --------------------------------------- |
| `NEXT_PUBLIC_META_PIXEL_ID`     | Meta Events Manager (already known: `1733096037992385`) |
| `META_PIXEL_ID`                 | Same value, just without the public prefix |
| `META_CAPI_TOKEN`               | Meta Business Manager → System User token |
| `RESEND_API_KEY`                | resend.com → API Keys                   |
| `LEAD_NOTIFICATION_EMAIL`       | `james@viralsliceco.com`                |
| `LEAD_FROM_EMAIL`               | An address on your verified Resend domain (or leave default to test) |
| `SHEETS_WEBHOOK_URL`            | Google Apps Script deployment URL       |
| `NEXT_PUBLIC_BOOKING_URL`       | Google Calendar Appointment Scheduling URL |

---

## 1) Google Calendar Appointment Scheduling — booking URL

This is what powers the "book a call" step on `/thanks`. It auto-creates
a Google Meet link for every booking. You need a paid Google Workspace
account (any tier) for this — personal `@gmail.com` accounts don't have
Appointment Scheduling.

1. Sign into Google Calendar with `james@viralsliceco.com` (or whichever
   account should host calls).
2. Click the red **Create** button in the top-left → **Appointment schedule**.
3. Set:
   - Title: *Viral Slice Co. — Strategy Call*
   - Duration: 30 minutes
   - Availability window: pick the hours you want calls.
   - Booking window: e.g. require 24 hours notice, max 30 days out.
4. Under **Booked appointment settings**:
   - **Add video conferencing** → **Google Meet**. (This is the bit that
     auto-generates the Meet link.)
   - **Confirmation emails**: leave on.
   - **Booking form**: keep it minimal — the user already filled out the
     vet form. Just ask for **Name** and **Email**, both required.
5. Save. Open the schedule page and click **Share** → **Copy link**.
   It looks like `https://calendar.app.google/abc123...`.
6. Paste that URL into Vercel as `NEXT_PUBLIC_BOOKING_URL`.

**Test:** open the URL in an incognito window. You should see your
availability and be able to book a slot. After booking, the confirmation
email should contain a Google Meet link.

---

## 2) Resend — transactional email for lead alerts

1. Go to https://resend.com → sign up with `james@viralsliceco.com`.
2. **API Keys** → create one called `viralsliceco-prod` with **Sending
   access** scope. Copy it. Paste into Vercel as `RESEND_API_KEY`.
3. **Domains** → add `viralsliceco.com`. Resend gives you 3 DNS records
   (TXT + 2 CNAMEs). Add them in your DNS provider (probably Vercel DNS
   or wherever your domain is). Verification usually completes in a
   few minutes.
4. Once verified, set `LEAD_FROM_EMAIL` to something like
   `"Viral Slice Leads <leads@viralsliceco.com>"`. Until then, leave the
   default `onboarding@resend.dev` to test the integration — Resend will
   only deliver to your own address while sandboxed.

**Test (after env vars are in Vercel):** submit the form on a preview
deploy. You should get an email within a few seconds.

---

## 3) Google Sheets — lead storage via Apps Script

We use an Apps Script webhook instead of the official Sheets API because
it's trivial to set up and doesn't require a service-account JSON key.

1. Create a new Google Sheet titled **VSC Leads** in the same Google
   account.
2. Add this header row in row 1 (exactly these column names, in order —
   the script reads them):

   ```
   submittedAt | fullName | email | phone | businessName | website | industry | monthlyRevenue | marketingBudget | primaryGoal | timeline | notes | utm_source | utm_medium | utm_campaign | utm_term | utm_content | fbclid | gclid | referrer | landingPage | userAgent | ip
   ```

3. **Extensions → Apps Script**. Replace the entire `Code.gs` with:

   ```js
   const HEADERS = [
     "submittedAt","fullName","email","phone","businessName","website",
     "industry","monthlyRevenue","marketingBudget","primaryGoal","timeline","notes",
     "utm_source","utm_medium","utm_campaign","utm_term","utm_content",
     "fbclid","gclid","referrer","landingPage","userAgent","ip",
   ];

   function doPost(e) {
     try {
       const body = JSON.parse(e.postData.contents || "{}");
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       const row = HEADERS.map(h => body[h] !== undefined ? body[h] : "");
       sheet.appendRow(row);
       return ContentService
         .createTextOutput(JSON.stringify({ ok: true }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (err) {
       return ContentService
         .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

4. **Deploy → New deployment → Type: Web app**:
   - Description: *VSC lead webhook*
   - Execute as: **Me**
   - Who has access: **Anyone**  *(it's a write-only endpoint; safe)*
5. Authorize when prompted. Copy the deployment URL — it ends in
   `/exec`. Paste it into Vercel as `SHEETS_WEBHOOK_URL`.

**Test:** in Apps Script, click the play ▶ button next to a manual test
function (or post a test JSON via curl). A new row should appear.

> **If you ever change the script**: pick **Deploy → Manage deployments
> → ✏️ Edit → Version: New version → Deploy**. The `/exec` URL stays
> the same.

---

## 4) Meta Conversions API token (CAPI)

The client-side pixel alone misses ~30–40% of conversions due to ad
blockers and iOS privacy. The CAPI mirror fixes that.

1. https://business.facebook.com → **Business settings → System users**.
2. Click **Add** → name: *Conversions API*, role: **Admin**. Create.
3. With the new user selected, click **Generate new token**:
   - App: pick any app you own, or create one called "VSC Tracking".
   - Scopes: tick `ads_management`.
   - Expiration: **Never expire**.
4. Copy the token. Paste into Vercel as `META_CAPI_TOKEN`.
5. Also set `META_PIXEL_ID=1733096037992385` (same as the public one but
   without `NEXT_PUBLIC_` so it's only readable on the server).

**Test:** in Meta Events Manager → **Test events** tab, you'll see both
the browser pixel event AND the CAPI event for each form submission,
deduped by event ID.

---

## 5) Put it all together in Vercel

1. https://vercel.com/<your-team>/vsc → **Settings → Environment Variables**.
2. Add every variable from `apps/www/.env.example` (the values you
   gathered above) for **Production** AND **Preview**.
3. Trigger a redeploy (commit + push, or **Deployments → ... → Redeploy**).

---

## Local dev

```bash
cp apps/www/.env.example apps/www/.env.local
# edit apps/www/.env.local — at minimum:
#   NEXT_PUBLIC_META_PIXEL_ID  (or leave blank — pixel just won't load)
#   RESEND_API_KEY + LEAD_NOTIFICATION_EMAIL
#   SHEETS_WEBHOOK_URL
#   NEXT_PUBLIC_BOOKING_URL
pnpm install
pnpm --filter www dev
```

Open http://localhost:3000/get-started and walk the form.

---

## What was changed in this rebuild

- **Form** — replaced the Typeform iframe with a native 3-step React form
  with proper validation and attribution capture.
- **Pages added** — `/get-started` (FB ad lander) and `/thanks` (booking).
- **Pages updated** — `/contact` now uses the new form too; root layout
  loads Meta Pixel; homepage hero CTA points to `/get-started`.
- **Fixed** — header & footer nav links that all pointed to `/` or `#`.
- **API** — new `/api/lead` POST route fans out to Sheets, Resend, and
  Meta CAPI in parallel; returns an `eventId` the client uses to fire
  a deduped pixel Lead event.
- **Tracking** — captures `utm_*`, `fbclid`, `gclid`, `referrer`, and
  `landingPage` in sessionStorage; first-touch wins; merged into each
  submission.
- **SEO** — `/get-started` and `/thanks` excluded from sitemap & robots.

## Files added or modified

```
apps/www/lib/lead-types.ts                    new — Zod schema + option lists
apps/www/lib/utm.ts                           new — attribution capture
apps/www/lib/server/sheets.ts                 new — Apps Script poster
apps/www/lib/server/email.ts                  new — Resend wrapper
apps/www/lib/server/meta-capi.ts              new — Conversions API
apps/www/app/api/lead/route.ts                new — POST handler
apps/www/app/get-started/page.tsx             new — FB ad landing page
apps/www/app/thanks/page.tsx                  new — booking page
apps/www/components/meta-pixel.tsx            new — pixel loader + trackLead
apps/www/components/lead-form/fields.tsx      new — themed form primitives
apps/www/components/lead-form/LeadForm.tsx    new — 3-step lead form
apps/www/.env.example                         new — env vars reference

apps/www/app/layout.tsx                       updated — mount Meta Pixel
apps/www/components/header.tsx                updated — fix broken nav
apps/www/components/footer.tsx                updated — fix broken nav
apps/www/components/hero.tsx                  updated — CTA → /get-started
apps/www/components/contact/ContactPage.tsx   updated — use new form
apps/www/next-sitemap.config.js               updated — exclude lander/thanks
```
