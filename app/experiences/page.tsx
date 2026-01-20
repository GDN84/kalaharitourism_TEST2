import { Navbar } from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import { FeaturedExperiences } from "@/components/featured-experiences"
import { WhyListWithUs } from "@/components/why-list-with-us"
import { HowItWorks } from "@/components/how-it-works"
import Footer from "@/components/footer"

export default function ExperiencesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Top Announcement Bar */}
      <div style={{
        background: '#EA580C',
        color: 'white',
        textAlign: 'center',
        padding: '12px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontSize: '14px',
        letterSpacing: '0.5px'
      }}>
        🚀 FOUNDING PARTNER SPECIAL: Get 90 Days of Premium Exposure for FREE. Offer valid for local businesses!
      </div>

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
