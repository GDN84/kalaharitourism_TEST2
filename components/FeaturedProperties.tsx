import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon } from "lucide-react"
import Link from "next/link"

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      name: "Kalahari River Lodge",
      location: "Upington, Northern Cape",
      description: "Luxury accommodation on the banks of the Orange River with stunning views of the Kalahari.",
      price: "From R1,200 per night",
      rating: 4.8,
      image: "https://picsum.photos/id/50/600/400",
      featured: true,
      amenities: ["Pool", "Wi-Fi", "Restaurant", "Air conditioning"],
    },
    {
      id: 2,
      name: "Desert Oasis Hotel",
      location: "Upington, Northern Cape",
      description: "Modern comfort in the heart of the Kalahari with easy access to local attractions.",
      price: "From R950 per night",
      rating: 4.5,
      image: "https://picsum.photos/id/51/600/400",
      featured: false,
      amenities: ["Pool", "Wi-Fi", "Bar", "Parking"],
    },
    {
      id: 3,
      name: "Quiver Tree Rest Camp",
      location: "Near Augrabies Falls",
      description: "Comfortable camping and chalets near Augrabies Falls National Park.",
      price: "From R650 per night",
      rating: 4.3,
      image: "https://picsum.photos/id/52/600/400",
      featured: false,
      amenities: ["Braai facilities", "Wi-Fi", "Nature trails", "Swimming pool"],
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Featured Accommodations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best places to stay in the Orange River Kalahari region, from luxury lodges to comfortable
            guesthouses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                {property.featured && <Badge className="absolute top-2 right-2 bg-orange-500">Featured</Badge>}
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{property.name}</h3>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{property.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3">{property.location}</p>
                <p className="text-gray-600 mb-4 flex-1">{property.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      {amenity}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-orange-600">{property.price}</span>
                  <Link href="/accommodation">
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/accommodation">
            <Button>View All Accommodations</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
