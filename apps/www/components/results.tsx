"use client"
import Carousel from './carousel'
interface VideoItem {
    id: number
    views: string
    thumbnail: string
    title: string
}

export default function ResultsSection() {
    const videos: VideoItem[] = [
        {
            id: 1,
            views: '2M+',
            thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2070&auto=format&fit=crop',
            title: 'Viral Video 1'
        },
        {
            id: 2,
            views: '18.7M+',
            thumbnail: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop',
            title: 'Viral Video 2'
        },
        {
            id: 3,
            views: '48M+',
            thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2070&auto=format&fit=crop',
            title: 'Viral Video 3'
        },
        {
            id: 4,
            views: '89M+',
            thumbnail: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop',
            title: 'Viral Video 4'
        },
        {
            id: 5,
            views: '156M+',
            thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2070&auto=format&fit=crop',
            title: 'Viral Video 5'
        },
        {
            id: 6,
            views: '234M+',
            thumbnail: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop',
            title: 'Viral Video 6'
        },
        {
            id: 7,
            views: '89M+',
            thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2070&auto=format&fit=crop',
            title: 'Viral Video 7'
        },
        {
            id: 8,
            views: '67M+',
            thumbnail: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop',
            title: 'Viral Video 8'
        },
    ]

    return (
        <section className="py-20">
            <div className="w-full">
                {/* Carousel */}
                <Carousel items={videos} className="w-full" />
            </div>
        </section>
    )
}
