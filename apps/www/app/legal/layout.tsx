// Shared layout for all /legal/* pages. Renders the site Header at the top,
// a content container styled for long-form prose, and the Footer at the
// bottom — matches the rest of the site's dark aesthetic without depending
// on the @tailwindcss/typography plugin (not installed).

import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Legal pages can be indexed — they help Meta's ad review crawler too.
  robots: { index: true, follow: true },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto legal-prose">{children}</div>
      </main>
      <Footer />
      {/* Page-local typographic styling so we don't have to repeat utility
          classes in every legal page. Scoped via the `legal-prose` parent
          selector so it doesn't bleed into the rest of the site. */}
      <style>{`
        .legal-prose h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem; line-height: 1.15; }
        .legal-prose h2 { font-size: 1.25rem; font-weight: 600; margin-top: 2.25rem; margin-bottom: 0.5rem; color: #fff; }
        .legal-prose h3 { font-size: 1rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.25rem; color: #e5e5e5; }
        .legal-prose p { color: #d4d4d8; margin-bottom: 1rem; line-height: 1.65; }
        .legal-prose ul { color: #d4d4d8; margin-bottom: 1rem; padding-left: 1.25rem; list-style-type: disc; }
        .legal-prose li { margin-bottom: 0.35rem; line-height: 1.55; }
        .legal-prose strong { color: #fff; font-weight: 600; }
        .legal-prose a { color: var(--primary, #84cc16); text-decoration: underline; }
        .legal-prose a:hover { opacity: 0.85; }
        .legal-prose .effective { color: #71717a; font-size: 0.875rem; margin-bottom: 2rem; }
      `}</style>
    </div>
  );
}
