"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, MapPin, Compass, AlertCircle, Wine } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

// Dynamically import the Map component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  loading: () => (
    <div className="w-full h-[500px] sm:h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-700 font-medium">Loading map...</p>
      </div>
    </div>
  ),
  ssr: false,
})

// Route colors
const KOKERBOOM_COLOR = "#2ECC71" // Green
const KALAHARI_COLOR = "#E74C3C" // Red

// Route information
const routeInfo = {
  kokerboom: {
    name: "Kokerboom Route",
    color: KOKERBOOM_COLOR,
    description:
      "The Kokerboom Route takes you through the southern part of the Northern Cape, named after the distinctive quiver trees (kokerboom) that dot the landscape. This scenic route traverses semi-desert terrain, small towns with rich histories, and spectacular mountain passes.",
    keyStops: [
      { name: "Upington", description: "Gateway to the Kalahari and hub of the Green Kalahari wine region" },
      { name: "Keimoes", description: "Historic town with beautiful Cape Dutch architecture" },
      { name: "Kakamas", description: "Known for its irrigation canals and hydroelectric scheme" },
      { name: "Kenhardt", description: "Home to the famous Quiver Tree Forest" },
      { name: "Brandvlei", description: "Small oasis town in the heart of Bushmanland" },
      { name: "Loeriesfontein", description: "Known for its windmill museum" },
      { name: "Nieuwoudtville", description: "Bulb capital of the world, spectacular spring flowers" },
      { name: "Calvinia", description: "Charming town at the foot of the Hantam Mountains" },
    ],
    drivingDistances: [
      "Upington to Keimoes: 40 km (30 minutes)",
      "Keimoes to Kakamas: 40 km (30 minutes)",
      "Kakamas to Kenhardt: 95 km (1 hour 15 minutes)",
      "Kenhardt to Brandvlei: 125 km (1 hour 30 minutes)",
      "Brandvlei to Loeriesfontein: 110 km (1 hour 20 minutes)",
      "Loeriesfontein to Nieuwoudtville: 65 km (45 minutes)",
      "Nieuwoudtville to Calvinia: 40 km (30 minutes)",
    ],
    recommendedAttractions: [
      "Augrabies Falls National Park - Witness the mighty Orange River plunging into the 18km abyss",
      "Quiver Tree Forest - A natural monument of over 4,000 aloes",
      "Orange River Wine Route - Sample award-winning wines in the Green Kalahari",
      "Kalahari Oranje Museum - Learn about the region's history and culture",
      "Nieuwoudtville Flower Reserve - During spring (August-September), witness one of the world's most spectacular wildflower displays",
      "Akkerendam Nature Reserve - Hiking trails with panoramic views near Calvinia",
    ],
    duration: "5-7 days recommended to fully experience the route and attractions",
  },
  kalahari: {
    name: "Kalahari Red Dune Route",
    color: KALAHARI_COLOR,
    description:
      "The Kalahari Red Dune Route explores the magnificent red sand dunes of the Kalahari Desert. This route offers an authentic desert experience with opportunities to encounter wildlife, learn about San culture, and witness spectacular night skies in one of South Africa's most remote regions.",
    keyStops: [
      { name: "Upington", description: "Starting point with excellent accommodation and services" },
      { name: "Askham", description: "Gateway to the red dunes and desert experiences" },
      {
        name: "Kgalagadi Transfrontier Park",
        description: "Vast wildlife sanctuary spanning South Africa and Botswana",
      },
      { name: "Mier", description: "Historic settlement with rich cultural heritage" },
      { name: "Rietfontein", description: "Border post town with unique desert character" },
    ],
    wildlifeViewing: [
      "Kgalagadi Transfrontier Park - Famous for black-maned lions, cheetahs, leopards, and large herds of antelope",
      "Meerkat Sanctuary - Observe habituated meerkat colonies in their natural environment",
      "Raptor Route - Spot eagles, hawks, and falcons that thrive in the desert ecosystem",
      "Desert Adapted Species - Look for gemsbok (oryx), springbok, and the elusive aardvark",
      "Night Drives - Opportunity to see nocturnal species like aardwolf, bat-eared fox, and African wildcat",
    ],
    culturalExperiences: [
      "San Cultural Centre - Learn about the indigenous San people's traditional way of life",
      "Bushman Cultural Experiences - Guided walks with San trackers to learn about desert survival",
      "Traditional Crafts - Purchase authentic San crafts and artwork",
      "Khomani San Community Tours - Community-led tours sharing authentic cultural knowledge",
      "Traditional Cuisine - Sample traditional foods prepared using ancient desert recipes",
    ],
    accommodationOptions: [
      "!Xaus Lodge - Community-owned luxury lodge on the edge of a salt pan",
      "Kgalagadi Lodge - Comfortable accommodation at the gateway to the Kgalagadi Transfrontier Park",
      "Molopo Kalahari Lodge - Oasis in the desert with a variety of accommodation options",
      "Red Dune Camp - Authentic desert camping experience among the red dunes",
      "Kalahari Tented Camp - Unfenced wilderness camp with views of a waterhole",
      "Twee Rivieren Rest Camp - Main camp at the entrance to Kgalagadi with chalets and camping",
    ],
    duration: "4-6 days recommended, longer if including extended stays in Kgalagadi Transfrontier Park",
  },
}

