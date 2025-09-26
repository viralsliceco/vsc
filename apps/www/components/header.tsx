"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Mail, Mails, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { 
      label: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { label: "Creative", href: "/services/creative" },
        { label: "Strategy", href: "/services/strategy" },
        { label: "Consulting", href: "/services/consulting" },
        { label: "Web Design", href: "/services/web-design" },
      ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="text-sm font-medium transition-colors duration-200">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[200px]">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <NavigationMenuLink asChild key={dropdownItem.label}>
                            <Link
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="px-2 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link href="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-2xl cursor-pointer"
                >
                  Connect with Us <Mails className="w-4 h-4" /> 
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
        className={`md:hidden bg-black/95 transition-all duration-200 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-200 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
              {item.hasDropdown && item.dropdownItems && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 block text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
