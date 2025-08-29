import { Anton } from 'next/font/google'

const fontAnton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
})

export default function FounderSection() {
    const stats = [
        { value: '2B+', label: 'Monthly Views' },
        { value: '45M+', label: 'Followers' },
        { value: '50B+', label: 'Mins Viewed' }
    ]

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1755541516517-bb95790dc7ad?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Adley - Founder"
                            />

                            {/* Signature overlay */}
                            <div className="absolute bottom-4 right-4">
                                <div className="text-white text-2xl font-script italic">
                                    - Adley
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <h2 className={`text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight mb-4 ${fontAnton.className}`}>
                            THE BEST ATTENTION
                            HACKERS IN THE
                            WORLD.
                        </h2>
                        {/* <h3 className={`text-3xl md:text-3xl font-bold leading-tight text-white mb-4`}>
                            MEET THE TEAM
                        </h3> */}

                        <div className="space-y-2 text-gray-300 text-md  mb-8">
                            <p>
                                Are you struggling to get the views your videos deserve? Whether you're an entrepreneur aiming to go viral or a major brand seeking to amplify your message, Viralish is here to help.
                            </p>

                            <p>
                                Adley has spent the last three years perfecting a proven method that garners over 1 billion views every month for brands and creators.
                            </p>

                            <p>
                                Having crafted viral videos for renowned brands like <strong className="text-white">Land Rover, AirHeads, Raising Canes, and HP,</strong> Adley knows exactly how to capture and hold attention.
                            </p>

                            <p>
                                Her expertise isn't just theoretical; it's the same formula she teaches to her internal team to ensure they consistently deliver content for some of the biggest names in the industry.
                            </p>

                            <p>
                                If you're ready to unlock millions of views on demand, you're in the right place.
                            </p>
                        </div>

                        {/* Stats - Glassy look */}
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div
                                        className="relative p-6 rounded-xl bg-white/10 border border-white/20 shadow-lg backdrop-blur-md"
                                        style={{
                                            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18), 0 1.5px 4px 0 rgba(255,255,255,0.10) inset',
                                            WebkitBackdropFilter: 'blur(12px)',
                                            backdropFilter: 'blur(12px)',
                                        }}
                                    >
                                        <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 drop-shadow-glass">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-200 text-sm tracking-wide uppercase font-medium opacity-80">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
