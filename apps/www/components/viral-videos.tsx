// import Image from 'next/image';
import { cn } from "@workspace/ui/lib/utils";

const videos = [
    {
        gif: "/reels/drbentley.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzIiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        className: "hidden md:block",
        transform: "md:rotate-[-4deg] md:scale-90 md:translate-y-4",
        zIndex: 'z-0'
    },
    {
        gif: "/reels/deecell.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzMiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        transform: "md:scale-95",
        zIndex: 'z-10'
    },
    {
        gif: "/reels/tmc.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NTAiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        transform: "md:scale-100 md:-translate-y-6",
        zIndex: 'z-20'
    },
    {
        gif: "/reels/megan.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzAiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        transform: "md:scale-95",
        zIndex: 'z-10'
    },
    {
        gif: "/reels/ladybird.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        className: "hidden md:block",
        transform: "md:rotate-[4deg] md:scale-90 md:translate-y-4",
        zIndex: 'z-0'
    },
];

const ViralVideosShowcase = () => {
    return (

        <div className="bg-transparent -mt-14 md:-mt-40 relative pt-20 md:pt-24 pb-10 md:pb-24 overflow-hidden">
            <div className="relative">
                {/* Mobile: Show only the main video, horizontally scrollable for all videos */}
                <div className="flex md:hidden overflow-x-auto gap-4 px-4 pb-2 snap-x snap-mandatory">
                    {videos.map((video, index) => (
                        <a
                            key={index}
                            // href={video.popuLink}
                            className={cn(
                                "group relative flex-shrink-0 w-4/5 max-w-xs snap-center transition-all duration-300 ease-in-out hover:z-30 hover:!scale-105",
                                video.zIndex
                            )}
                            style={{ minWidth: 220, maxWidth: 320 }}
                        >
                            <div className="rounded-lg overflow-hidden shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] border-2 border-transparent group-hover:border-primary transition-colors bg-black">
                                <video
                                    src={video.gif}
                                    // alt={`Viral video showcase ${index + 1}`}
                                    width={320}
                                    height={570}
                                    className="w-full h-auto object-cover"
                                    // unoptimized
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </a>
                    ))}
                </div>
                {/* Desktop: Show all videos in a row with overlap */}
                <div className="hidden md:flex justify-center items-end px-4 -space-x-12 sm:-space-x-20 md:-space-x-24 lg:-space-x-16 xl:-space-x-20">
                    {videos.map((video, index) => (
                        <a
                            key={index}
                            // href={video.popupLink}
                            className={cn(
                                "group relative w-2/5 md:w-1/4 lg:w-1/5 shrink-0 transition-all duration-300 ease-in-out hover:z-30 hover:!scale-105",
                                video.className,
                                video.transform,
                                video.zIndex
                            )}
                        >
                            <div className="rounded-lg md:rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-2 border-transparent group-hover:border-primary transition-colors">
                                <video
                                    src={video.gif}
                                    // alt={`Viral video showcase ${index + 1}`}
                                    width={360}
                                    height={640}
                                    className="w-full h-auto object-cover"
                                    // unoptimized
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViralVideosShowcase;
