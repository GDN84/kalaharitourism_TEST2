import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
// import { Inter, Playfair_Display, Crimson_Pro } from "next/font/google"
import Script from "next/script"
import CookieConsent from "@/components/cookie-consent"

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
//   display: "swap",
// })
// const crimson = Crimson_Pro({
//   subsets: ["latin"],
//   variable: "--font-crimson",
//   display: "swap",
// })

export const metadata: Metadata = {
  title: "Orange River Kalahari - Experience the Magic of Upington and the Kalahari",
  description: "Discover the Orange River Culture & the Kalahari Wilderness",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif' }}>
        {/* Script to fix ethereum issues - runs before interactive */}
        <Script id="ethereum-fix" strategy="beforeInteractive">
          {`
            try {
              // Prevent ethereum property conflicts
              if (typeof window !== 'undefined') {
                // Create a safe version of console.error that ignores ethereum errors
                const originalConsoleError = console.error;
                console.error = function() {
                  if (arguments[0] && typeof arguments[0] === 'string' && 
                      arguments[0].includes('ethereum')) {
                    console.warn('Ethereum error suppressed');
                    return;
                  }
                  return originalConsoleError.apply(this, arguments);
                };
              }
            } catch (e) {
              // Silently fail if there's an error in our error handler
            }
          `}
        </Script>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

import "./globals.css"
