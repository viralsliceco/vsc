// Dedicated landing page for paid traffic (Facebook / Instagram ads).
// Single-focus: get the right people into the lead form.
// No site nav, no distractions, no scroll-back to homepage CTAs.

import type { Metadata } from "next";
import LeadForm from "@/components/lead-form/LeadForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Apply to work with Viral Slice Co.",
  description:
    "Tell us a little about your business and we'll book a free 15-minute strategy call to see if we're the right fit to help you grow.",
  robots: { index: false, follow: false }, // Keep paid-traffic landers out of search.
  alternates: { canonical: "/get-started" },
};

// Any stat with an empty `value` is hidden automatically. Numbers below are
// real, defensible totals across the VSC client portfolio. Update as the
// portfolio grows — keep them rounded to readable thresholds.
const STATS = [
  { value: "1.8B+", label: "Views generated" },
  { value: "100+", label: "Brands served" },
];

const WHATS_ON_THE_CALL = [
  "A 5-minute teardown of your last post — what's working, what's costing you reach",
  "One specific hook or angle you can use this week — yours to keep, free",
  "A straight answer on whether we're the right fit — no high-pressure pitch",
];

export default function GetStartedPage() {
  const visibleStats = STATS.filter((s) => s.value && s.label);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="flex justify-center mb-8 md:mb-12">
          <Image
            src="/brand/vsc-logo.svg"
            alt="Viral Slice Co."
            width={96}
            height={30}
            priority
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Pitch column */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-5 border border-white/20 bg-white/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-white/90 text-[0.78rem]">Now accepting new clients</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-anton leading-[0.95] mb-5">
              LET&apos;S MAKE YOUR BRAND <span className="text-primary">UNIGNORABLE</span>.
            </h1>
            <p className="text-zinc-300 text-base md:text-lg mb-7 max-w-lg">
              Answer a few quick questions so we can see if we&apos;re the right fit.
              If we are, you&apos;ll book a free 15-minute call right after — straight on the calendar.
            </p>

            {/* Social proof stats. Edit STATS at the top of this file. */}
            {visibleStats.length > 0 && (
              <div className="flex flex-wrap gap-10 mb-8 pb-8 border-b border-zinc-900">
                {visibleStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl md:text-4xl font-anton text-primary leading-none mb-1.5">
                      {s.value}
                    </div>
                    <div className="text-[0.7rem] uppercase tracking-wider text-zinc-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* What you'll get on the call — sets expectation, reduces no-shows. */}
            <div className="mb-7">
              <h2 className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-4">
                What you&apos;ll get on the call
              </h2>
              <ul className="space-y-3">
                {WHATS_ON_THE_CALL.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-200">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who this is for — pre-qualifies before the form is even started. */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-400">
              <strong className="text-white">Who this is for:</strong>{" "}
              Brands doing $50K+/month in revenue with at least a $2.5K/month content budget. If
              that&apos;s not you yet, we&apos;ll tell you — no hard feelings.
            </div>
          </div>

          {/* Form column */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8">
            <LeadForm />
            <p className="mt-4 text-xs text-zinc-500 text-center">
              Takes about 2 minutes. We respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
