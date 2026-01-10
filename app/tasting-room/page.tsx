import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function TastingRoom() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
        <div className="brand-header">
          <Link href="/" className="font-bold">ORANGE RIVER KALAHARI</Link>
        </div>
        <nav className="flex items-center space-x-4 md:space-x-8 text-[10px] md:text-sm uppercase tracking-wider">
          <Link href="/restaurants" className="text-gray-700 hover:text-[#8B2635]">
            Restaurants
          </Link>
          
          <a 
            href="https://orangeriverwines.com/shop/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8B2635] font-bold flex items-center gap-1 border-b border-[#8B2635]"
          >
            Shop
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <Link href="/contact" className="text-gray-700 hover:text-[#8B2635]">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-gray-900 flex items-center justify-center text-white text-center">
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-white">Experience the Art of Wine Tasting</h1>
          <p className="text-lg max-w-2xl mx-auto">Join us for an unforgettable journey through the finest wines of the Kalahari region.</p>
          <div className="mt-8">
            <a 
               href="https://orangeriverwines.com/shop/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-[#8B2635] text-white px-8 py-3 uppercase tracking-widest font-bold hover:bg-[#a32d3e] transition-colors"
            >
              Shop Our Wines
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
