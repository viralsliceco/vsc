// Per-post OG image, served at /blog/<slug>/og.png and prerendered at build
// time for every published post. An explicit route handler (rather than the
// opengraph-image file convention) because Next 15.5 emits a broken
// twitter:image URL for dynamic-segment convention files — this way the URL
// is exactly what the page metadata says it is.
import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { categoryLabel, getAllPosts, getPostBySlug } from "@/lib/blog";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// Anton is the brand headline font — satori needs the raw TTF.
const antonFont = readFile(path.join(process.cwd(), "assets/fonts/Anton-Regular.ttf"));

// Scale the headline down as titles get longer so 80-char titles still fit.
function titleFontSize(title: string): number {
  if (title.length <= 40) return 84;
  if (title.length <= 60) return 68;
  return 56;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "The Viral Slice Blog";
  const category = post ? categoryLabel(post.category) : "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 85% -10%, rgba(132,204,22,0.28) 0%, rgba(0,0,0,0) 55%)",
          padding: "64px 72px",
          fontFamily: "Anton",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#84cc16",
              color: "#000000",
              fontSize: 26,
              padding: "8px 20px",
              borderRadius: 999,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: titleFontSize(title),
            lineHeight: 1.08,
            textTransform: "uppercase",
            letterSpacing: -1,
            maxWidth: 1020,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#84cc16",
              fontSize: 34,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Viral Slice Co.
          </div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.6)", fontSize: 26 }}>
            viralsliceco.com/blog
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Anton",
          data: await antonFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
