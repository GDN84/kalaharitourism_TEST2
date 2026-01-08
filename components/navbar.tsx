import Link from "next/link"

export function Navbar() {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="brand-header text-white" style={{ color: "white" }}>
          ORANGE RIVER KALAHARI
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/restaurants" className="text-white uppercase text-sm tracking-wider hover:text-white/80">
            Restaurants
          </Link>
          {/* Added Shop Link with matching style */}
          <a 
            href="https://orangeriverwines.com/shop/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white uppercase text-sm tracking-wider hover:text-white/80 flex items-center gap-1"
          >
            Shop
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <Link href="/accommodation" className="text-white uppercase text-sm tracking-wider hover:text-white/80">
            Accommodation
          </Link>
          <Link href="/experiences" className="text-white uppercase text-sm tracking-wider hover:text-white/80">
            Experiences
          </Link>
          <Link href="/tasting-room" className="text-white uppercase text-sm tracking-wider hover:text-white/80">
            Tasting Room
          </Link>
          <Link href="/contact" className="text-white uppercase text-sm tracking-wider hover:text-white/80">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
