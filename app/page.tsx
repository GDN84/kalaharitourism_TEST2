import Link from "next/link"
import Image from "next/image"
import TravelWidget from "@/components/TravelWidget"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="brand-header">
            ORANGE RIVER KALAHARI
          </Link>
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Restaurants", href: "/restaurants" },
              { name: "Accommodation", href: "/accommodation" },
              { name: "Experiences", href: "/experiences" },
              { name: "Tasting Room", href: "/tasting-room" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 uppercase text-xs tracking-wider hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/images/desert-vineyard.png"
            alt="Desert vineyard landscape showing contrast between arid desert and lush vineyards"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-4 max-w-3xl">
            Experience the Magic of Upington and the Kalahari
          </h1>
          <p className="text-white text-sm mb-6 max-w-xl">
            Discover the Orange River Culture & the Kalahari Wilderness
          </p>
          <a
            href="https://trip.tp.st/8hvitwPS"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-6 py-2 uppercase text-xs tracking-wider hover:bg-white hover:text-gray-900 transition w-48 text-center"
          >
            Plan Your Visit
          </a>
          <Link href="/maps" className="flex items-center justify-center mt-4">
            <Image
              src="/images/map-icon-2.png"
              alt="Map"
              width={60}
              height={60}
              className="opacity-100 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </section>

      {/* Discover Upington */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/entrance-to-island.jpg"
                alt="Palm tree-lined avenue entrance to the island"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 font-light">Discover Upington</h2>
            <p className="text-gray-600 mb-4">
              Nestled in the heart of the Northern Cape, Upington serves as the perfect gateway to the magnificent
              Kalahari Desert. Our city offers a unique blend of modern comfort and natural wonder.
            </p>
            <p className="text-gray-600 mb-6">
              From wine tasting along the Orange River to adventures carefully curated to accommodate and experience
              that capture the best of what Upington has to offer.
            </p>
            <Link
              href="/learn-more"
              className="border border-gray-800 text-gray-800 px-6 py-2 uppercase text-xs tracking-wider hover:bg-gray-800 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Unforgettable Experiences */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-12 font-light text-center">Unforgettable Experiences</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Desert Safaris",
                description:
                  "Experience the majesty of the Kalahari Desert with guided tours that showcase its unique wildlife and landscapes.",
                image: "/images/oryx-safari.jpg",
                alt: "Oryx antelope in the Kalahari desert during safari",
              },
              {
                title: "Seasonal Events and Festivals",
                description: "Join our vibrant community celebrations and cultural festivals throughout the year.",
                image: "/images/events.jpg",
                alt: "Elegant event setup with flowers and decorations",
              },
              {
                title: "Things to Do",
                description:
                  "Explore the city's cultural attractions, outdoor adventures, and hidden gems throughout the magnificent Kalahari Desert.",
                image: "/images/things-to-do.jpg",
                alt: "Tourist exploring and photographing local attractions",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="w-full h-56 mb-4 relative overflow-hidden rounded bg-gray-100">
                  <Image src={item.image || "/placeholder.svg"} alt={item.alt} fill style={{ objectFit: "cover" }} />
                </div>
                <h3 className="text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                <div className="mt-auto flex flex-col items-center">
                  <a
                    href="https://trip.tp.st/8hvitwPS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 text-gray-800 px-6 py-2 uppercase text-xs tracking-wider hover:bg-gray-800 hover:text-white transition w-48 text-center"
                  >
                    More Information
                  </a>
                  <Link href="/maps" className="flex items-center justify-center mt-4">
                    <Image
                      src="/images/map-icon-2.png"
                      alt="Map"
                      width={45}
                      height={45}
                      className="opacity-100 hover:opacity-80 transition-opacity"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Widget */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-6 font-light text-center">
            Find Your Perfect Accommodation
          </h2>
          <TravelWidget />
        </div>
      </section>

      {/* Die Kerkmuis Tasting Room */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 font-light">Die Kerkmuis Tasting Room</h2>
            <p className="text-gray-600 mb-6">
              Experience the finest wines from Orange River Cellars in our elegant tasting room. Our expert sommeliers
              will guide you through a carefully curated selection of wines, each telling its own story of the Kalahari
              terroir.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Guided wine tastings daily</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Food and wine pairing experiences</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Private events and group bookings</span>
              </li>
            </ul>
            <a
              href="/tasting-room"
              className="border border-[#8B2635] text-[#8B2635] px-6 py-2 uppercase text-xs tracking-wider hover:bg-[#8B2635] hover:text-white transition self-start"
            >
              Book a Tasting
            </a>
          </div>
          <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/die-kerkmuis-restaurant-eating-and-drinking.jpg"
              alt="Die Kerkmuis wine tasting experience with people enjoying wine and food"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Luxury Accommodation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-12 font-light text-center">Luxury Accommodation</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Your Hotel Name Here",
                description: "Boost your bookings by showcasing your property here!",
                image: "/images/accommodation-hero-section.jpg",
              },
              {
                title: "Your Guesthouse Name Here",
                description: "Reach thousands of travelers exploring Upington.",
                image: "/images/reception.jpg",
              },
              {
                title: "Your Lodge Name Here",
                description: "Partner with us to grow your business.",
                image: "/images/room-service.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 shadow-sm flex flex-col h-full">
                <div className="w-full h-64 relative overflow-hidden mb-4 group">
                  <div className="block w-full h-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt="List your accommodation promotional image"
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white font-medium px-4 py-2 bg-[#C4704F] rounded">List Your Property</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
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

      {/* Local Dining */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-12 font-light text-center">Local Dining</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Your Restaurant Name Here",
                description: "Increase your reservations by highlighting your cuisine here!",
                image: "/images/restaurant-hero-section.jpg",
              },
              {
                title: "Your Bistro Name Here",
                description: "Connect with diners and visitors discovering Upington/The Kalahari.",
                image: "/images/restaurant-seating.jpg",
              },
              {
                title: "Your Café Name Here",
                description: "Collaborate with us to expand your customer base.",
                image: "/images/plates-from-above.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="w-full h-56 mb-4 relative overflow-hidden rounded bg-gray-100 group">
                  <div className="block w-full h-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt="List your restaurant promotional image"
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white font-medium px-4 py-2 bg-[#C4704F] rounded">
                        List Your Restaurant
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                <div className="mt-auto flex flex-col items-center">
                  <Link
                    href="/restaurants"
                    className="border border-gray-800 text-gray-800 px-6 py-2 text-xs uppercase tracking-wider hover:bg-gray-800 hover:text-white transition inline-block w-48 text-center"
                  >
                    Explore Restaurants
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
