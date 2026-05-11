// Three-step lead vetting form.
//   Step 1 — Contact info       (fullName, email, phone, businessName, website)
//   Step 2 — Business context   (industry, monthlyRevenue, marketingBudget)
//   Step 3 — Goals & timeline   (primaryGoal, timeline, notes)
//
// On final submit we POST to /api/lead. On success we fire a client-side
// Meta `Lead` event (deduped against the server CAPI event via eventId)
// and redirect the user to /thanks where the Google Calendar booking
// page is embedded.
//
// Attribution params (utm_*, fbclid, gclid, referrer, landingPage) are
// captured silently by lib/utm.ts and merged into the submission.

"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import {
  leadSchema,
  type LeadInput,
  INDUSTRY_OPTIONS,
  MONTHLY_REVENUE_OPTIONS,
  MARKETING_BUDGET_OPTIONS,
  PRIMARY_GOAL_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/lead-types";
import { captureAttribution, getAttribution } from "@/lib/utm";
import { trackLead } from "@/components/meta-pixel";
import { Label, FieldError, TextInput, Select, TextArea } from "./fields";

type Errors = Partial<Record<keyof LeadInput, string>>;

const EMPTY: LeadInput = {
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  website: "",
  industry: "" as LeadInput["industry"],
  monthlyRevenue: "" as LeadInput["monthlyRevenue"],
  marketingBudget: "" as LeadInput["marketingBudget"],
  primaryGoal: "" as LeadInput["primaryGoal"],
  timeline: "" as LeadInput["timeline"],
  notes: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  fbclid: "",
  gclid: "",
  referrer: "",
  landingPage: "",
};

