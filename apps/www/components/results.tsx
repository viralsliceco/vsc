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
            views: '2.7M+',
            thumbnail: '/viral/kaseena-thumbnail.jpg',
            title: 'Viral Video 1'
        },
        {
            id: 3,
            views: '1.6M+',
            thumbnail: '/viral/dentist-thumbnail.jpg',
            title: 'Viral Video 3'
        },
        {
            id: 4,
            views: '10.6M+',
            thumbnail: '/viral/color-thumbnail.jpg',
            title: 'Viral Video 4'
        },
        {
            id: 5,
            views: '6.1M+',
            thumbnail: '/viral/kaseena2.jpg',
            title: 'Viral Video 5'
        },
        {
            id: 6,
            views: '5.2M+',
            thumbnail: '/viral/taylor.jpg',
            title: 'Viral Video 6'
        },
        {
            id: 7,
            views: '5.1M+',
            thumbnail: '/viral/violetta-thumbnail.jpg',
            title: 'Viral Video 7'
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
