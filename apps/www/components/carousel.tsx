"use client"
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image';

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
    const [scrollWidth, setScrollWidth] = useState(0)
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)

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
                    setScrollWidth(scrollContainer.scrollWidth - container.offsetWidth)
                }
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    useEffect(() => {
        if (scrollWidth === 0 || !isAutoScrolling) return

        const animate = () => {
            const currentScroll = scrollX.get()
            const newScroll = currentScroll - 4 // Faster: -6 instead of -2

            // Reset when we've scrolled the width of one set of items
            if (newScroll <= -scrollWidth / 2) {
                scrollX.set(0)
            } else {
                scrollX.set(newScroll)
            }
        }

        const interval = setInterval(animate, 20) // Adjust timing here (lower = faster)

        return () => clearInterval(interval)
    }, [scrollWidth, scrollX, isAutoScrolling])

    const duplicatedItems = [...items, ...items]

    const handleDragStart = () => {
        setIsAutoScrolling(false)
    }

    const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
        const currentScroll = scrollX.get()
        if (currentScroll <= -scrollWidth / 2) {
            scrollX.set(0)
        } else if (currentScroll > 0) {
            scrollX.set(-scrollWidth / 2)
        }
        setIsAutoScrolling(true)
    }

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div
                className="scroll-container flex gap-6 cursor-grab active:cursor-grabbing"
                style={{ x: smoothScrollX }}
                drag="x"
                dragConstraints={{ left: -scrollWidth / 2, right: 0 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="group cursor-pointer flex-shrink-0">
                        <div className="relative overflow-hidden rounded-2xl w-[360px] h-[640px]">
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                width={360}
                                height={640}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />

                            {/* Play button overlay */}
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1"></div>
                                </div>
                            </div>

                            {/* View count badge */}
                            <div className="absolute bottom-4 left-4">
                                <div className="font-anton backdrop-blur-sm px-4 py-2 rounded bg-black/80">
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
