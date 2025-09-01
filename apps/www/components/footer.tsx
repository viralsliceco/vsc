import Image from "next/image"
import { Wordmark } from "./ui/wordmark"

export default function Footer() {
    const links = [
        { label: 'Home', href: '#' },
        { label: 'Creators', href: '#' },
        { label: 'Brands', href: '#' },
        // { label: 'Speaking', href: '#' }
    ]

    const socialLinks = [
        {
            name: 'Facebook',
            // href: '#',
            icon: 'https://cdn.brandfetch.io/idpKX136kp/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
        },
        {
            name: 'Instagram',
            // href: '#',
            icon: 'https://cdn.brandfetch.io/ido5G85nya/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B',
        },
        {
            name: 'TikTok',
            // href: '#',
            icon: 'https://cdn.brandfetch.io/id-0D6OFrq/theme/light/id0W0E4G_0.svg?c=1dxbfHSJFAPEGdCLU4o5B',
        },
        {
            name: 'YouTube',
            // href: '#',
            icon: 'https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B',
        }
    ]

    const legalLinks = [
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Date Request Policy', href: '#' }
    ]

    return (
		<>
        <footer className="border-t border-zinc-900">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto items-center ">
                    {/* Logo and Links */}
                    <div>
                        <div className="text-2xl font-bold mb-6">
                            <Image src="/brand/vsc-logo.svg" alt="VSC" className="w-10 h-10" width={40} height={40} />
                        </div>

                        <div>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                {links.map((link) => (
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
                    </div>

                    {/* Contact
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Support</h3>
                        <p className="text-zinc-400 text-sm">
                            For support please email{' '}
                            <a
                                href="mailto:hello@virasliceco.com"
                                className="text-primary hover:text-primary/80 transition-colors duration-200"
                            >
                                hello@virasliceco.com
                            </a>
                        </p>
                    </div> */}
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
