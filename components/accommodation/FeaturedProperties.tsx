import Image from "next/image"

const featuredProperties = [
  {
    id: 1,
    name: "Your Hotel Name Here",
    description: "Boost your bookings by showcasing your property here!",
    image: "/images/list-your-accommodation-3.png",
    alt: "List your accommodation promotional image",
  },
  {
    id: 2,
    name: "Your Guesthouse Name Here",
    description: "Reach thousands of travelers exploring Upington.",
    image: "/images/list-your-accommodation-3.png",
    alt: "List your accommodation promotional image",
  },
  {
    id: 3,
    name: "Your Lodge Name Here",
    description: "Partner with us to grow your business.",
    image: "/images/list-your-accommodation-3.png",
    alt: "List your accommodation promotional image",
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-12 font-light text-center">Featured Properties</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white p-4 shadow-sm flex flex-col h-full">
              <div className="w-full h-64 relative overflow-hidden mb-4 group">
                <div className="block w-full h-full">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white font-medium px-4 py-2 bg-[#C4704F] rounded">List Your Property</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl text-gray-800 mb-2">{property.name}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{property.description}</p>
              <div className="mt-auto flex flex-col items-center">
                <a
                  href="https://trip.tp.st/8hvitwPS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 text-gray-800 px-6 py-2 text-xs uppercase tracking-wider hover:bg-gray-800 hover:text-white transition inline-block w-48 text-center"
                >
                  BOOK ACCOMMODATION
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