export default function MapsPage() {
  // State for route visibility
  const [showKokerboomRoute, setShowKokerboomRoute] = useState(true)
  const [showKalaharRedDuneRoute, setShowKalaharRedDuneRoute] = useState(true)
  const [showAccommodations, setShowAccommodations] = useState(true)
  const [showAttractions, setShowAttractions] = useState(true)
  const [showBrochureLocations, setShowBrochureLocations] = useState(true)

  // State for map loading and errors
  const [mapError, setMapError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Function to handle map loading error
  const handleMapError = () => {
    setMapError(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white text-gray-800 py-4 px-6 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="brand-header">
                ORANGE RIVER KALAHARI
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-wider font-medium text-gray-600">
              <Link href="/restaurants" className="hover:text-[#8B2635] transition-colors">
                Restaurants
              </Link>
              <Link href="/accommodation" className="hover:text-[#8B2635] transition-colors">
                Accommodation
              </Link>
              <Link href="/experiences" className="hover:text-[#8B2635] transition-colors">
                Experiences
              </Link>
              <Link href="/tasting-room" className="hover:text-[#8B2635] transition-colors">
                Tasting Room
              </Link>
              <Link href="#footer" className="hover:text-[#8B2635] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="grid gap-8">
          {/* Map Section */}
          <section>
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                {/* Map Title */}
                <div className="flex items-center space-x-2 mb-4">
                  <Compass className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Interactive Route Map</h2>
                </div>

                {/* Layer Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="kokerboom" checked={showKokerboomRoute} onCheckedChange={setShowKokerboomRoute} />
                    <Label htmlFor="kokerboom" className="font-medium">
                      Kokerboom Route
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="kalahari"
                      checked={showKalaharRedDuneRoute}
                      onCheckedChange={setShowKalaharRedDuneRoute}
                    />
                    <Label htmlFor="kalahari" className="font-medium">
                      Kalahari Red Dune Route
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accommodations"
                      checked={showAccommodations}
                      onCheckedChange={setShowAccommodations}
                    />
                    <Label htmlFor="accommodations" className="font-medium">
                      Accommodations
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="attractions" checked={showAttractions} onCheckedChange={setShowAttractions} />
                    <Label htmlFor="attractions" className="font-medium">
                      Attractions
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="brochure-locations"
                      checked={showBrochureLocations}
                      onCheckedChange={setShowBrochureLocations}
                    />
                    <Label htmlFor="brochure-locations" className="font-medium">
                      Brochure Locations
                    </Label>
                  </div>
                </div>

                {/* Legend */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <h3 className="text-sm font-semibold mb-2">Map Legend</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: KOKERBOOM_COLOR }}></div>
                      <span>Kokerboom Route</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: KALAHARI_COLOR }}></div>
                      <span>Kalahari Red Dune Route</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                      <span>Accommodation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                      <span>Attraction</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-600 rounded-full mr-2"></div>
                      <span>Brochure Locations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container with Loading State */}
              <div className="w-full h-[500px] sm:h-[600px] relative">
                {mapError ? (
                  <div className="w-full h-[500px] sm:h-[600px] flex items-center justify-center bg-gray-100 p-6">
                    <div className="max-w-md text-center">
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Map Loading Error</AlertTitle>
                        <AlertDescription>
                          We're having trouble loading the interactive map. Please try refreshing the page or check your
                          internet connection.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                ) : isClient ? (
                  <MapComponent
                    showKokerboomRoute={showKokerboomRoute}
                    showKalaharRedDuneRoute={showKalaharRedDuneRoute}
                    showAccommodations={showAccommodations}
                    showAttractions={showAttractions}
                    showBrochureLocations={showBrochureLocations}
                    onError={handleMapError}
                  />
                ) : (
                  <div className="w-full h-[500px] sm:h-[600px] flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-700 font-medium">Initializing map...</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </section>

          {/* Route Information Dropdowns */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Route Information
            </h2>

            <div className="space-y-4">
              {/* Kokerboom Route Dropdown */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: KOKERBOOM_COLOR }}></div>
                      <h3 className="text-lg font-semibold">Kokerboom Route</h3>
                    </div>
                    <ChevronDown className="h-5 w-5 transition-transform ui-open:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Description:</h4>
                          <p className="text-sm text-gray-700">{routeInfo.kokerboom.description}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Key Stops:</h4>
                          <ul className="space-y-2">
                            {routeInfo.kokerboom.keyStops.map((stop, index) => (
                              <li key={index} className="text-sm">
                                <span className="font-medium">{stop.name}</span> - {stop.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Estimated Driving Distances:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {routeInfo.kokerboom.drivingDistances.map((distance, index) => (
                              <li key={index}>{distance}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Recommended Attractions:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {routeInfo.kokerboom.recommendedAttractions.map((attraction, index) => (
                              <li key={index}>{attraction}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Typical Duration:</h4>
                          <p className="text-sm text-gray-700">{routeInfo.kokerboom.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>

              {/* Kalahari Red Dune Route Dropdown */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: KALAHARI_COLOR }}></div>
                      <h3 className="text-lg font-semibold">Kalahari Red Dune Route</h3>
                    </div>
                    <ChevronDown className="h-5 w-5 transition-transform ui-open:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Description:</h4>
                          <p className="text-sm text-gray-700">{routeInfo.kalahari.description}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Key Stops:</h4>
                          <ul className="space-y-2">
                            {routeInfo.kalahari.keyStops.map((stop, index) => (
                              <li key={index} className="text-sm">
                                <span className="font-medium">{stop.name}</span> - {stop.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Wildlife Viewing Opportunities:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {routeInfo.kalahari.wildlifeViewing.map((wildlife, index) => (
                              <li key={index}>{wildlife}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Cultural Experiences:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {routeInfo.kalahari.culturalExperiences.map((experience, index) => (
                              <li key={index}>{experience}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Recommended Accommodation:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {routeInfo.kalahari.accommodationOptions.map((accommodation, index) => (
                              <li key={index}>{accommodation}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#8B2635] text-white" id="footer">
        <div className="container mx-auto py-12 px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-medium mb-4">Orange River Kalahari</h3>
              <p className="text-sm text-gray-200 mb-4">
                Discover the beauty and tranquility of the Kalahari region through curated accommodation and experiences.
              </p>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-medium mb-4">Tasting Room</h3>
              <p className="text-sm text-gray-200">079 594 1339</p>
              <p className="text-sm text-gray-200">tastingroom@owk.co.za</p>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-medium mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <Link href="/restaurants" className="hover:text-white">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link href="/accommodation" className="hover:text-white">
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="hover:text-white">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/tasting-room" className="hover:text-white">
                    Tasting Room
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 text-center text-sm text-gray-300 border-t border-gray-700">
            <p className="mb-4 italic">
              Affiliate Disclosure: Affiliate commissions may be earned at no extra cost to you.
            </p>
            <p>© {new Date().getFullYear()} Orange River Kalahari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
