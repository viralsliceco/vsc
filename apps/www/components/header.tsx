"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import Image from "next/image";
import { Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Creators", href: "/creators" },
    { label: "Brands", href: "/brands" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="top-0 left-0 right-0 z-50">
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" prefetch>
          <div className="flex">
            <Image
              src="/brand/vsc-logo.svg"
              alt="Viral Slice Co."
              width={64}
              height={20}
              priority
              className="w-full h-full"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems
            .filter((item) => item.label !== "Contact")
            .map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch
                className="text-white/90 hover:text-primary transition-colors duration-200 text-sm"
              >
                {item.label}
              </Link>
            ))}
          <Link href="/contact" prefetch>
            <Button
              variant="default"
              size="lg"
              className="rounded-2xl cursor-pointer"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 transition-all duration-200 overflow-hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              prefetch
              className="text-white hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
