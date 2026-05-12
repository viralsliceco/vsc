import { Button } from "@workspace/ui/components/button";
import { ArrowRight, DollarSign, Briefcase, TrendingUp, ShieldCheck } from "lucide-react";

const REASONS = [
  {
    icon: DollarSign,
    title: "Get paid what you're worth",
    body: "Flat rates with usage rights priced separately, not bundled. You see the brief, you see the budget, you decide. No clout-for-clout deals.",
  },
  {
    icon: Briefcase,
    title: "Real briefs from real brands",
    body: "Every campaign comes with clear deliverables, a real budget, and a brand that gets what good content looks like — because we already vetted them. No 'we'll send free product' nonsense.",
  },
  {
    icon: TrendingUp,
    title: "Grow your own audience",
    body: "You keep ownership of every piece you make. We help you build personal brand momentum on the back of brand work — not bury your face in someone else's product.",
  },
  {
    icon: ShieldCheck,
    title: "We've got your back",
    body: "Payment terms enforced. Usage rights documented. Brand notes channeled through us, not dumped on your DMs at 11pm. We're the buffer between you and chaos.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Apply to the network",
    body: "Send us your handles, your niche, and a couple of links to recent work. We review every application personally — usually within 5 business days.",
  },
  {
    step: "02",
    title: "Get briefed when there's a fit",
    body: "When a campaign matches your niche and rate range, we send you the brief. You opt in or pass. No pressure, no obligation.",
  },
  {
    step: "03",
    title: "Create, deliver, get paid",
    body: "Net-15 payment terms by default — none of this 'pay you in 90 days' agency drama. Most of our creators get paid within 7 days of delivery.",
  },
];

export default function CreatorPage() {
  const applyHref =
    "mailto:james@viralsliceco.com?subject=Creator%20Network%20Application&body=Hi%20Viral%20Slice%20Co.%2C%0A%0AI%27d%20like%20to%20apply%20to%20your%20creator%20network.%0A%0AName%3A%20%0AInstagram%3A%20%0ATikTok%3A%20%0AYouTube%3A%20%0ANiche%3A%20%0ATypical%20rate%20per%20deliverable%3A%20%0A%0ALinks%20to%20recent%20work%3A%0A1.%20%0A2.%20%0A3.%20%0A%0AAnything%20else%20I%20should%20know%20about%20me%3A%0A";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-24 max-w-6xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-6 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          <span className="text-white/90 text-[0.78rem]">Now accepting creators</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-anton leading-[0.95] mb-6 max-w-4xl">
          GET PAID TO MAKE<br />
          <span className="text-primary">CONTENT YOU&apos;D MAKE ANYWAY</span>.
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-8">
          We work with brands that want viral content — and we hire creators to make it.
          Real budgets. Real briefs. Real payment terms. None of the agency BS that wastes your time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={applyHref}>
            <Button size="lg" className="rounded-2xl cursor-pointer">
              Apply to the Network <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </section>

      {/* Reasons */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-anton tracking-tight mb-3">
          WHY CREATORS WORK WITH US
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-12">
          We treat creators like the talent you are, not like cheap content factories.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{r.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-anton tracking-tight mb-3">
          HOW IT WORKS
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-12">
          Three steps. No upfront fees. No exclusivity contracts.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {PROCESS.map((p) => (
            <div key={p.step} className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8">
              <div className="text-primary font-anton text-3xl mb-3">{p.step}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-anton tracking-tight mb-6">
            WHO WE&apos;RE LOOKING FOR
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-zinc-300">
            <div>
              <h3 className="text-white font-semibold mb-3">Apply if you</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Have a working understanding of short-form (Reels, TikTok, Shorts)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Can shoot, edit, and deliver without a 6-person crew</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Take direction without being precious about it</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Hit deadlines. Boring but non-negotiable.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Skip us if you</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Need 4 weeks to turn around a 30-second video</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Only want to post on your terms with no brand input</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Don&apos;t have at least a small audience to attach to the work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-anton tracking-tight leading-[0.95] mb-6">
          THINK YOU&apos;RE A FIT?<br />
          <span className="text-primary">SEND US YOUR WORK</span>.
        </h2>
        <p className="text-zinc-300 text-lg mb-8">
          Quick email — we review every applicant personally and we&apos;ll get back to you within 5 business days.
        </p>
        <a href={applyHref}>
          <Button size="lg" className="rounded-2xl cursor-pointer">
            Apply to the Network <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </a>
      </section>
    </div>
  );
}
