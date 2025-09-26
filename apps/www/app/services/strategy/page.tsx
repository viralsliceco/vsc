import { Button } from '@workspace/ui/components/button'
import { ArrowRight, Users, Target, Award, Mail, TrendingUp, BarChart3, DollarSign, Eye, Heart, Brain } from 'lucide-react'
import Link from 'next/link'

export default function StrategyPage() {
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
                        STRATEGY
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                        Make things people actually want to watch.
                    </p>

                    <Link href="/contact">
                        <Button size="lg" variant="default" className="rounded-2xl cursor-pointer">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Targeted Impact Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            TARGETED IMPACT
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Target className="w-8 h-8 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Targeted Impact</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help Brands Succeed */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            How we help brands succeed.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">ACE AUDIT</h3>
                            <p className="text-zinc-400">Comprehensive brand positioning and strategy analysis.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">PLATFORMS & CULTURE</h3>
                            <p className="text-zinc-400">Cultural insights and platform-specific strategies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACE AUDIT Detail */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-anton mb-6">
                                Our Secret Sauce
                            </h2>
                            <h3 className="text-2xl font-bold mb-6 text-primary">
                                ACE AUDIT
                            </h3>
                            <p className="text-lg text-zinc-300 mb-8">
                                We build your brand a compelling positioning rooted in relevance. Our unique approach 
                                prioritizes consumer attention, culture, and empathy to help brands connect with more 
                                people and provide real value.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="default" className="rounded-2xl">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Eye className="w-6 h-6 text-primary mr-3" />
                                    <h4 className="text-xl font-bold">Attention</h4>
                                </div>
                                <p className="text-zinc-400">Understanding what is grabbing consumer/customer attention and where, that impacts us.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Heart className="w-6 h-6 text-primary mr-3" />
                                    <h4 className="text-xl font-bold">Culture</h4>
                                </div>
                                <p className="text-zinc-400">Understanding current cultural behaviors & cues to get a volume of cultural insights that brands can leverage in their communications.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Brain className="w-6 h-6 text-primary mr-3" />
                                    <h4 className="text-xl font-bold">Empathy</h4>
                                </div>
                                <p className="text-zinc-400">Understanding consumers' and customers' needs and desires to create actionable tactics and considerations on how you show up to benefit the end consumer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms & Culture Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            PLATFORMS & CULTURE
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            Our Platforms and Culture service goes beyond curated content calendars to show consumers 
                            in real-time that your brand is paying attention to the happenings in their daily lives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Eye className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Real-Time Relevance</h3>
                            <p className="text-zinc-400">We lean into timely and relevant platform features and trending cultural signals to relate to audiences and trigger organic reach.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Cultural Intelligence</h3>
                            <p className="text-zinc-400">Understanding current cultural behaviors and cues to provide actionable insights that brands can leverage in their communications.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Brain className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Consumer Empathy</h3>
                            <p className="text-zinc-400">Understanding consumers' needs and desires to create actionable tactics on how you show up to benefit the end consumer.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact">
                            <Button size="lg" variant="default" className="rounded-2xl">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            Meet the team.
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8">
                            Get our perspective.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <Users className="w-16 h-16 text-zinc-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">WANDA POGUE</h3>
                            <p className="text-primary font-semibold mb-2">Chief Strategy Officer & Post Creative Strategist</p>
                            <p className="text-zinc-400 text-sm">Leading strategic initiatives and creative strategy</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <BarChart3 className="w-16 h-16 text-zinc-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">PETER CHUN</h3>
                            <p className="text-primary font-semibold mb-2">SVP, Global Head of Partnerships & Growth</p>
                            <p className="text-zinc-400 text-sm">Driving global partnerships and growth strategies</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <Heart className="w-16 h-16 text-zinc-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">JAMIEE ESTRELLA</h3>
                            <p className="text-primary font-semibold mb-2">VP of Platforms and Culture</p>
                            <p className="text-zinc-400 text-sm">Specializing in platform strategies and cultural insights</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <Target className="w-16 h-16 text-zinc-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">LIA KAKOULIDIS</h3>
                            <p className="text-primary font-semibold mb-2">Senior Platform Strategist</p>
                            <p className="text-zinc-400 text-sm">Expert in platform-specific strategy development</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                How does Platform and Culture differ from traditional content calendars?
                            </h3>
                            <p className="text-zinc-400">
                                Our Platforms and Culture service goes beyond curated content calendars to show consumers 
                                in real-time that your brand is paying attention to the happenings in their daily lives. 
                                We lean into timely and relevant platform features and trending cultural signals to relate 
                                to audiences and trigger organic reach.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                How do you ensure you're up-to-date with the latest consumer behaviors?
                            </h3>
                            <p className="text-zinc-400">
                                Our team continuously monitors cultural trends, platform updates, and consumer behavior shifts 
                                through our proprietary ACE framework. We combine real-time data analysis with cultural 
                                intelligence to stay ahead of emerging patterns and ensure our strategies remain relevant 
                                and effective in today's rapidly changing digital landscape.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                What makes the ACE Audit approach unique?
                            </h3>
                            <p className="text-zinc-400">
                                The ACE Audit prioritizes consumer attention, culture, and empathy in a way that traditional 
                                brand audits don't. Instead of focusing solely on internal brand metrics, we analyze how 
                                your brand shows up in the cultural conversation and how consumers actually experience 
                                your brand across platforms. This consumer-centric approach ensures your positioning 
                                resonates with real people in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            Connect with us.
                        </h2>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">First name*</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Last name*</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Company Website*</label>
                                <input 
                                    type="url" 
                                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Job title*</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Work Email*</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Region*</label>
                                <select className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary">
                                    <option value="">Please Select</option>
                                    <option value="north-america">North America</option>
                                    <option value="europe">Europe</option>
                                    <option value="asia">Asia</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Choose the category that best describes your inquiry.*</label>
                                <select className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary">
                                    <option value="">Please Select</option>
                                    <option value="creative">Creative Services</option>
                                    <option value="strategy">Strategy</option>
                                    <option value="media">Media</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">How can we help your brand?*</label>
                                <textarea 
                                    rows={4}
                                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">What's your annual marketing budget?*</label>
                                <select className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary">
                                    <option value="">Please Select</option>
                                    <option value="under-100k">Under $100K</option>
                                    <option value="100k-500k">$100K - $500K</option>
                                    <option value="500k-1m">$500K - $1M</option>
                                    <option value="over-1m">Over $1M</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">How did you hear about us?*</label>
                                <select className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary">
                                    <option value="">Please Select</option>
                                    <option value="social-media">Social Media</option>
                                    <option value="referral">Referral</option>
                                    <option value="search">Search Engine</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="flex items-center space-x-3">
                                <input 
                                    type="checkbox" 
                                    id="stay-in-touch"
                                    className="w-4 h-4 text-primary bg-zinc-900 border-zinc-700 rounded focus:ring-primary"
                                />
                                <label htmlFor="stay-in-touch" className="text-sm">
                                    If you'd like to stay in touch, please check this box!
                                </label>
                            </div>

                            <div className="text-center">
                                <Button size="lg" variant="default" className="rounded-2xl px-8">
                                    Submit <Mail className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}