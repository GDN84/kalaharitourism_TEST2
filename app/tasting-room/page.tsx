import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function TastingRoom() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="brand-header">
          <Link href="/">ORANGE RIVER KALAHARI</Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <Link href="/restaurants" className="text-gray-700 hover:text-[#8B2635]">
            Restaurants
          </Link>
          {/* Added Shop Link */}
          <a 
            href="https://orangeriverwines.com/shop/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-[#8B2635] flex items-center gap-1"
          >
            Shop
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <Link href="/accommodation" className="text-gray-700 hover:text-[#8B2635]">
            Accommodation
          </Link>
          <Link href="/experiences" className="text-gray-700 hover:text-[#8B2635]">
            Experiences
          </Link>
          <Link href="/tasting-room" className="text-[#8B2635] font-bold">
            Tasting Room
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#8B2635]">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/images/tasting-room-hero.jpg"
          alt="Wine tasting experience"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/20">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Experience the Art of Wine
            <br />
            Tasting
          </h1>
          <p className="mb-6 max-w-xl">
            Join us for an unforgettable journey through the finest wines of the Kalahari region
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=27795941339&text=Hello%2C%20I%20would%20like%20to%20book%20a%20wine%20tasting%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B2635] text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#6d1e29]"
          >
            Book a Tasting
          </a>
        </div>
      </section>

      {/* 360 Tour Section */}
      <section className="py-8 px-4 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-2">Step Inside Before You Arrive</h2>
          <p className="text-gray-600 mb-6">Explore the tasting room in stunning 360° views.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://africastreetview.360imagefilm.com/F1HNNEFLUK" target="_blank" rel="noopener noreferrer" className="no-underline">
              <div className="bg-white rounded-lg p-4 shadow-sm w-[220px] transition-transform hover:scale-105">
                <div className="relative h-[120px] w-full mb-2">
                  <Image src="/images/360-degree-icon.png" alt="360 Tour" fill className="object-cover rounded" />
                </div>
                <p className="mt-2 text-gray-700 text-sm">📸 360° Photo Tour</p>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/JJfomd52qrNuET9K8" target="_blank" rel="noopener noreferrer" className="no-underline">
              <div className="bg-white rounded-lg p-4 shadow-sm w-[220px] transition-transform hover:scale-105">
                <div className="relative h-[120px] w-full mb-2">
                  <Image src="/images/map-360-view.png" alt="Google Maps" fill className="object-contain rounded" />
                </div>
                <p className="mt-2 text-gray-700 text-sm">🌍 Google Maps 360° View</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Curated Wine Tastings */}
      <section className="py-16 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-[#8B2635] mb-4">Curated Wine Tastings</h2>
            <p className="text-gray-700 mb-4">
              Our expert sommeliers have carefully selected wines that showcase the unique terroir of our region.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start"><span className="text-[#8B2635] mr-2">•</span><span>Premium wine selection (4-6 wines)</span></li>
              <li className="flex items-start"><span className="text-[#8B2635] mr-2">•</span><span>Artisanal cheese and charcuterie pairings</span></li>
              <li className="flex items-start"><span className="text-[#8B2635] mr-2">•</span><span>Expert guidance and wine education</span></li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="relative h-[380px] w-full">
              <Image src="/images/curated-wine-tasting.jpg" alt="Curated Wine Tastings" fill className="object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-16 flex justify-center bg-gray-50">
        <div className="w-full max-w-5xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-[#8B2635] mb-4">DIE KERKMUIS RESTAURANT</h2>
            <p className="text-gray-700 mb-6">Our friendly staff is ready to serve you the best local dishes.</p>
            <a href="https://orangeriverwines.com/wp-content/uploads/2025-Menu_A4_compressed.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#8B2635] text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#6d1e29] inline-block">
              View Menu
            </a>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="relative h-[280px] w-full">
              <Image src="/images/die-kerkmuis-plate.jpg" alt="Restaurant Plate" fill className="object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
