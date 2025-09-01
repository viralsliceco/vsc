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
                            src="/team.jpg"
                            alt="Adley Kinsman, founder of Viralish, wearing a black hat and top."
                            width={1158}
                            height={1200}
                            className="rounded-2xl w-full max-w-sm sm:max-w-md lg:max-w-none h-auto object-cover"
                        />
                    </div>

                    <div>
                        <h2 className={`${fontAnton.className} text-[47px] leading-[1.1] uppercase mb-6`}>
                            THE BEST ATTENTION
                            HACKERS IN THE WORLD.
                        </h2>

                        <div className="space-y-5 text-lg text-text-secondary font-body mb-8">
                            <p>
                                Are you struggling to get the views your videos deserve? Whether
                                you’re an entrepreneur aiming to go viral or a major brand
                                seeking to amplify your message, Viralish is here to help.
                            </p>
                            <p>
                                Adley has spent the last three years perfecting a proven method
                                that garners over 1 billion views every month for brands and
                                creators.
                            </p>
                            <p>
                                Having crafted viral videos for renowned brands like{' '}
                                <strong className="text-white font-semibold">
                                    Land Rover, AirHeads, Raising Canes, and HP,
                                </strong>{' '}
                                Adley knows exactly how to capture and hold attention.
                            </p>
                            <p>
                                Her expertise isn’t just theoretical; it’s the same formula she
                                teaches to her internal team to ensure they consistently
                                deliver content for some of the biggest names in the industry.
                            </p>
                            <p>
                                If you’re ready to unlock millions of views on demand, you’re in
                                the right place.
                            </p>
                        </div>

                        {/* <div className="self-end mb-10 w-full max-w-[250px]">
                            <Image
                                src="https://viralish.com/wp-content/uploads/2024/09/adley-signature-white.png"
                                alt="Adley's signature"
                                width={250}
                                height={147}
                                className="w-full h-auto"
                            />
                        </div> */}

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <StatCard value="2B+" label="Monthly Views" />
                            <StatCard value="45M+" label="Followers" />
                            <StatCard value="50B+" label="Mins Viewed" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
