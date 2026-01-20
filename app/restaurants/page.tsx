import ClientOnly from "@/components/ClientOnly"
import Header from "@/components/accommodation/Header"
import RestaurantHero from "@/components/restaurant/RestaurantHero"
import ExceptionalRestaurants from "@/components/restaurant/ExceptionalRestaurants"
import KalahariFlavours from "@/components/restaurant/KalahariFlavours"
import TasteOfKalahari from "@/components/restaurant/TasteOfKalahari"
import RestaurantHowItWorks from "@/components/restaurant/RestaurantHowItWorks"
import RestaurantPricingSection from "@/components/restaurant/RestaurantPricingSection"
import Footer from "@/components/footer"

export default function RestaurantsPage() {
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
        fontFamily: 'sans-serif',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontSize: '14px',
        letterSpacing: '0.5px'
      }}>
        🚀 FOUNDING PARTNER SPECIAL: Get 90 Days of Premium Exposure for FREE. Offer valid for local businesses!
      </div>

      <RestaurantHero />
      <ExceptionalRestaurants />
      <TasteOfKalahari />
      <KalahariFlavours />
      <RestaurantHowItWorks />
      <RestaurantPricingSection />
      <Footer />
    </div>
  )
}
