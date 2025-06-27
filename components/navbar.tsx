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
