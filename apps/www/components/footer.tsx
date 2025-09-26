import Image from "next/image"
import { Wordmark } from "./ui/wordmark"

export default function Footer() {
    const sections = [
        {
            heading: "Company",
            links: [
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "/contact" },

            ],
        },
        {
            heading: "Services",
            links: [
                { label: "Creative", href: "#" },
                { label: "Media", href: "#" },
                { label: "Strategy", href: "#" },
                { label: "Consulting", href: "#" },
                { label: "Web Design", href: "#" },
            ],
        },
    ];

    const legalLinks = [
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Date Request Policy', href: '#' }
    ];

    return (
        <>
            <footer className="border-t border-zinc-900">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        {/* Logo on the left */}
                        <div className="flex-shrink-0 mb-8 md:mb-0">
                            <div className="text-2xl font-bold mb-6">
                                <Image src="/brand/vsc-logo.svg" alt="VSC" className="w-10 h-10" width={40} height={40} />
                            </div>
                        </div>
                        {/* Sections on the right */}
                        <div className="flex flex-col sm:flex-row gap-12 w-full justify-end">
                            {sections.map((section) => (
                                <div key={section.heading} className="min-w-[120px]">
                                    <h4 className="text-zinc-200 font-semibold text-sm mb-3 uppercase tracking-widest">{section.heading}</h4>
                                    <ul className="space-y-2 text-sm text-zinc-400">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="hover:text-primary transition-colors duration-200"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Bottom section */}
                    <div className="border-t border-zinc-900 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-zinc-400 text-sm">
                                Viral Slice Co. © 2025 | All Rights Reserved
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm">
                                {legalLinks.map((link, index) => (
                                    <span key={link.label} className="flex items-center">
                                        <a
                                            href={link.href}
                                            className="text-primary hover:text-primary/80 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                        {index < legalLinks.length - 1 && (
                                            <span className="text-zinc-600 ml-4">|</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Wordmark />
        </>
    )
}
