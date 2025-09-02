import { Button } from '@workspace/ui/components/button'
import { Anton } from 'next/font/google'
import Image from 'next/image'

const fontAnton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
})


export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Brian Mark',
            rating: 5,
            thumbnail: '/reviews/image.png',
            videoId: 1
        },
        {
            name: 'Kristen Stampini',
            rating: 5,
            thumbnail: '/reviews/image.png',
            videoId: 2
        },
        {
            name: 'Eric',
            rating: 5,
            thumbnail: '/reviews/image.png',
            videoId: 3
        },
        {
            name: 'Michael Averett',
            rating: 5,
            thumbnail: '/reviews/image.png',
            videoId: 4
        },
        {
            name: 'Arbor North',
            rating: 5,
            thumbnail: '/reviews/image.png',
            videoId: 5
        },
        {
            name: 'Chrissy',
            rating: 5,
            thumbnail: '/reviews/image.png',
            videoId: 6
        },
        {
            name: 'Monica Baker',
            rating: 5,
            thumbnail: '/reviews/image.png',
            videoId: 7
        }
    ]

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={index < rating ? 'text-yellow-400' : 'text-gray-600'}
            >
                ★
            </span>
        ))
    }

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h3 className={`${fontAnton.className} text-4xl sm:text-5xl lg:text-6xl uppercase text-center text-text-primary mb-20 leading-tight`}>
                        See what everyone is saying about{' '}
                        <span className="relative text-primary inline-block">
                            VSC
                            <svg
                                className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[105%] h-auto"
                                viewBox="0 0 223 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M1.38281 10.9785C42.2737 4.19561 142.923 -6.21633 221.053 10.9785"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h3>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.slice(0, 6).map((testimonial) => (
                        <div key={testimonial.videoId} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4">
                                <Image
                                    src={testimonial.thumbnail}
                                    alt={`${testimonial.name} testimonial`}
                                    width={360}
                                    height={640}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Play button overlay */}
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>

                            </div>

                            {/* Rating */}
                            <div className="flex justify-center mb-2">
                                <div className="flex">
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>

                            {/* Name */}
                            <div className="text-center">
                                <h4 className="text-white font-bold text-lg">
                                    -{testimonial.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        className="rounded-2xl"
                    >
                        Work With Us
                    </Button>
                </div>
            </div>
        </section>
    )
}
