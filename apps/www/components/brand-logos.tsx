import Image from "next/image";

export default function BrandLogos() {
    const brands = [
        { name: 'RedBull', logo: '/icons/rb.png' },
        { name: 'Forbes', logo: '/icons/forbes.png' },
        { name: 'Business Insider', logo: '/icons/bi.png' },
        { name: 'CBS', logo: '/icons/cbs.svg' },
        { name: 'Entrepreneur', logo: '/icons/entrepreneur.png' },
        { name: 'Yahoo', logo: '/icons/yahoo.jpg' }
    ]

    return (
        <section className="py-16 bg-zinc-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
                    {brands.map((brand) => (
                        <div key={brand.name} className="flex items-center justify-center">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                className="h-8 md:h-12 object-contain hover:grayscale-0 transition-all duration-300"
                                width={100}
                                height={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
