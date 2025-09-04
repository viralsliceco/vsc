"use client";

import { cn } from "@workspace/ui/lib/utils";
import { useState, useRef, useEffect } from 'react';

const videos = [
    {
        video: "/reels/dadbod.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzIiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        className: "hidden md:block",
        transform: "md:rotate-[-4deg] md:scale-90 md:translate-y-4",
        zIndex: 'z-0'
    },
    {
        video: "/reels/deecell.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzMiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        transform: "md:scale-95",
        zIndex: 'z-10'
    },
    {
        video: "/reels/tmc.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NTAiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        transform: "md:scale-100 md:-translate-y-6",
        zIndex: 'z-20'
    },
    {
        video: "/reels/megan.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzAiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        transform: "md:scale-95",
        zIndex: 'z-10'
    },
    {
        video: "/reels/ladybird.mp4",
        // popupLink: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI1NzEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
        className: "hidden md:block",
        transform: "md:rotate-[4deg] md:scale-90 md:translate-y-4",
        zIndex: 'z-0'
    },
];

const LazyVideo = ({ video, className, transform, zIndex, isMobile = false }: {
    video: { video: string; className?: string; transform?: string; zIndex?: string };
    className?: string;
    transform?: string;
    zIndex?: string;
    isMobile?: boolean;
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry && entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleVideoLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "group relative transition-all duration-300 ease-in-out hover:z-30 hover:!scale-105",
                isMobile
                    ? "flex-shrink-0 w-4/5 max-w-xs snap-center"
                    : "w-2/5 md:w-1/4 lg:w-1/5 shrink-0",
                className,
                transform,
                zIndex
            )}
            style={isMobile ? { minWidth: 220, maxWidth: 320 } : {}}
        >
            <div className={cn(
                "overflow-hidden shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] border-2 border-transparent group-hover:border-primary transition-colors bg-black",
                isMobile ? "rounded-lg" : "rounded-lg md:rounded-2xl"
            )}>
                {isInView && (
                    <video
                        ref={videoRef}
                        src={video.video}
                        width={isMobile ? 320 : 360}
                        height={isMobile ? 570 : 640}
                        className="w-full h-auto object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onLoadedData={handleVideoLoad}
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    />
                )}
                {!isLoaded && isInView && (
                    <div
                        className="w-full bg-gray-800 animate-pulse flex items-center justify-center"
                        style={{
                            width: isMobile ? 320 : 360,
                            height: isMobile ? 570 : 640,
                        }}
                    >
                        <div className="text-gray-400 text-sm">Loading...</div>
                    </div>
                )}
                {!isInView && (
                    <div
                        className="w-full bg-gray-900 flex items-center justify-center"
                        style={{
                            width: isMobile ? 320 : 360,
                            height: isMobile ? 570 : 640,
                        }}
                    >
                        <div className="text-gray-500 text-sm">•••</div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ViralVideosShowcase = () => {
    return (
        <div className="bg-transparent -mt-14 md:-mt-40 relative pt-20 md:pt-24 pb-10 md:pb-24 overflow-hidden">
            <div className="relative">
                {/* Mobile: Show only the main video, horizontally scrollable for all videos */}
                <div className="flex md:hidden overflow-x-auto gap-4 px-4 pb-2 snap-x snap-mandatory">
                    {videos.map((video, index) => (
                        <LazyVideo
                            key={index}
                            video={video}
                            zIndex={video.zIndex}
                            isMobile={true}
                        />
                    ))}
                </div>
                {/* Desktop: Show all videos in a row with overlap */}
                <div className="hidden md:flex justify-center items-end px-4 -space-x-12 sm:-space-x-20 md:-space-x-24 lg:-space-x-16 xl:-space-x-20">
                    {videos.map((video, index) => (
                        <LazyVideo
                            key={index}
                            video={video}
                            className={video.className}
                            transform={video.transform}
                            zIndex={video.zIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViralVideosShowcase;
