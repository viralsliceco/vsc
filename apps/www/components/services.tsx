import React from 'react';
import Link from 'next/link';
import { Palette, Users, Monitor, Target, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'Creative',
        description: 'Consumer-centric creative that builds brand relevance daily through strategic social content.',
        icon: Palette,
        href: '/services/creative',
        features: ['Strategic Organic Creative', 'Social AOR', 'Creative AOR']
    },
    {
        title: 'Strategy',
        description: 'ACE Audit approach prioritizing consumer attention, culture, and empathy for targeted impact.',
        icon: Target,
        href: '/services/strategy',
        features: ['ACE Audit', 'Platforms & Culture', 'Real-Time Relevance', 'Cultural Intelligence']
    },
    {
        title: 'Consulting',
        description: 'Strategic guidance to make brands more relevant to more consumer segments, showing up more often.',
        icon: Users,
        href: '/services/consulting',
        features: ['PAC (Platforms & Culture)', 'Social at the Center', 'Underpriced Attention', 'Holistic Commerce']
    },
    {
        title: 'Web Design',
        description: 'Digital experiences that convert visitors into customers through strategic design and development.',
        icon: Monitor,
        href: '/services/web-design',
        features: ['Responsive Design', 'UI/UX Design', 'Frontend Development', 'SEO Optimization', 'Conversion Optimization', 'E-commerce Solutions']
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-background-primary">
            <div className="flex flex-col items-center mx-auto justify-center max-w-[1200px] px-5 md:px-10">
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-5 mb-16">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col gap-5 text-center lg:text-left">
                        <h2 className="font-anton text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold uppercase leading-[1.1] text-white">
                            WE HELP ENTREPRENEURS & BIG BRANDS CREATE{' '}
                            <span className="relative inline-block text-primary after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[180%] after:w-[140%] after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-6 after:rounded-full after:border-4 after:border-primary after:content-[''] lg:after:h-[200%]">
                                VIRAL
                            </span>
                            {' '}CONTENT
                        </h2>
                    </div>
                    {/* Right Column: Button */}
                    <div className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-end">
                        <a
                            href="#entrepreneur"
                            className="inline-block whitespace-nowrap rounded-2xl bg-primary px-[50px] py-5 font-body text-base font-medium uppercase text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
                        >
                            Work With Us
                        </a>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className="group bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:bg-zinc-900/70"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-black" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                                {service.title}
                                            </h4>
                                        </div>
                                        
                                        <p className="text-zinc-400 mb-4 flex-grow">
                                            {service.description}
                                        </p>
                                        
                                        <div className="space-y-2 mb-4">
                                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center text-sm text-zinc-500">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                            {service.features.length > 3 && (
                                                <div className="text-sm text-zinc-600">
                                                    +{service.features.length - 3} more
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
