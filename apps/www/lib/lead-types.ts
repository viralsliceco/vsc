import { z } from "zod";

// Single source of truth for form values, options, and validation.
// Used by both the client form and the /api/lead route.

export const INDUSTRY_OPTIONS = [
  "E-commerce",
  "SaaS / Software",
  "Local services",
  "Agency / Consulting",
  "Real estate",
  "Coaching / Info products",
  "Healthcare / Wellness",
  "Other",
] as const;

export const MONTHLY_REVENUE_OPTIONS = [
  "Under $10k / mo",
  "$10k – $50k / mo",
  "$50k – $250k / mo",
  "$250k – $1M / mo",
  "$1M+ / mo",
  "Pre-revenue",
] as const;

export const MARKETING_BUDGET_OPTIONS = [
  "Under $1k / mo",
  "$1k – $5k / mo",
  "$5k – $15k / mo",
  "$15k – $50k / mo",
  "$50k+ / mo",
  "Not sure yet",
] as const;

export const PRIMARY_GOAL_OPTIONS = [
  "More qualified leads",
  "More sales / revenue",
  "Brand awareness",
  "Launch a new product or offer",
  "Scale ad spend profitably",
  "Other",
] as const;

export const TIMELINE_OPTIONS = [
  "ASAP — ready to start now",
  "Within the next 30 days",
  "1 – 3 months",
  "3+ months",
  "Just exploring",
] as const;

// Strict schema — these names must stay in sync with the Apps Script columns
// and the Resend email template in lib/server/email.ts.
export const leadSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().min(6, "Please enter a valid phone number"),
  businessName: z.string().trim().min(2, "Please enter your business name"),
  website: z.string().trim().max(200).optional().or(z.literal("")),

  industry: z.enum(INDUSTRY_OPTIONS),
  monthlyRevenue: z.enum(MONTHLY_REVENUE_OPTIONS),
  marketingBudget: z.enum(MARKETING_BUDGET_OPTIONS),

  primaryGoal: z.enum(PRIMARY_GOAL_OPTIONS),
  timeline: z.enum(TIMELINE_OPTIONS),
  notes: z.string().max(2000).optional().or(z.literal("")),

  // Attribution — captured silently from URL / referrer
  utm_source: z.string().max(200).optional().or(z.literal("")),
  utm_medium: z.string().max(200).optional().or(z.literal("")),
  utm_campaign: z.string().max(200).optional().or(z.literal("")),
  utm_term: z.string().max(200).optional().or(z.literal("")),
  utm_content: z.string().max(200).optional().or(z.literal("")),
  fbclid: z.string().max(500).optional().or(z.literal("")),
  gclid: z.string().max(500).optional().or(z.literal("")),
  referrer: z.string().max(500).optional().or(z.literal("")),
  landingPage: z.string().max(500).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
