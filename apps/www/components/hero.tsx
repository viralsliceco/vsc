import { Button } from '@workspace/ui/components/button'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="min-h-[calc(65vh-80px)] relative flex items-center justify-center text-center overflow-hidden mb-8">
            {/* Background overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1622976479615-38700d470a1c?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-6 border border-white/20 bg-white/10 backdrop-blur-md shadow-md"
                    style={{
                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10), 0 1.5px 4px 0 rgba(255,255,255,0.08) inset',
                        WebkitBackdropFilter: 'blur(8px)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    <span className="text-white text-[0.78rem] font-normal leading-none">
                        Viral Slice Co. is the leader in <strong className="font-semibold">Digital Marketing</strong>
                    </span>                
                    </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight font-anton">
                    {"WE DON'T SUCK AT"}<span className="text-primary relative mb-1">
                        <br />
                        MARKETING
                        <svg
                            className="absolute left-1/2 -translate-x-1/2 w-[105%] h-[13px]"
                            viewBox="0 0 223 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            width="223"
                            height="13"
                        >
                            <path
                                d="M1.38281 10.9785C42.2737 4.19561 142.923 -6.21633 221.053 10.9785"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        </span>
                    <br />
                    {/* <span className="text-white">GET ATTENTION</span> */}
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-2 mb-14">
                    <Link href="/contact">
                    <Button size="lg" variant="default" className="rounded-2xl cursor-pointer">
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
