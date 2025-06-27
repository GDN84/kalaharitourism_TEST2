"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const carouselImages = [
  {
    src: "/images/restaurant-hero-section.jpg",
    alt: "Elegant restaurant interior with blue velvet chairs and wooden beamed ceiling",
  },
  {
    src: "/images/restaurant-seating.jpg",
    alt: "Close-up of elegant table setting with crystal glasses and white napkins",
  },
  {
    src: "/images/plates-from-above.jpg",
    alt: "Top view of beautifully plated dishes on a rustic wooden table",
  },
]

export default function RestaurantHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="container relative z-20 mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-wide max-w-4xl mx-auto leading-tight">
          Exquisite Dining in the Heart of the Kalahari
        </h1>
        <p className="mt-6 text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Discover our collection of fine restaurants offering authentic local cuisine and international flavours in a
          stunning setting.
        </p>

        <Link
          href="/signup"
          className="inline-block mt-10 px-8 py-3 bg-[#C4704F] text-white uppercase text-sm tracking-widest hover:bg-[#A65D41] transition-colors"
        >
          SUBMIT YOUR INTEREST
        </Link>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/20 hover:bg-black/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/20 hover:bg-black/40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
