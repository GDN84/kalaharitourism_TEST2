"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ClientOnly from "./ClientOnly"

// Define marker icons
const accommodationIcon = new Icon({
  iconUrl: "/images/accommodation-icon.jpg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const attractionIcon = new Icon({
  iconUrl: "/images/attraction-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

// Define attractions data
const attractions = [
  {
    id: 1,
    name: "Orange River Cellars",
    type: "attraction",
    position: [-28.4637, 21.2569],
    description: "Discover the unique wines of the Kalahari at Orange River Cellars.",
    image: "https://picsum.photos/id/40/300/200",
    link: "/tasting-room",
  },
  {
    id: 2,
    name: "Augrabies Falls National Park",
    type: "attraction",
    position: [-28.5969, 20.338],
    description: "Experience the mighty Augrabies Falls, one of South Africa's natural wonders.",
    image: "https://picsum.photos/id/41/300/200",
  },
  {
    id: 3,
    name: "Kgalagadi Transfrontier Park",
    type: "attraction",
    position: [-26.4718, 20.6116],
    description: "Explore the vast wilderness of the Kgalagadi Transfrontier Park.",
    image: "https://picsum.photos/id/42/300/200",
  },
  {
    id: 4,
    name: "Riemvasmaak Hot Springs",
    type: "attraction",
    position: [-28.45, 20.33],
    description: "Relax in the natural hot springs surrounded by dramatic desert landscapes.",
    image: "https://picsum.photos/id/43/300/200",
  },
  {
    id: 5,
    name: "Spitskop Nature Reserve",
    type: "attraction",
    position: [-28.35, 21.18],
    description: "Discover unique flora and fauna in this beautiful nature reserve.",
    image: "https://picsum.photos/id/44/300/200",
  },
]

// Define accommodations data
const accommodations = [
  {
    id: 101,
    name: "Kalahari River Lodge",
    type: "accommodation",
    position: [-28.45, 21.24],
    description: "Luxury accommodation on the banks of the Orange River.",
    image: "https://picsum.photos/id/50/300/200",
    rating: 4.8,
    price: "From R1,200 per night",
  },
  {
    id: 102,
    name: "Desert Oasis Hotel",
    type: "accommodation",
    position: [-28.47, 21.27],
    description: "Modern comfort in the heart of the Kalahari.",
    image: "https://picsum.photos/id/51/300/200",
    rating: 4.5,
    price: "From R950 per night",
  },
  {
    id: 103,
    name: "Quiver Tree Rest Camp",
    type: "accommodation",
    position: [-28.59, 20.35],
    description: "Comfortable camping and chalets near Augrabies Falls.",
    image: "https://picsum.photos/id/52/300/200",
    rating: 4.3,
    price: "From R650 per night",
  },
  {
    id: 104,
    name: "Kalahari View Guesthouse",
    type: "accommodation",
    position: [-28.46, 21.25],
    description: "Charming guesthouse with panoramic views of the Kalahari.",
    image: "https://picsum.photos/id/53/300/200",
    rating: 4.7,
    price: "From R850 per night",
  },
]

const kokerboomRoute = [
  [-28.4607, 21.2463], // Upington
  [-28.7141, 20.9739], // Keimoes
  [-28.7668, 20.6332], // Kakamas
  [-29.3459, 21.0827], // Kenhardt
  [-30.4641, 20.4784], // Brandvlei
  [-30.9502, 19.4389], // Loeriesfontein
  [-31.3778, 19.1066], // Nieuwoudtville
  [-31.4735, 19.7755], // Calvinia
];

const kalahariRedDuneRoute = [
  [-28.4607, 21.2463], // Upington
  [-26.9833, 20.7667], // Askham
  [-25.7667, 20.6333], // Kgalagadi Transfrontier Park
  [-26.8667, 20.9833], // Mier
  [-26.7333, 20.0333], // Rietfontein
];

export default function MapComponent() {
  const [selectedMarker, setSelectedMarker] = useState<any>(null)
  const [mapRoute, setMapRoute] = useState<string>("kalahari")

  const handleMarkerClick = (marker: any) => {
    setSelectedMarker(marker)
  }

  const allMarkers = [...attractions, ...accommodations]

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="h-[600px] rounded-lg overflow-hidden border border-gray-200">
            <MapContainer
              center={[-28.4637, 21.2569]}
              zoom={9}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {allMarkers.map((marker) => (
                <Marker
                  key={marker.id}
                  position={marker.position}
                  icon={marker.type === "accommodation" ? accommodationIcon : attractionIcon}
                  eventHandlers={{
                    click: () => handleMarkerClick(marker),
                  }}
                >
                  <Tooltip permanent direction="top" offset={[0, -15]}>
                    {marker.name}
                  </Tooltip>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold">{marker.name}</h3>
                      <p className="text-sm">{marker.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <Polyline positions={kokerboomRoute} color="#2ECC71" weight={4} opacity={0.8} />
              <Polyline positions={kalahariRedDuneRoute} color="#E74C3C" weight={4} opacity={0.8} />
            </MapContainer>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button
              variant={mapRoute === "kalahari" ? "default" : "outline"}
              onClick={() => setMapRoute("kalahari")}
              className="flex-1"
            >
              Kalahari Wine Route
            </Button>
            <Button
              variant={mapRoute === "kokerboom" ? "default" : "outline"}
              onClick={() => setMapRoute("kokerboom")}
              className="flex-1"
            >
              Kokerboom Food & Wine Route
            </Button>
          </div>
        </div>

        <div>
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Featured Attractions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Orange River Cellars</h3>
                  <p className="text-gray-600 mb-2">Experience the unique wines of the Kalahari at our tasting room.</p>
                  <Link href="/tasting-room">
                    <Button variant="outline" className="w-full">
                      Visit Tasting Room Page →
                    </Button>
                  </Link>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold mb-2">Other Notable Attractions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span>Augrabies Falls National Park</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span>Kgalagadi Transfrontier Park</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span>Riemvasmaak Hot Springs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span>Spitskop Nature Reserve</span>
                    </li>
                  </ul>
                </div>

                {selectedMarker && (
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2">Selected Location</h3>
                    <div className="rounded-lg overflow-hidden mb-2">
                      <img
                        src={selectedMarker.image || "/placeholder.svg"}
                        alt={selectedMarker.name}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <h4 className="font-medium">{selectedMarker.name}</h4>
                    <p className="text-sm text-gray-600">{selectedMarker.description}</p>

                    {selectedMarker.type === "accommodation" && (
                      <div className="mt-2">
                        <div className="flex items-center text-sm">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1">{selectedMarker.rating}/5</span>
                          <span className="ml-auto">{selectedMarker.price}</span>
                        </div>
                      </div>
                    )}

                    {selectedMarker.link && (
                      <div className="mt-2">
                        <Link href={selectedMarker.link}>
                          <Button variant="outline" size="sm" className="w-full">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ClientOnly>
  )
}
