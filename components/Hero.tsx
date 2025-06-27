import type React from "react"

interface HeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 lg:mt-24 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              {title}
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {subtitle}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              {/* Removed Book Accommodation Button */}
            </div>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={imageUrl || "/placeholder.svg"}
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
