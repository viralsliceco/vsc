import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { BlogCTA } from "./blog-cta";

function isInternal(href: string | undefined): boolean {
  if (!href) return false;
  return href.startsWith("/") || href.startsWith("#");
}

const components = {
  BlogCTA,
  a: ({ href, children }: ComponentPropsWithoutRef<"a">) => {
    if (isInternal(href)) {
      return (
        <Link href={href ?? "#"} prefetch className="text-primary underline underline-offset-4">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4"
      >
        {children}
      </a>
    );
  },
  img: ({ src, alt, width, height }: ComponentPropsWithoutRef<"img">) => {
    if (!src) return null;
    const w = typeof width === "string" ? parseInt(width, 10) : (width ?? 1200);
    const h = typeof height === "string" ? parseInt(height, 10) : (height ?? 675);
    return (
      <Image
        src={String(src)}
        alt={alt ?? ""}
        width={w as number}
        height={h as number}
        className="rounded-xl my-6"
      />
    );
  },
};

export default components;
