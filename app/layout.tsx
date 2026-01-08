import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import CookieConsent from "@/components/cookie-consent"

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
        <Script id="ethereum-fix" strategy="beforeInteractive">
          {`
            try {
              if (typeof window !== 'undefined') {
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
            } catch (e) {}
          `}
        </Script>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
