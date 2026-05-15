import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { categoryLabel, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Viral Slice Co.",
  description:
    "Short-form video trends, creator economy moves, algorithm changes, and brand teardowns from the Viral Slice Co. team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://viralsliceco.com/blog",
    title: "Blog — Viral Slice Co.",
    description:
      "Short-form video trends, creator economy moves, algorithm changes, and brand teardowns from the Viral Slice Co. team.",
  },
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Viral Slice Co. Blog",
    url: "https://viralsliceco.com/blog",
    description:
      "Short-form video trends, creator economy moves, algorithm changes, and brand teardowns.",
    publisher: {
      "@type": "Organization",
      name: "Viral Slice Co.",
      url: "https://viralsliceco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://viralsliceco.com/vsc-large.png",
      },
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://viralsliceco.com/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="container mx-auto px-4 pt-8 pb-24">
          <header className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-anton text-5xl md:text-7xl uppercase tracking-tight">
              The Viral Slice Blog
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70">
              Short-form trends, creator-economy moves, algorithm shifts, and brand teardowns —
              from the team behind hundreds of millions of views.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="text-center text-white/60">No posts yet — check back soon.</p>
          ) : (
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    prefetch
                    className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/60 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/50">
                      <span className="text-primary">{categoryLabel(post.category)}</span>
                      <span>·</span>
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span>{post.readingTimeMinutes} min read</span>
                    </div>
                    <h2 className="mt-3 font-anton text-2xl uppercase tracking-tight leading-tight group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-white/70 text-sm line-clamp-3">{post.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
