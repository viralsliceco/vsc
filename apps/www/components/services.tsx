import { Button } from '@workspace/ui/components/button'
import { Anton } from 'next/font/google'

const fontAnton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
})

export default function ServicesSection() {
    return (
        <section className="py-20 bg-black">
            <div className="mx-auto w-full max-w-7xl px-2 sm:px-4">
                {/* Main heading */}
                <div className="text-left mb-16">
                    <h2 className={`text-4xl md:text-6xl font-bold text-white uppercase tracking-tight ${fontAnton.className}`}>
                        WE HELP ENTREPRENEURS & BIG BRANDS
                        <br />
                        CREATE <span className="inline-block align-middle relative">
                            <span className="bg-primary px-4 py-2 rounded-md text-white font-black text-4xl md:text-6xl inline-block shadow-lg" style={{ letterSpacing: '1px' }}>
                                VIRAL
                            </span>
                        </span> CONTENT
                    </h2>
                </div>

                {/* Sub heading and CTA */}
                {/* <div className="flex flex-col md:flex-row items-center justify-center mb-10 md:mb-16 gap-6 md:gap-0">

                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base md:text-lg font-semibold rounded-none shadow-md transition-colors"
                    >
                        Work With Us
                    </Button>
                </div> */}

                {/* Two column layout */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {/* Entrepreneurs */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg flex flex-col h-full min-h-[380px]">
                        {/* Giant image as background */}
                        <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                            alt="Entrepreneur with sign"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60" />
                        {/* Content overlayed on image */}
                        <div className="relative z-10 flex flex-col justify-end items-center h-full p-6">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight drop-shadow-lg">
                                FOR ENTREPRENEURS
                            </h3>
                            <p className="text-gray-200 text-base md:text-lg mb-6 drop-shadow">
                                We help motivated <strong className="text-white">Entrepreneurs</strong> make viral videos.
                            </p>
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-base md:text-lg font-semibold rounded-none w-full shadow-md transition-colors"
                            >
                                Become A VSC Entrepreneur
                            </Button>
                        </div>
                    </div>

                    {/* Creators */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg flex flex-col h-full min-h-[380px]">
                        {/* Giant image as background */}
                        <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                            alt="Person working on car"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60" />
                        {/* Content overlayed on image */}
                        <div className="relative z-10 flex flex-col justify-end items-center h-full p-6">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight drop-shadow-lg">
                                FOR CREATORS
                            </h3>
                            <p className="text-gray-200 text-base md:text-lg mb-6 drop-shadow">
                                We help <strong className="text-white">Creators</strong> make viral videos.
                            </p>
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-base md:text-lg font-semibold rounded-none w-full shadow-md transition-colors"
                            >
                                Work With VSC
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
