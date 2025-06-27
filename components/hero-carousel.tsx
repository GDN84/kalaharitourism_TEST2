"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  {
    src: "/images/quiver-tree-stars.jpg",
    alt: "Quiver Tree Stars in the Kalahari Desert",
  },
  {
    src: "/images/lightning-kalahari-desert.jpg",
    alt: "Lightning over the Kalahari Desert",
  },
  {
    src: "/images/desert-oryx.jpg",
    alt: "Desert Oryx in the Kalahari",
  },
]

export default function HeroCarousel() {
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
    <section className="relative h-screen w-full overflow-hidden">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Extraordinary Kalahari Experiences</h1>
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover desert adventures and cultural journeys that capture the true spirit of the Kalahari.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Offer Experiences? Partner with Us Today</h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Join our select network and connect with travellers seeking something unforgettable.
            </p>
          </div>

          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-[#C4704F] text-white uppercase text-sm tracking-widest hover:bg-[#A65D41] transition-colors"
          >
            SUBMIT YOUR INTEREST
          </Link>
        </div>
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
