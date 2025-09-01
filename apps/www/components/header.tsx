'use client'

import { useState } from 'react'
import { Button } from '@workspace/ui/components/button'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Creators', href: '/creators' },
        { label: 'Brands', href: '/brands' },
    ]

    return (
        <header className="top-0 left-0 right-0 z-50">
            <div className="px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" prefetch>
                    <div className="flex items-center gap-2">
                        <Image src="/brand/vsc-logo.svg" alt="Viralish" width={34} height={20} />
                        <div className="text-xl font-medium">
                            <span className="">Viral Slice Company</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-white hover:text-primary transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
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
            {isMenuOpen && (
                <div className="md:hidden bg-black/95">
                    <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-white hover:text-primary transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
