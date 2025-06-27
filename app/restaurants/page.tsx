import ClientOnly from "@/components/ClientOnly"
import Header from "@/components/accommodation/Header"
import RestaurantHero from "@/components/restaurant/RestaurantHero"
import ExceptionalRestaurants from "@/components/restaurant/ExceptionalRestaurants"
import KalahariFlavours from "@/components/restaurant/KalahariFlavours"
import TasteOfKalahari from "@/components/restaurant/TasteOfKalahari"
import RestaurantHowItWorks from "@/components/restaurant/RestaurantHowItWorks"
import RestaurantPricingSection from "@/components/restaurant/RestaurantPricingSection"
import Footer from "@/components/accommodation/Footer"

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen">
      <ClientOnly>
        <Header />
      </ClientOnly>
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
