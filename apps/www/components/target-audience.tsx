import { Button } from "@workspace/ui/components/button";
import Image from "next/image";

const TargetAudience = () => {
    return (
        <section id="entrepreneur" className="bg-black py-20 sm:py-24 lg:py-28">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Column 1: For Entrepreneurs */}
                    <div className="relative flex flex-col justify-end items-center text-center p-10 min-h-[550px] rounded-2xl overflow-hidden border border-border">
                        <Image
                            src="/images/creator.jpg"
                            alt="Entrepreneur"
                            width={1000}
                            height={1000}
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            priority={false}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
                        <div className="relative z-20 flex flex-col items-center gap-y-6">
                            <h2 className="font-display text-4xl font-bold uppercase text-text-primary">
                                For Entrepreneurs
                            </h2>
                            <p className="text-md text-text-secondary max-w-md">
                                We help motivated <b className="font-bold text-text-primary">Entrepreneurs</b> make viral videos.
                            </p>
                            <Button
                                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Become A VSC Entrepreneur
                            </Button>
                        </div>
                    </div>

                    {/* Column 2: For Big Brands */}
                    <div id="brand" className="relative flex flex-col justify-end items-center text-center p-10 min-h-[550px] rounded-2xl overflow-hidden border border-border">
                        <Image
                            src="/images/brand.jpg"
                            alt="Brand"
                            width={1000}
                            height={1000}
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            priority={false}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
                        <div className="relative z-20 flex flex-col items-center gap-y-6">
                            <h2 className="font-display text-4xl font-bold uppercase text-text-primary">
                                For Big Brands
                            </h2>
                            <p className="text-md text-text-secondary max-w-md">
                                We integrate <b className="font-bold text-text-primary">Big Brands</b> into cultural relevance at scale.
                            </p>
                            <Button
                                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Work With VSC
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
