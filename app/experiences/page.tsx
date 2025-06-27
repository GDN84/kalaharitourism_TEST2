import { Navbar } from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import { FeaturedExperiences } from "@/components/featured-experiences"
import { WhyListWithUs } from "@/components/why-list-with-us"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function ExperiencesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <FeaturedExperiences />
        <WhyListWithUs />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
