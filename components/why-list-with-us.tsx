import { Globe, Star } from "lucide-react"

export function WhyListWithUs() {
  return (
    <section className="py-16 bg-[#f9f7f4]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-[#8B2635] text-center mb-16">Why List with Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-[#8B2635] flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-[#8B2635]" />
            </div>
            <h3 className="text-lg font-medium mb-2">Wider Audience</h3>
            <p className="text-sm text-gray-600">
              Reach travellers from across the region who are looking for authentic stays, flavours, and adventures in
              the Kalahari and along the Orange River.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-[#8B2635] flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-[#8B2635]" />
            </div>
            <h3 className="text-lg font-medium mb-2">⭐ Featured Listings</h3>
            <p className="text-sm text-gray-600">
              Top-performing businesses and unique experiences are highlighted in our featured sections, giving you
              greater visibility and more bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
