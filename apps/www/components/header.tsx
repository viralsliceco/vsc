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
        { label: 'Creators', href: '/' },
        { label: 'Brands', href: '/' },
    ]

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
            <div className={`md:hidden bg-black/95 transition-all duration-200 overflow-hidden ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
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
        </header>
    )
}
