import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { BlogCTA } from "@/components/blog/blog-cta";
import mdxComponents from "@/components/blog/mdx-components";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { categoryLabel, getAllPosts, getPostBySlug } from "@/lib/blog";

const SITE_URL = "https://viralsliceco.com";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.heroImage ?? "/vsc-large.png";

  return {
    title: post.title,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.relatedKeywords],
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: `${post.publishedAt}T00:00:00.000Z`,
      modifiedTime: `${post.updatedAt ?? post.publishedAt}T00:00:00.000Z`,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.heroImageAlt ?? post.title }],
      siteName: "Viral Slice Co.",
    },
    twitter: {
      card: "summary_large_image",
      site: "@viralsliceco",
      creator: "@viralsliceco",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.heroImage ? `${SITE_URL}${post.heroImage}` : `${SITE_URL}/vsc-large.png`,
    datePublished: `${post.publishedAt}T00:00:00.000Z`,
    dateModified: `${post.updatedAt ?? post.publishedAt}T00:00:00.000Z`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Viral Slice Co.",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/vsc-large.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.primaryKeyword, ...post.relatedKeywords].join(", "),
    articleSection: categoryLabel(post.category),
  };

  const faqJsonLd =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="min-h-screen bg-black text-white">
        <Header />
        <article className="container mx-auto px-4 pt-8 pb-24">
          <div className="max-w-3xl mx-auto">
            <nav className="mb-8 text-sm text-white/60">
              <Link href="/blog" prefetch className="hover:text-primary">
                ← All posts
              </Link>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/60">
                <span className="text-primary">{categoryLabel(post.category)}</span>
                <span>·</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span>·</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              <h1 className="mt-4 font-anton text-4xl md:text-6xl uppercase tracking-tight leading-[1.05]">
                {post.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/75">{post.description}</p>
            </header>

            <div className="blog-prose">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: "wrap" }],
                    ],
                  },
                }}
              />
            </div>

            {post.faqs.length > 0 && (
              <section className="mt-16">
                <h2 className="font-anton text-3xl md:text-4xl uppercase tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
                <dl className="space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-white/10 p-6">
                      <dt className="font-semibold text-white">{faq.question}</dt>
                      <dd className="mt-2 text-white/75">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <BlogCTA />
          </div>
        </article>
        <Footer />
      </div>
      <style>{`
        .blog-prose h2 { font-family: var(--font-anton); text-transform: uppercase; letter-spacing: -0.01em; font-size: 1.75rem; line-height: 1.15; margin-top: 2.5rem; margin-bottom: 0.75rem; color: #fff; }
        .blog-prose h3 { font-family: var(--font-anton); text-transform: uppercase; letter-spacing: -0.01em; font-size: 1.35rem; line-height: 1.2; margin-top: 2rem; margin-bottom: 0.5rem; color: #fff; }
        .blog-prose p { color: #d4d4d8; margin-bottom: 1.1rem; line-height: 1.7; font-size: 1.05rem; }
        .blog-prose ul { color: #d4d4d8; margin: 0.5rem 0 1.2rem 1.25rem; list-style-type: disc; }
        .blog-prose ol { color: #d4d4d8; margin: 0.5rem 0 1.2rem 1.25rem; list-style-type: decimal; }
        .blog-prose li { margin-bottom: 0.4rem; line-height: 1.6; }
        .blog-prose strong { color: #fff; font-weight: 600; }
        .blog-prose em { color: #e5e5e5; }
        .blog-prose a { color: var(--primary, #84cc16); text-decoration: underline; text-underline-offset: 4px; }
        .blog-prose a:hover { opacity: 0.85; }
        .blog-prose blockquote { border-left: 3px solid var(--primary, #84cc16); padding-left: 1rem; color: #a1a1aa; margin: 1.5rem 0; font-style: italic; }
        .blog-prose code { background: rgba(255,255,255,0.08); padding: 0.15rem 0.4rem; border-radius: 0.25rem; font-size: 0.9em; }
        .blog-prose pre { background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.25rem 0; }
        .blog-prose pre code { background: transparent; padding: 0; }
        .blog-prose hr { border-color: rgba(255,255,255,0.1); margin: 2.5rem 0; }
        .blog-prose table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; color: #d4d4d8; }
        .blog-prose th, .blog-prose td { border: 1px solid rgba(255,255,255,0.1); padding: 0.5rem 0.75rem; text-align: left; }
        .blog-prose th { background: rgba(255,255,255,0.05); color: #fff; font-weight: 600; }
      `}</style>
    </>
  );
}
