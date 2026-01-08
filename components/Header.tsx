"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ExternalLink } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation Links - Added Shop here
  const navItems = [
    { name: "Restaurants", href: "/restaurants", external: false },
    { name: "Shop", href: "https://orangeriverwines.com/age-verification/", external: true },
    { name: "Accommodation", href: "/accommodation", external: false },
    { name: "Experiences", href: "/experiences", external: false },
    { name: "Tasting Room", href: "/tasting-room", external: false },
    { name: "Contact", href: "/contact", external: false },
  ]

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
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 uppercase text-xs tracking-wider hover:text-gray-900 flex items-center gap-1"
              >
                {item.name}
                <ExternalLink size={12} className="opacity-70" />
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 uppercase text-xs tracking-wider hover:text-gray-900"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden border-b">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 uppercase text-xs tracking-wider hover:text-gray-900 py-2 flex items-center gap-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 uppercase text-xs tracking-wider hover:text-gray-900 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
