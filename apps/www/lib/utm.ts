// Captures ad-attribution params (utm_*, fbclid, gclid) on landing page load,
// persists them in sessionStorage so they survive the multi-step form,
// and exposes a getter for the form submission payload.

const STORAGE_KEY = "vsc_attribution_v1";

type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
  referrer?: string;
  landingPage?: string;
  capturedAt?: string;
};

const ATTRIBUTION_KEYS: ReadonlyArray<keyof Attribution> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
];

function readStored(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function writeStored(attr: Attribution) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attr));
  } catch {
    /* ignore quota / privacy mode errors */
  }
}

/**
 * Call once on the landing page. Reads URL params + document.referrer,
 * merges with anything already stored, and persists.
 * First-touch wins — we only overwrite a value if it's currently empty.
 */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const existing = readStored();
  const url = new URL(window.location.href);
  const next: Attribution = { ...existing };

  for (const key of ATTRIBUTION_KEYS) {
    const val = url.searchParams.get(key);
    if (val && !next[key]) next[key] = val;
  }

  if (!next.referrer && document.referrer) next.referrer = document.referrer;
  if (!next.landingPage) next.landingPage = window.location.pathname + window.location.search;
  if (!next.capturedAt) next.capturedAt = new Date().toISOString();

  writeStored(next);
  return next;
}

export function getAttribution(): Attribution {
  return readStored();
}
