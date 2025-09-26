import { Button } from '@workspace/ui/components/button'
import { ArrowRight, Users, Target, Award, Mail, TrendingUp, BarChart3, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function MediaPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="min-h-[calc(70vh-80px)] relative flex items-center justify-center text-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
                        MEDIA
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                        We're relentlessly focused on one thing: driving business results for brands through the practitionership of identifying underpriced attention.
                    </p>

                    <Link href="/contact">
                        <Button size="lg" variant="default" className="rounded-2xl cursor-pointer">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Amplified Reach Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            AMPLIFIED REACH
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="w-8 h-8 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Amplified Reach</h3>
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

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">SOCIAL AOR</h3>
                            <p className="text-zinc-400">Complete social media management and strategy.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">DIGITAL MEDIA AOR</h3>
                            <p className="text-zinc-400">Comprehensive digital media planning and execution.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">MEDIA AOR</h3>
                            <p className="text-zinc-400">Full-service media strategy and activation.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <DollarSign className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">ARB REPORT</h3>
                            <p className="text-zinc-400">Advanced reporting and analytics insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social AOR Detail */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-anton mb-6">
                                PAID SOCIAL AMPLIFICATION PARTNERSHIP
                            </h2>
                            <h3 className="text-2xl font-bold mb-6 text-primary">
                                SOCIAL AOR
                            </h3>
                            <p className="text-lg text-zinc-300 mb-8">
                                Strategic Organic Content and Media Amplification go better together. In this model, 
                                Vayner manages your paid social planning, buying, optimization, and reporting, 
                                across platforms like Instagram, YouTube, TikTok, Pinterest, Snap, X, Reddit, and beyond; 
                                with full accountability to social performance. We balance amplifying top performing 
                                posts with brilliant basics media strategy and activation across social channels.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="default" className="rounded-2xl">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-3">Platform Coverage</h4>
                                <p className="text-zinc-400">Instagram, YouTube, TikTok, Pinterest, Snap, X, Reddit and beyond.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-3">Full Accountability</h4>
                                <p className="text-zinc-400">Complete responsibility for social performance and results.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-3">Strategic Balance</h4>
                                <p className="text-zinc-400">Amplifying top performers with brilliant basics media strategy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            Meet the team.
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8">
                            Get our perspective.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <Users className="w-16 h-16 text-zinc-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">BEN ALLISON</h3>
                            <p className="text-primary font-semibold mb-2">SVP, Head of Media Operations</p>
                            <p className="text-zinc-400 text-sm">Oversees operational aspects of media initiatives</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <DollarSign className="w-16 h-16 text-zinc-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">JON MORGENSTERN</h3>
                            <p className="text-primary font-semibold mb-2">EVP, Head of Investment</p>
                            <p className="text-zinc-400 text-sm">Leads investment strategies and media spend optimization</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <BarChart3 className="w-16 h-16 text-zinc-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">HAILEY RIGGLE</h3>
                            <p className="text-primary font-semibold mb-2">EVP, Media</p>
                            <p className="text-zinc-400 text-sm">Shapes and drives comprehensive media strategies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                Who leads your media strategy and execution?
                            </h3>
                            <p className="text-zinc-400">
                                With over a decade of experience in media solutions and strategy, John Terrana, our Chief Media Officer, 
                                leads media strategy and execution with our powerhouse team! Alongside John, our media leadership 
                                includes Hailey Riggle, SVP, Media at VaynerMedia, who plays a crucial role in shaping and driving 
                                our media strategies; Jon Morgenstern, EVP, Head of Investment, who leads our investment strategies, 
                                optimizing media spend for maximum impact; and Benjamin Allison, SVP, Head of Media Operations, who 
                                oversees the operational aspects of our media initiatives, ensuring seamless execution and high performance. 
                                Together, they bring a wealth of knowledge and expertise to our media team, making sure we stay at the 
                                forefront of the industry.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                What are some of your platform certifications?
                            </h3>
                            <p className="text-zinc-400">
                                We maintain premier partnerships and certifications across all major social media platforms including 
                                Meta Business Partner, Google Ads Certified, TikTok Marketing Partner, Pinterest Business Partner, 
                                Snapchat Ads Partner, and Twitter Ads Certified. Our team continuously updates certifications to 
                                ensure we're leveraging the latest platform features and best practices for optimal performance.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                How is your media strategy unique compared to other agencies?
                            </h3>
                            <p className="text-zinc-400">
                                Our media strategy is uniquely focused on identifying underpriced attention and driving business results 
                                through a data-driven approach. We combine strategic organic content with paid amplification, ensuring 
                                seamless integration between creative and media teams. Our relentless focus on performance accountability 
                                and our expertise in emerging platforms sets us apart, allowing us to capitalize on opportunities 
                                before they become mainstream.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20">
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