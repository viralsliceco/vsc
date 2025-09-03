import Image from "next/image";
import React from "react";

import { Anton } from 'next/font/google';

const fontAnton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
})

interface StatCardProps {
    value: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
    <div className="bg-zinc-900 rounded-2xl p-6 text-center flex flex-col justify-center items-center">
        <span className={`${fontAnton.className} text-4xl lg:text-[60px] leading-none text-white`}>
            {value}
        </span>
        <span className="font-body text-base mt-2 text-white">
            {label}
        </span>
    </div>
);

const Founder = () => {
    return (
        <section className="bg-background-primary py-24 sm:py-32">
            <div className="container mx-auto px-5 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/founder-results.png"
                            alt="Viral Slice Co. media team working on content strategy."
                            width={1158}
                            height={1200}
                            className="rounded-2xl w-full max-w-sm sm:max-w-md lg:max-w-none h-auto object-cover"
                        />
                    </div>

                    <div>
                        <h2 className={`${fontAnton.className} text-[47px] leading-[1.1] uppercase mb-6`}>
                            VIRAL SLICE CO: CONTENT THAT DOMINATES ATTENTION.
                        </h2>

                        <div className="space-y-5 text-lg text-text-secondary font-body mb-8">
                            <p>
                                At <strong className="text-white font-semibold">Viral Slice Co.</strong>, we are a dedicated early-stage media and content management team based in Columbus, Ohio. Our mission is simple: create high-performing content that captures attention, drives engagement, and builds communities online.
                            </p>
                            <p>
                                With <strong className="text-white font-semibold">50M+ monthly views</strong>, <strong className="text-white font-semibold">10M+ followers</strong>, and over <strong className="text-white font-semibold">2B+ minutes viewed</strong> across client projects and personal brands,{" we've proven that our approach works."}
                            </p>
                            <p>
                                {"Whether you're a brand, creator, or entrepreneur, we specialize in crafting viral videos, social campaigns storytelling strategies that maximize reach on platforms like TikTok, Instagram Reels, and YouTube Shorts."}
                            </p>
                            <p>
                                Unlike large agencies, our Columbus-based team is hands-on and agile. We partner closely with you to produce content that not only looks great but is optimized for discoverability, shares, and conversions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <StatCard value="85M+" label="Monthly Views" />
                            <StatCard value="15M+" label="Followers" />
                            <StatCard value="5B+" label="Mins Viewed" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
