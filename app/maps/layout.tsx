import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// import { Inter, Playfair_Display } from "next/font/google"

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
// })

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// })

export const metadata = {
  title: "Northern Cape Route Maps",
  description:
    "Interactive maps of the Kokerboom and Kalahari Red Dune routes in South Africa's Northern Cape province",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
