"use client"
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

import { Anton } from 'next/font/google';
import Image from 'next/image';

const fontAnton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
})

interface CarouselItem {
    id: number
    views: string
    thumbnail: string
    title: string
}

interface CarouselProps {
    items: CarouselItem[]
    className?: string
}

export default function Carousel({ items, className = "" }: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    // const [containerWidth, setContainerWidth] = useState(0)
    const [scrollWidth, setScrollWidth] = useState(0)

    const scrollX = useMotionValue(0)

    // Spring animation for smooth scrolling
    const smoothScrollX = useSpring(scrollX, {
        stiffness: 50,
        damping: 20,
        mass: 1
    })

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const container = containerRef.current
                const scrollContainer = container.querySelector('.scroll-container') as HTMLElement

                if (scrollContainer) {
                    // setContainerWidth(container.offsetWidth)
                    setScrollWidth(scrollContainer.scrollWidth - container.offsetWidth)
                }
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    useEffect(() => {
        if (scrollWidth === 0) return

        const animate = () => {
            const currentScroll = scrollX.get()
            const newScroll = currentScroll - 2 // Negative value for right to left

            // Reset when we've scrolled the width of one set of items
            if (newScroll <= -scrollWidth / 2) {
                scrollX.set(0)
            } else {
                scrollX.set(newScroll)
            }
        }

        const interval = setInterval(animate, 50) // Adjust timing here (lower = faster)

        return () => clearInterval(interval)
    }, [scrollWidth, scrollX])

    // Duplicate items to create seamless loop
    const duplicatedItems = [...items, ...items]

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div
                className="scroll-container flex gap-6"
                style={{ x: smoothScrollX }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="group cursor-pointer flex-shrink-0">
                        <div className="relative overflow-hidden rounded-2xl w-90 h-160">
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                width={360}
                                height={640}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Play button overlay */}
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1"></div>
                                </div>
                            </div>

                            {/* View count badge */}
                            <div className="absolute bottom-4 left-4">
                                <div className={`${fontAnton.className} backdrop-blur-sm px-4 py-2 rounded bg-black/80`}>
                                    <div className="text-white text-3xl">{item.views}</div>
                                    <div className="text-gray-300 text-base">Views</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
