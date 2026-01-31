
import Image from 'next/image'

export default function Gallery() {
    const images = [
        '/gallery/grad-1.jpg',
        '/gallery/grad-2.jpg',
        '/gallery/grad-3.jpg',
        '/gallery/grad-4.jpg',
        '/gallery/grad-5.jpg',
    ]

    return (
        <section className="">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Gallery</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A glimpse into my graduation moments.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`relative rounded-xl overflow-hidden aspect-[3/4] group ${index === 0 ? 'md:col-span-2 md:aspect-[16/10]' : ''
                            }`}
                    >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
