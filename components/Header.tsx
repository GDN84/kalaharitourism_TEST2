"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white py-4 px-6 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="brand-header">
          ORANGE RIVER KALAHARI
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
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

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden border-b">
            <nav className="flex flex-col p-4">
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
                  className="text-gray-600 uppercase text-xs tracking-wider hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
