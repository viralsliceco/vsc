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
            id: 11,
            views: '23.1M+',
            thumbnail: '/viral/kat_thumbnail.jpg',
            title: 'Viral Video 11'
        },  
        {
            id: 12,
            views: '20.2M+',
            thumbnail: '/viral/cayla2.jpg',
            title: 'Viral Video 12'
        },
        {
            id: 13,
            views: '18.9M+',
            thumbnail: '/viral/trash.jpg',
            title: 'Viral Video 13'
        },
        {
            id: 4,
            views: '10.6M+',
            thumbnail: '/viral/color-thumbnail.jpg',
            title: 'Viral Video 4'
        },
        {
            id: 10,
            views: '9M+',
            thumbnail: '/viral/megan2.jpg',
            title: 'Viral Video 10'
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
        {
            id: 11,
            views: '4.7M+',
            thumbnail: '/viral/sheree.jpg',
            title: 'Viral Video 11'
        },
        {
            id: 3,
            views: '4.6M+',
            thumbnail: '/viral/dentist-thumbnail.jpg',
            title: 'Viral Video 3'
        },
        {
            id: 9,
            views: '3.4M+',
            thumbnail: '/viral/joy.jpg',
            title: 'Viral Video 9'
        },
        {
            id: 1,
            views: '2.7M+',
            thumbnail: '/viral/kaseena-thumbnail.jpg',
            title: 'Viral Video 1'
        },
        {
            id: 8,
            views: '2.2M+',
            thumbnail: '/viral/cayla.jpg',
            title: 'Viral Video 8'
        },
        {
            id: 14,
            views: '2.1M+',
            thumbnail: '/viral/cayla3.jpg',
            title: 'Viral Video 14'
        },
        // {
        //     id: 15,
        //     views: '2.2M+',
        //     thumbnail: '/viral/cayla.jpg',
        //     title: 'Viral Video 15'
        // },
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
