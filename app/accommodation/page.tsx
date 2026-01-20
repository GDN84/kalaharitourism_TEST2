import ClientOnly from "@/components/ClientOnly"
import Header from "@/components/accommodation/Header"
import Hero from "@/components/accommodation/Hero"
import HowItWorks from "@/components/accommodation/HowItWorks"
import FeaturedProperties from "@/components/accommodation/FeaturedProperties"
import GuestBenefits from "@/components/accommodation/GuestBenefits"
import PricingSection from "@/components/accommodation/PricingSection"
import Footer from "@/components/footer"
import TravelWidget from "@/components/TravelWidget"

export default function AccommodationPage() {
  return (
    <div className="min-h-screen">
      <ClientOnly>
        <Header />
      </ClientOnly>
      
      {/* Top Announcement Bar */}
      <div style={{
        background: '#EA580C',
        color: 'white',
        textAlign: 'center',
        padding: '12px',
        fontWeight: 'bold',
        position: 'relative',
        zIndex: '50',
        fontFamily: 'sans-serif',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontSize: '14px',
        letterSpacing: '0.5px'
      }}>
        🚀 FOUNDING PARTNER SPECIAL: Get 90 Days of Premium Exposure for FREE. Offer valid for local businesses!
      </div>

      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 font-light tracking-wide text-center mb-8">
          Find Your Perfect Stay
        </h2>
        <TravelWidget />
      </div>
      <GuestBenefits />
      <PricingSection />
      <Footer />
    </div>
  )
}
