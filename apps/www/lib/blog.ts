import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const FAQItem = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const FrontmatterSchema = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(80).max(170),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "publishedAt must be YYYY-MM-DD"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  author: z.string().default("Viral Slice Co."),
  category: z.enum(["short-form-video", "creator-economy", "platform-updates", "case-studies"]),
  tags: z.array(z.string()).default([]),
  primaryKeyword: z.string().min(1),
  relatedKeywords: z.array(z.string()).default([]),
  heroImage: z.string().optional(),
  heroImageAlt: z.string().optional(),
  draft: z.boolean().default(false),
  faqs: z.array(FAQItem).default([]),
});

export type Frontmatter = z.infer<typeof FrontmatterSchema>;

export type PostMeta = Frontmatter & {
  slug: string;
  readingTimeMinutes: number;
};

export type Post = PostMeta & {
  content: string;
};

const CATEGORY_LABELS: Record<Frontmatter["category"], string> = {
  "short-form-video": "Short-form Video",
  "creator-economy": "Creator Economy",
  "platform-updates": "Platform Updates",
  "case-studies": "Case Studies",
};

export function categoryLabel(category: Frontmatter["category"]): string {
  return CATEGORY_LABELS[category];
}

function readPostFile(slug: string): { data: Frontmatter; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const result = FrontmatterSchema.safeParse(parsed.data);

  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in content/blog/${slug}.mdx: ${result.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("; ")}`,
    );
  }

  return { data: result.data, content: parsed.content };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const posts: PostMeta[] = [];

  for (const slug of slugs) {
    const file = readPostFile(slug);
    if (!file) continue;
    if (file.data.draft && process.env.NODE_ENV === "production") continue;

    posts.push({
      ...file.data,
      slug,
      readingTimeMinutes: Math.max(1, Math.round(readingTime(file.content).minutes)),
    });
  }

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const file = readPostFile(slug);
  if (!file) return null;
  if (file.data.draft && process.env.NODE_ENV === "production") return null;

  return {
    ...file.data,
    slug,
    readingTimeMinutes: Math.max(1, Math.round(readingTime(file.content).minutes)),
    content: file.content,
  };
}
