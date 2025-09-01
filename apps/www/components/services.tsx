import React from 'react';
import { Anton } from 'next/font/google';

const fontAnton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
})

export default function ServicesSection() {
    return (
        <section className="bg-background-primary">
            <div className="flex flex-col items-center mx-auto justify-center max-w-[1200px] px-5 md:px-10">
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-5">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col gap-5 text-center lg:text-left">
                        <h2 className={`${fontAnton.className} text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold uppercase leading-[1.1] text-white`}>
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
            </div>
        </section>
    );
};
