import Link from "next/link";

import { Button } from "@workspace/ui/components/button";

type Props = {
  heading?: string;
  body?: string;
  buttonLabel?: string;
};

export function BlogCTA({
  heading = "Ready to make your brand the next thing people share?",
  body = "Book a free 15-minute strategy call. We'll tear down your last post, give you one hook you can use this week, and tell you straight up whether we're the right fit.",
  buttonLabel = "Get Started",
}: Props) {
  return (
    <aside className="not-prose my-12 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 via-black to-black p-8 md:p-10">
      <h3 className="font-anton text-2xl md:text-3xl uppercase tracking-tight text-white">
        {heading}
      </h3>
      <p className="mt-3 text-white/80 text-base md:text-lg max-w-2xl">{body}</p>
      <Button asChild size="lg" className="mt-6">
        <Link href="/get-started" prefetch>
          {buttonLabel}
        </Link>
      </Button>
    </aside>
  );
}
