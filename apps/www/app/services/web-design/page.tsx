import { Button } from '@workspace/ui/components/button'
import { ArrowRight, Users, Target, Award, Mail, TrendingUp, BarChart3, DollarSign, Eye, Heart, Brain, Zap, Building, Rocket, Monitor, Smartphone, Globe, Code, Palette, Search } from 'lucide-react'
import Link from 'next/link'

export default function WebDesignPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="min-h-[calc(70vh-80px)] relative flex items-center justify-center text-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
                        WEB DESIGN
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                        Create digital experiences that convert visitors into customers. We design websites that are not just beautiful, but strategically built to drive business results.
                    </p>

                    <Link href="/contact">
                        <Button size="lg" variant="default" className="rounded-2xl cursor-pointer">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Service Offerings */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            How we help brands succeed.
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            From responsive design to conversion optimization, we create websites that work across all devices and drive measurable business results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Monitor className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">RESPONSIVE DESIGN</h3>
                            <p className="text-zinc-400">Mobile-first designs that look perfect on every device and screen size.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Palette className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">UI/UX DESIGN</h3>
                            <p className="text-zinc-400">User-centered design that creates intuitive and engaging experiences.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Code className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">FRONTEND DEVELOPMENT</h3>
                            <p className="text-zinc-400">Clean, fast, and SEO-optimized code that brings designs to life.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">SEO OPTIMIZATION</h3>
                            <p className="text-zinc-400">Built-in SEO best practices to improve search rankings and visibility.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">CONVERSION OPTIMIZATION</h3>
                            <p className="text-zinc-400">Strategic design elements that turn visitors into customers.</p>
                        </div>

                        <div className="text-center p-8 border border-zinc-800 rounded-lg">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Globe className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">E-COMMERCE SOLUTIONS</h3>
                            <p className="text-zinc-400">Complete online stores designed to maximize sales and user experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            Our Process
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            We follow a proven methodology that ensures your website not only looks great but delivers real business results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-black">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">DISCOVERY</h3>
                            <p className="text-zinc-400">We dive deep into your business goals, target audience, and competitive landscape to understand what success looks like.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-black">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">STRATEGY</h3>
                            <p className="text-zinc-400">We develop a comprehensive strategy that aligns your website design with your business objectives and user needs.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-black">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">DESIGN</h3>
                            <p className="text-zinc-400">Our team creates stunning, user-centered designs that reflect your brand while optimizing for conversions.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-black">4</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">DEVELOP</h3>
                            <p className="text-zinc-400">We bring your design to life with clean, fast, and SEO-optimized code that works perfectly across all devices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-anton mb-8">
                            Our Work
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            See how we've helped brands create digital experiences that drive results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-zinc-900 rounded-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-zinc-800 flex items-center justify-center">
                                <Monitor className="w-16 h-16 text-zinc-400" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                                <p className="text-zinc-400 mb-4">Complete online store redesign that increased conversions by 150%</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">React</span>
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">E-commerce</span>
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Mobile-First</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900 rounded-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-zinc-800 flex items-center justify-center">
                                <Globe className="w-16 h-16 text-zinc-400" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Corporate Website</h3>
                                <p className="text-zinc-400 mb-4">Modern corporate site with integrated CMS and analytics</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Next.js</span>
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">CMS</span>
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">SEO</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900 rounded-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-zinc-800 flex items-center justify-center">
                                <Smartphone className="w-16 h-16 text-zinc-400" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Mobile App Landing</h3>
                                <p className="text-zinc-400 mb-4">Landing page that drove 300% increase in app downloads</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Mobile</span>
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Conversion</span>
                                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact">
                            <Button size="lg" variant="default" className="rounded-2xl">
                                View More Work <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
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
                                How long does a typical web design project take?
                            </h3>
                            <p className="text-zinc-400">
                                Project timelines vary based on complexity, but most websites take 4-8 weeks from discovery to launch. 
                                Simple landing pages can be completed in 2-3 weeks, while complex e-commerce sites may take 8-12 weeks. 
                                We provide detailed timelines during our initial consultation.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                Do you provide ongoing maintenance and support?
                            </h3>
                            <p className="text-zinc-400">
                                Yes, we offer comprehensive maintenance packages that include security updates, content updates, 
                                performance monitoring, and technical support. We believe in building long-term partnerships with our clients.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                What technologies do you use for web development?
                            </h3>
                            <p className="text-zinc-400">
                                We use modern technologies including React, Next.js, TypeScript, and Tailwind CSS for frontend development. 
                                For e-commerce, we work with platforms like Shopify, WooCommerce, and custom solutions. 
                                We choose the best technology stack based on your specific needs and goals.
                            </p>
                        </div>

                        <div className="border border-zinc-800 rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">
                                How do you ensure my website is SEO-optimized?
                            </h3>
                            <p className="text-zinc-400">
                                SEO is built into every website we create. We implement technical SEO best practices, 
                                optimize page speed, ensure mobile responsiveness, create semantic HTML structure, 
                                and provide guidance on content optimization. We also integrate analytics tools to track performance.
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
                                    <option value="web-design">Web Design</option>
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