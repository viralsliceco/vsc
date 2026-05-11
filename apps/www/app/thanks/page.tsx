// Post-submission booking page. The lead has been captured + the Meta `Lead`
// event has fired (both client pixel + server CAPI). Now we get them on the
// calendar via an embedded Google Calendar Appointment Scheduling page.
//
// The booking URL is configurable via NEXT_PUBLIC_BOOKING_URL so it can be
// swapped without a code change. If unset we render a friendly fallback.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book your strategy call",
  description:
    "Thanks for applying. Pick a time that works for you and we'll see you on the call.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <div className="flex justify-center mb-8">
          <Link href="/" prefetch>
            <Image
              src="/brand/vsc-logo.svg"
              alt="Viral Slice Co."
              width={96}
              height={30}
              priority
            />
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-5 border border-primary/30 bg-primary/10">
            <span className="text-primary text-[0.78rem] font-medium">Application received</span>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight font-anton mb-3">
            ONE LAST STEP — <span className="text-primary">BOOK YOUR CALL</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-xl mx-auto">
            Pick a time that works for you below. You&apos;ll get a Google Meet link by email as soon as it&apos;s booked.
          </p>
        </div>

        {bookingUrl ? (
          <div className="rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950">
            <iframe
              src={bookingUrl}
              title="Book a call"
              className="w-full"
              style={{ height: "780px", border: "0" }}
              loading="eager"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8 text-center">
            <p className="text-zinc-300 mb-4">
              We received your application. We&apos;ll reach out by email shortly with a link
              to book a Google Meet.
            </p>
            <p className="text-zinc-500 text-sm">
              In a hurry? Email us at{" "}
              <a className="text-primary hover:underline" href="mailto:james@viralsliceco.com">
                james@viralsliceco.com
              </a>
              .
            </p>
          </div>
        )}

        <div className="mt-10 text-center text-sm text-zinc-500">
          Trouble seeing the calendar?{" "}
          {bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Open it in a new tab.
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
