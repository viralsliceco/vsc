import { Button } from '@workspace/ui/components/button'
import { Anton } from 'next/font/google'
import Header from './header'

const fontAnton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
})

export default function HeroSection() {
    return (
        <>
            <Header />
            <section className="min-h-[85vh] relative flex items-center justify-center text-center overflow-hidden">
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
                            Viral Slice Co. Is The Leader In <strong className="font-semibold">Viral Videos</strong>
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl text-white mb-6  tracking-tight ${fontAnton.className}`}>
                        WE GET<span className="text-primary"> YOU</span>
                        <br />
                        <span className="text-white">ATTENTION</span>
                    </h1>

                    {/* Handwritten style text */}
                    {/* <div className="text-right mb-8">
                    <span className="text-2xl md:text-3xl font-light italic text-gray-300">
                        And A Lot Of It...
                    </span>
                </div> */}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
                        <Button size="lg" variant="default">
                            For Entrepreneurs
                        </Button>

                        <Button size="lg" variant="outline">
                            For Creators
                        </Button>
                    </div>

                    {/* Video thumbnails row */}
                    <div className="mt-16 flex justify-center gap-4 overflow-hidden">
                        <div className="flex gap-4 animate-scroll">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-40 h-24 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-sm flex-shrink-0"
                                >
                                    Video {i}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="text-white text-sm animate-bounce">
                    ↓ Act To View
                </div>
            </div> */}
            </section >
        </>
    )
}
