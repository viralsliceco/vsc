import { Button } from '@workspace/ui/components/button'
import { ArrowRight, Users, Target, Award, Mail } from 'lucide-react'
import Link from 'next/link'

export default function CreativePage() {
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
                        CONSUMER-CENTRIC
                        <br />
                        <span className="text-primary relative">
                            CREATIVE
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

            {/* Brand Relevance Section */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            BUILD BRAND RELEVANCE
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Target className="w-8 h-8 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Build Brand Relevance</h3>
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">STRATEGIC ORGANIC CREATIVE</h3>
                            <p className="text-zinc-400">Drive daily relevance and build brand through strategic social content.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">SOCIAL AOR</h3>
                            <p className="text-zinc-400">Full-service social media management and strategy.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">CREATIVE AOR</h3>
                            <p className="text-zinc-400">Complete creative direction and execution across all channels.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Organic Creative Detail */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-anton mb-6">
                                STRATEGIC ORGANIC CREATIVE
                            </h2>
                            <h3 className="text-2xl font-bold mb-6 text-primary">
                                Build Brand & Relevance Daily
                            </h3>
                            <p className="text-lg text-zinc-300 mb-8">
                                Drive daily relevance and build brand through a commitment to "perfect" social. 
                                Nuanced audience cohorts influence a daily volume of strategic contextual creative 
                                built for where attention sits today.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="default" className="rounded-2xl">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-3">Creative Data</h4>
                                <p className="text-zinc-400">Data-driven insights power every creative decision.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-3">How we help our clients</h4>
                                <p className="text-zinc-400">Comprehensive creative solutions tailored to your brand.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-3">3-5 Creative Assets</h4>
                                <p className="text-zinc-400">Daily volume of strategic creative content.</p>
                            </div>
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
                                Who leads the creative and strategy at VaynerMedia?
                            </h3>
                            <p className="text-zinc-400">
                                Our teams are led by Rob Lenois, Chief Creative Officer, and Wanda Pogue, 
                                Global Chief Strategy Officer & Post Creative Strategist at VaynerMedia. 
                                With over 20 years of combined experience in leading creative and strategic 
                                initiatives at top agencies, Rob and Wanda bring unparalleled expertise to 
                                our campaigns. Their leadership ensures innovative and impactful strategies 
                                that drive brand success.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                How does strategic organic creative drive daily relevance for my brand?
                            </h3>
                            <p className="text-zinc-400">
                                Strategic organic creative focuses on creating content that resonates with 
                                your specific audience segments, ensuring your brand stays relevant and 
                                top-of-mind through consistent, high-quality social content that drives 
                                engagement and builds brand loyalty.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                Who are some of the clients you work with?
                            </h3>
                            <p className="text-zinc-400">
                                We work with a diverse range of clients from startups to Fortune 500 
                                companies across various industries, helping them build brand relevance 
                                and drive growth through strategic creative content.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                What recognitions have you won?
                            </h3>
                            <p className="text-zinc-400">
                                Our team has been recognized with numerous industry awards for creative 
                                excellence and strategic innovation, including Cannes Lions, Webby Awards, 
                                and various social media marketing accolades.
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