const STEP_FIELDS: ReadonlyArray<ReadonlyArray<keyof LeadInput>> = [
  ["fullName", "email", "phone", "businessName", "website"],
  ["industry", "monthlyRevenue", "marketingBudget"],
  ["primaryGoal", "timeline", "notes"],
];

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<LeadInput>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Capture attribution once on mount. First-touch wins.
  useEffect(() => {
    captureAttribution();
  }, []);

  function set<K extends keyof LeadInput>(key: K, value: LeadInput[K]) {
    setValues((prev: LeadInput) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev: Errors) => {
        const next: Errors = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function validateStep(idx: number): boolean {
    const fields = STEP_FIELDS[idx];
    if (!fields) return true;
    // We validate against the whole schema and just *filter* errors to the
    // current step's fields. Avoids fighting Zod's generics with .pick().
    const result = leadSchema.safeParse(values);
    const fieldErrors: Record<string, string[] | undefined> = result.success
      ? {}
      : (result.error.flatten().fieldErrors as Record<string, string[] | undefined>);

    const next: Errors = { ...errors };
    let hasError = false;
    for (const f of fields) {
      const msg = fieldErrors[f as string]?.[0];
      if (msg) {
        next[f] = msg;
        hasError = true;
      } else {
        delete next[f];
      }
    }
    setErrors(next);
    return !hasError;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, STEP_FIELDS.length - 1));
  }
  function goBack() {
    setSubmitError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    if (!validateStep(step)) return;
    // Merge attribution at the moment of submit, in case the user took a while.
    const attribution = getAttribution();
    const payload: LeadInput = {
      ...values,
      utm_source: attribution.utm_source ?? "",
      utm_medium: attribution.utm_medium ?? "",
      utm_campaign: attribution.utm_campaign ?? "",
      utm_term: attribution.utm_term ?? "",
      utm_content: attribution.utm_content ?? "",
      fbclid: attribution.fbclid ?? "",
      gclid: attribution.gclid ?? "",
      referrer: attribution.referrer ?? "",
      landingPage: attribution.landingPage ?? "",
    };
    // Final whole-form validation as a belt-and-braces check.
    const result = leadSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors as Record<string, string[]>;
      const next: Errors = {};
      for (const k of Object.keys(fieldErrors)) {
        next[k as keyof LeadInput] = fieldErrors[k]?.[0];
      }
      setErrors(next);
      // Jump back to first step with an error.
      for (let i = 0; i < STEP_FIELDS.length; i++) {
        if (STEP_FIELDS[i]!.some((f) => next[f])) {
          setStep(i);
          break;
        }
      }
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; eventId?: string; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || `Submission failed (${res.status})`);
      }
      if (json.eventId) trackLead(json.eventId);
      router.push("/thanks");
    } catch (err) {
      console.error("[lead] submit failed", err);
      setSubmitError(
        "Something went wrong submitting your application. Please try again, or email james@viralsliceco.com directly.",
      );
      setSubmitting(false);
    }
  }

  const progress = useMemo(() => ((step + 1) / STEP_FIELDS.length) * 100, [step]);

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto" noValidate>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-xs text-zinc-400">
          <span>
            Step {step + 1} of {STEP_FIELDS.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-zinc-900 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">Let&apos;s start with the basics</h2>
          <p className="text-zinc-400 text-sm -mt-3">
            Tell us a little about you and your business.
          </p>
          <div>
            <Label htmlFor="fullName" required>Full name</Label>
            <TextInput
              id="fullName"
              name="fullName"
              autoComplete="name"
              placeholder="Jane Smith"
              value={values.fullName}
              onChange={(e) => set("fullName", e.target.value)}
              error={errors.fullName}
            />
            <FieldError message={errors.fullName} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="email" required>Email</Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jane@yourcompany.com"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                error={errors.email}
              />
              <FieldError message={errors.email} />
            </div>
            <div>
              <Label htmlFor="phone" required>Phone</Label>
              <TextInput
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 555 123 4567"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                error={errors.phone}
              />
              <FieldError message={errors.phone} />
            </div>
          </div>
          <div>
            <Label htmlFor="businessName" required>Business name</Label>
            <TextInput
              id="businessName"
              name="businessName"
              autoComplete="organization"
              placeholder="Acme Co."
              value={values.businessName}
              onChange={(e) => set("businessName", e.target.value)}
              error={errors.businessName}
            />
            <FieldError message={errors.businessName} />
          </div>
          <div>
            <Label htmlFor="website">Website (optional)</Label>
            <TextInput
              id="website"
              name="website"
              autoComplete="url"
              placeholder="https://yourcompany.com"
              value={values.website ?? ""}
              onChange={(e) => set("website", e.target.value)}
              error={errors.website}
            />
            <FieldError message={errors.website} />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">About your business</h2>
          <p className="text-zinc-400 text-sm -mt-3">
            This helps us decide if we&apos;re the right fit before we hop on a call.
          </p>
          <div>
            <Label htmlFor="industry" required>Industry</Label>
            <Select
              id="industry"
              name="industry"
              options={INDUSTRY_OPTIONS}
              value={values.industry || ""}
              onChange={(e) => set("industry", e.target.value as LeadInput["industry"])}
              error={errors.industry}
            />
            <FieldError message={errors.industry} />
          </div>
          <div>
            <Label htmlFor="monthlyRevenue" required>Monthly revenue</Label>
            <Select
              id="monthlyRevenue"
              name="monthlyRevenue"
              options={MONTHLY_REVENUE_OPTIONS}
              value={values.monthlyRevenue || ""}
              onChange={(e) => set("monthlyRevenue", e.target.value as LeadInput["monthlyRevenue"])}
              error={errors.monthlyRevenue}
            />
            <FieldError message={errors.monthlyRevenue} />
          </div>
          <div>
            <Label htmlFor="marketingBudget" required>Marketing budget</Label>
            <Select
              id="marketingBudget"
              name="marketingBudget"
              options={MARKETING_BUDGET_OPTIONS}
              value={values.marketingBudget || ""}
              onChange={(e) => set("marketingBudget", e.target.value as LeadInput["marketingBudget"])}
              error={errors.marketingBudget}
            />
            <FieldError message={errors.marketingBudget} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">What are you trying to achieve?</h2>
          <p className="text-zinc-400 text-sm -mt-3">
            Last step. Then we&apos;ll get you on the calendar.
          </p>
          <div>
            <Label htmlFor="primaryGoal" required>Primary goal</Label>
            <Select
              id="primaryGoal"
              name="primaryGoal"
              options={PRIMARY_GOAL_OPTIONS}
              value={values.primaryGoal || ""}
              onChange={(e) => set("primaryGoal", e.target.value as LeadInput["primaryGoal"])}
              error={errors.primaryGoal}
            />
            <FieldError message={errors.primaryGoal} />
          </div>
          <div>
            <Label htmlFor="timeline" required>When do you want to start?</Label>
            <Select
              id="timeline"
              name="timeline"
              options={TIMELINE_OPTIONS}
              value={values.timeline || ""}
              onChange={(e) => set("timeline", e.target.value as LeadInput["timeline"])}
              error={errors.timeline}
            />
            <FieldError message={errors.timeline} />
          </div>
          <div>
            <Label htmlFor="notes">Anything else we should know? (optional)</Label>
            <TextArea
              id="notes"
              name="notes"
              placeholder="Tell us about your goals, your audience, or anything else relevant…"
              value={values.notes ?? ""}
              onChange={(e) => set("notes", e.target.value)}
              error={errors.notes}
            />
            <FieldError message={errors.notes} />
          </div>
        </div>
      )}

      {submitError && (
        <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {submitError}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          onClick={goBack}
          disabled={step === 0 || submitting}
          className={`rounded-2xl ${step === 0 ? "invisible" : ""}`}
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>

        {step < STEP_FIELDS.length - 1 ? (
          <Button type="button" size="lg" onClick={goNext} className="rounded-2xl">
            Continue <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button type="submit" size="lg" disabled={submitting} className="rounded-2xl">
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-1 animate-spin" /> Submitting…
              </>
            ) : (
              <>
                Submit & book a call <Check className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
