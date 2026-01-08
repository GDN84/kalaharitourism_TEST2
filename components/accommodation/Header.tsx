"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Only run client-side code after mounting
  useEffect(() => {
    setMounted(true)

    // Add global error handler for ethereum errors
    const handleError = (event: ErrorEvent) => {
      if (event.error && event.error.toString().includes("ethereum")) {
        event.preventDefault()
        console.warn("Ethereum error suppressed")
        return true
      }
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  // Don't render anything on the server
  if (!mounted) return null

  return (
    <header className="fixed top-0 z-50 w-full py-6 bg-transparent">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="brand-header text-white">
          ORANGE RIVER KALAHARI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/restaurants"
            className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
          >
            Restaurants
          </Link>
          {/* Added Shop Link for Desktop */}
          <a
            href="https://orangeriverwines.com/shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase flex items-center gap-1"
          >
            Shop
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <Link
            href="/accommodation"
            className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
          >
            Accommodation
          </Link>
          <Link
            href="/experiences"
            className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
          >
            Experiences
          </Link>
          <Link
            href="/tasting-room"
            className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
          >
            Tasting Room
          </Link>
          <Link
            href="/contact"
            className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-sm md:hidden">
            <nav className="flex flex-col items-center py-8 gap-6">
              <Link
                href="/restaurants"
                className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Restaurants
              </Link>
              {/* Added Shop Link for Mobile */}
              <a
                href="https://orangeriverwines.com/shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <Link
                href="/accommodation"
                className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Accommodation
              </Link>
              <Link
                href="/experiences"
                className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                href="/tasting-room"
                className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Tasting Room
              </Link>
              <Link
                href="/contact"
                className="text-white text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
