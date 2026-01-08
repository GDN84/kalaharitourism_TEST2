import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google" // Added Playfair back
import Script from "next/script"
import CookieConsent from "@/components/cookie-consent"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
})

export const metadata: Metadata = {
  title: "Orange River Kalahari - Experience the Magic of Upington and the Kalahari",
  description: "Discover the Orange River Culture & the Kalahari Wilderness",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Script id="ethereum-fix" strategy="beforeInteractive">
          {`try { if (typeof window !== 'undefined') { const err = console.error; console.error = function() { if (arguments[0] && typeof arguments[0] === 'string' && arguments[0].includes('ethereum')) return; err.apply(this, arguments); }; } } catch (e) {}`}
        </Script>

        {/* HEADER START */}
        <header className="bg-white py-4 px-6 border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* The Logo/Brand Name using Playfair Font */}
            <Link href="/" className="text-sm md:text-base font-bold tracking-tighter" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              ORANGE RIVER KALAHARI
            </Link>
            
            <nav className="flex items-center space-x-3 md:space-x-8">
              {[
                { name: "Restaurants", href: "/restaurants", external: false },
                { name: "Shop", href: "https://orangeriverwines.com/shop/", external: true },
                { name: "Accommodation", href: "/accommodation", external: false },
                { name: "Experiences", href: "/experiences", external: false },
                { name: "Tasting Room", href: "/tasting-room", external: false },
                { name: "Contact", href: "/contact", external: false },
              ].map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 uppercase text-[10px] md:text-xs tracking-wider hover:text-gray-900 flex items-center gap-1"
                  >
                    {item.name}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 uppercase text-[10px] md:text-xs tracking-wider hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </header>
        {/* HEADER END */}

        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  )
}
