import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight, Target, Zap, BarChart3, Users } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Hook-first strategy",
    body: "We engineer the first 1.5 seconds of every video around a single job: stop the scroll. Everything downstream — narrative, edit, CTA — is built to keep the attention we just earned.",
  },
  {
    icon: Zap,
    title: "Production that ships",
    body: "Vertical-first content built for Reels, TikTok, Shorts, and Spark Ads. We don't deliver 4K cinematic masterpieces nobody watches. We deliver content that performs.",
  },
  {
    icon: BarChart3,
    title: "Performance, not posts",
    body: "Every post is tagged with the hook angle, the format, and the audience. We know which creative drove which lead, and the next batch is informed by the last batch — not your VP of marketing's gut feel.",
  },
  {
    icon: Users,
    title: "Creator network on tap",
    body: "We don't make you find creators. We have a vetted bench across niches — beauty, fitness, B2B SaaS, home services — ready to brief and ship within days, not months.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Strategy intensive",
    body: "We tear down your last 30 days of content and your top 3 competitors. Identify what's costing you reach and what would move the needle. End of week 1.",
  },
  {
    step: "02",
    title: "Creative slate",
    body: "We build a 30-day content slate: hooks, scripts, casting, edit direction. You approve a batch, we ship the batch.",
  },
  {
    step: "03",
    title: "Test, measure, double down",
    body: "We launch in test cohorts. The winners scale. The losers get killed and replaced. We don't fall in love with creative that isn't working.",
  },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-24 max-w-6xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-6 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          <span className="text-white/90 text-[0.78rem]">For brands ready to scale content</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-anton leading-[0.95] mb-6 max-w-4xl">
          BUILT FOR BRANDS<br />
          THAT WANT TO <span className="text-primary">WIN ATTENTION</span>.
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-8">
          We&apos;re the creative + distribution partner for brands that have outgrown
          posting-and-praying. If your content isn&apos;t moving — it&apos;s almost never the
          algorithm. It&apos;s the hook, the cadence, and the measurement loop. We fix all three.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/get-started?utm_source=brands_page&utm_medium=cta&utm_campaign=brands_hero" prefetch>
            <Button size="lg" className="rounded-2xl cursor-pointer">
              Book a Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-anton tracking-tight mb-3">
          WHAT YOU GET WHEN YOU WORK WITH US
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-12">
          Four things every brand we work with gets, none of which are optional.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-anton tracking-tight mb-3">
          HOW WE WORK
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-12">
          Three phases. No bloated retainers. No deliverables nobody asked for.
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

      {/* Fit */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-anton tracking-tight mb-6">
            WHO WE WORK WELL WITH
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-zinc-300">
            <div>
              <h3 className="text-white font-semibold mb-3">We&apos;re a fit if you&apos;re</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Ready to invest in growth, not just one-off content drops</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Already posting content but seeing flat engagement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Ready to commit to at least a 90-day test window</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Open to data telling you the truth even when it stings</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">We&apos;re not the right fit if you</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Want one-off videos with no strategy attached</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Need an agency to approve every comma and edit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Are shopping primarily on price, not on results</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-600">×</span>
                  <span>Expect 1M views in week one</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-anton tracking-tight leading-[0.95] mb-6">
          READY TO STOP POSTING AND<br />
          START <span className="text-primary">GROWING</span>?
        </h2>
        <p className="text-zinc-300 text-lg mb-8">
          Book a 15-minute strategy call. We&apos;ll tear down a recent post of yours, tell you
          exactly what to fix, and figure out whether working together makes sense.
        </p>
        <Link href="/get-started?utm_source=brands_page&utm_medium=cta&utm_campaign=brands_footer" prefetch>
          <Button size="lg" className="rounded-2xl cursor-pointer">
            Book a Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
