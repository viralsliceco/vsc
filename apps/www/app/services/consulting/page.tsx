import { Button } from '@workspace/ui/components/button'
import { ArrowRight, Users, Target, Award, Mail, TrendingUp, BarChart3, DollarSign, Eye, Heart, Brain, Zap, Building, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function ConsultingPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="min-h-[calc(70vh-80px)] relative flex items-center justify-center text-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                    }}
                />

                <div className="relative z-10 container mx-auto px-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-6 border border-white/20 bg-white/10 backdrop-blur-md shadow-md">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        <span className="text-white text-[0.78rem] font-normal leading-none">
                            <strong className="font-semibold">SERVICES</strong>
                        </span>                
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight font-anton">
                        CONSULTING
                    </h1>

                    <div className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto space-y-4">
                        <p>In today's social-first landscape, there is a tremendous opportunity for brands to be:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">more</div>
                                <div className="text-lg">relevant</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">to</div>
                                <div className="text-lg">more consumer segments</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">showing up</div>
                                <div className="text-lg">more often</div>
                            </div>
                        </div>
                        <p className="mt-8">with accountability to actual business results.</p>
                    </div>

                    <Link href="/contact">
                        <Button size="lg" variant="default" className="rounded-2xl cursor-pointer">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* How We Can Help Brands Succeed */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            How we can help brands succeed.
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            Our goal with every engagement is to provide more value than you paid for, leaving you with a volume of strategic insights & knowledge, actionable solutions & market-ready ideas as well as a practical plan to make it real & sustainable.
                        </p>
                        <p className="text-lg text-zinc-400 mb-8">
                            Everything we do is tied back to these four main pillars:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="p-8 border border-zinc-800 rounded-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                    <Eye className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold">PAC (Platforms & Culture)</h3>
                            </div>
                            <p className="text-zinc-400">
                                Educate/upskill your team on what has your consumers' attention and how you capture it.
                            </p>
                        </div>

                        <div className="p-8 border border-zinc-800 rounded-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold">Social at the Center</h3>
                            </div>
                            <p className="text-zinc-400">
                                Brand is built on social, we can help make that less scary & more practical while making your brand more relevant to more people.
                            </p>
                        </div>

                        <div className="p-8 border border-zinc-800 rounded-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                    <TrendingUp className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold">Underpriced Attention</h3>
                            </div>
                            <p className="text-zinc-400">
                                The media landscape is changing constantly. We help your team become "day traders" of attention.
                            </p>
                        </div>

                        <div className="p-8 border border-zinc-800 rounded-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                    <DollarSign className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold">Holistic Commerce</h3>
                            </div>
                            <p className="text-zinc-400">
                                We guide your team on modern commerce best practices while enhancing capabilities to optimize sales and brand performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Can Help Brands Succeed - Second Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            How we can help your brand succeed.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">AUDIT</h3>
                            <p className="text-zinc-400">Comprehensive analysis and strategic recommendations.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Building className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">ARCHITECT</h3>
                            <p className="text-zinc-400">Strategic framework and implementation planning.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Rocket className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">ACCELERATE</h3>
                            <p className="text-zinc-400">Rapid execution and performance optimization.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Service Offerings */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* Audit Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-anton mb-6">
                                    Audit
                                </h2>
                                <p className="text-lg text-zinc-300 mb-8">
                                    Bring us your biggest business problems and we will take a look "under the hood" at what you are currently doing and provide a plethora of solutions/opportunities for your brand and business.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <h4 className="text-xl font-bold mb-4">Sample deliverables:</h4>
                                    <ul className="space-y-2 text-zinc-400">
                                        <li>• Business Deep Dive</li>
                                        <li>• Robust audit</li>
                                        <li>• 3+ hr workshop</li>
                                        <li>• Access to all deck materials/recordings</li>
                                        <li>• Timing: 1-4 weeks</li>
                                    </ul>
                                </div>
                                <Link href="/contact">
                                    <Button size="lg" variant="default" className="rounded-2xl">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-zinc-900 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3">State of the Union</h4>
                                    <p className="text-zinc-400">An immersive live session designed to educate your leadership team on the reality of today's consumer & what it means for your business</p>
                                </div>
                                <div className="bg-zinc-900 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3">Media & Creative Transformation</h4>
                                    <p className="text-zinc-400">Identify optimizations that balance your funnel and maximize revenue</p>
                                </div>
                                <div className="bg-zinc-900 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3">Strategic Organic Social</h4>
                                    <p className="text-zinc-400">Unpack how to leverage your social channels to drive relevance as the gateway for reach</p>
                                </div>
                                <div className="bg-zinc-900 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3">ACE Consumer</h4>
                                    <p className="text-zinc-400">Unlocking unique relevance drivers for the brand through the lens of attention, culture, and empathy</p>
                                </div>
                                <div className="bg-zinc-900 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3">Core Commerce Diagnostic</h4>
                                    <p className="text-zinc-400">Uncover market opportunities and key digital performance optimizations for your business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}