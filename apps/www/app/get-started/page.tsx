// Dedicated landing page for paid traffic (Facebook / Instagram ads).
// Single-focus: get the right people into the lead form.
// No site nav, no distractions, no scroll-back to homepage CTAs.

import type { Metadata } from "next";
import LeadForm from "@/components/lead-form/LeadForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Apply to work with Viral Slice Co.",
  description:
    "Tell us a little about your business and we'll book a free 30-minute strategy call to see if we're the right fit to help you grow.",
  robots: { index: false, follow: false }, // Keep paid-traffic landers out of search.
  alternates: { canonical: "/get-started" },
};

const POINTS = [
  "Free 30-minute strategy call — no obligation",
  "We only take on businesses we know we can move the needle for",
  "Walk away with at least one idea you can use even if we don't work together",
];

export default function GetStartedPage() {
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
          <div className="lg:sticky lg:top-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-5 border border-white/20 bg-white/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-white/90 text-[0.78rem]">Now accepting new clients</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-anton leading-[0.95] mb-5">
              LET&apos;S MAKE YOUR BRAND <span className="text-primary">UNIGNORABLE</span>.
            </h1>
            <p className="text-zinc-300 text-base md:text-lg mb-7 max-w-lg">
              Answer a few quick questions so we can see if we&apos;re the right fit.
              If we are, you&apos;ll book a free 30-minute call right after — straight on the calendar.
            </p>
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-zinc-200">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form column */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </main>
  );
}
