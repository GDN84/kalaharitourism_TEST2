"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Star,
  Bed,
  Wifi,
  Wind,
  Users,
  PocketIcon as Pool,
  Utensils,
  SpadeIcon as Spa,
  Clock,
  Timer,
  UtensilsCrossed,
  ChefHat,
  Truck,
  Armchair,
  Home,
} from "lucide-react"
import Link from "next/link"

export default function ListingForm() {
  const [isPreviewVisible, setIsPreviewVisible] = useState(true)
  const [listingType, setListingType] = useState("accommodation")

  return (
    <div className="w-full">
      <div className="p-6 pb-0">
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Button className="bg-[#8B2635] hover:bg-[#6d1e29] flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold text-[#8c3a3a] text-center">Submit Your Listing</h1>
        <p className="text-center text-gray-600 mt-1 mb-4">Showcase your listing with Orange River Kalahari</p>
      </div>

      {/* Preview Section */}
      <div className="px-6">
        <div className="bg-[#f9f1f1] rounded-md mb-6">
          <div className="flex justify-between items-center p-3">
            <button
              className="text-[#8c3a3a] font-medium flex items-center gap-1"
              onClick={() => setIsPreviewVisible(!isPreviewVisible)}
            >
              Preview Your Listing {isPreviewVisible ? "▲" : "▼"}
            </button>
            <button className="text-[#8c3a3a] text-sm" onClick={() => setIsPreviewVisible(false)}>
              Hide
            </button>
          </div>

          {isPreviewVisible && (
            <div className="p-3 pt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="bg-[#f2f5f7] h-44 flex items-center justify-center text-gray-400 text-sm">
                    Featured Image
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Your Business Name</h3>
                    <div className="flex text-yellow-400 mb-1">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <span className="text-xs text-gray-500 ml-1">(New listing)</span>
                    </div>
                    <p className="text-gray-500 text-sm">Your catchy tagline will appear here...</p>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <MapPin size={14} className="mr-1" />
                      <span>Your location</span>
                    </div>
                    {listingType === "accommodation" ? (
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Bed size={14} className="mr-1" />
                        <span>Rooms available</span>
                      </div>
                    ) : listingType === "activity" ? (
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Timer size={14} className="mr-1" />
                        <span>Duration</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <UtensilsCrossed size={14} className="mr-1" />
                        <span>Cuisine type</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Form Sections */}
      <form className="px-6 pb-6" method="POST" action="https://formspree.io/f/xpwderjb">
        {/* Hidden Formspree fields */}
        <input type="hidden" name="_redirect" value="/thank-you" />
        <input type="hidden" name="_gotcha" style={{ display: "none" }} />

        {/* Basic Information */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-[#8c3a3a] mb-4">Basic Information</h2>

          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium mb-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 9h6" />
                  <path d="M9 15h6" />
                </svg>
                Business Name
              </label>
              <Input name="business_name" placeholder="Enter your business name" required />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium mb-1.5">
                <Users size={16} className="mr-1.5" />
                Contact Person's Name
              </label>
              <Input name="contact_name" placeholder="Enter contact person's name" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1.5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email Address
                </label>
                <Input name="email" type="email" placeholder="Enter email address" required />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Phone Number
                </label>
                <Input name="phone" type="tel" placeholder="Enter phone number" required />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium mb-1.5">
                <MapPin size={16} className="mr-1.5" />
                Physical Address
              </label>
              <Textarea name="address" placeholder="Enter physical address" className="min-h-[80px]" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1.5"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Website URL (Optional)
                </label>
                <Input name="website" type="url" placeholder="Enter website URL" />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1.5"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                  </svg>
                  Listing Type
                </label>
                <select
                  name="listing_type"
                  value={listingType}
                  onChange={(e) => setListingType(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="accommodation">Accommodation</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="activity">Activity</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Photos */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-[#8c3a3a] mb-4">Description & Photos</h2>

          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium mb-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <polyline points="4 7 4 4 20 4 20 7" />
                  <line x1="9" x2="15" y1="20" y2="20" />
                  <line x1="12" x2="12" y1="4" y2="20" />
                </svg>
                Tagline
              </label>
              <Input name="tagline" placeholder="A short, catchy description (max 150 characters)" maxLength={150} />
              <div className="text-xs text-gray-500 mt-1">Max 150 characters</div>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium mb-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                  <path d="M9 9h1" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
                Detailed Description
              </label>
              <Textarea
                name="description"
                placeholder="Provide a detailed description of your listing (max 500 characters)"
                className="min-h-[120px]"
                maxLength={500}
                required
              />
              <div className="text-xs text-gray-500 mt-1">Max 500 characters</div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Photos</label>
              <input
                type="file"
                name="photos"
                multiple
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8B2635] file:text-white hover:file:bg-[#6d1e29]"
              />
              <div className="text-xs text-gray-500 mt-1">JPG or PNG • Max 5MB per file</div>
            </div>
          </div>
        </div>

        {/* Conditional Sections based on Listing Type */}
        {listingType === "accommodation" && (
          <div className="mb-6">
            <h2 className="text-lg font-medium text-[#8c3a3a] mb-4">Accommodation Details</h2>

            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <Bed size={16} className="mr-1.5" />
                  Number of Rooms
                </label>
                <Input name="rooms" type="number" placeholder="Enter number of rooms" min="1" />
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Amenities</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" name="amenities" value="wifi" id="wifi" className="mt-1" />
                    <label htmlFor="wifi" className="text-sm leading-none flex items-center pt-0.5">
                      <Wifi size={16} className="mr-1.5" />
                      WiFi
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" name="amenities" value="pool" id="pool" className="mt-1" />
                    <label htmlFor="pool" className="text-sm leading-none flex items-center pt-0.5">
                      <Pool size={16} className="mr-1.5" />
                      Pool
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" name="amenities" value="aircon" id="aircon" className="mt-1" />
                    <label htmlFor="aircon" className="text-sm leading-none flex items-center pt-0.5">
                      <Wind size={16} className="mr-1.5" />
                      Air Conditioning
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" name="amenities" value="restaurant" id="restaurant" className="mt-1" />
                    <label htmlFor="restaurant" className="text-sm leading-none flex items-center pt-0.5">
                      <Utensils size={16} className="mr-1.5" />
                      Restaurant
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" name="amenities" value="conference" id="conference" className="mt-1" />
                    <label htmlFor="conference" className="text-sm leading-none flex items-center pt-0.5">
                      <Users size={16} className="mr-1.5" />
                      Conference Facilities
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" name="amenities" value="spa" id="spa" className="mt-1" />
                    <label htmlFor="spa" className="text-sm leading-none flex items-center pt-0.5">
                      <Spa size={16} className="mr-1.5" />
                      Spa
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-sm font-medium mb-1.5">
                    <Clock size={16} className="mr-1.5" />
                    Check-in Time
                  </label>
                  <select
                    name="checkin_time"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select time</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium mb-1.5">
                    <Clock size={16} className="mr-1.5" />
                    Check-out Time
                  </label>
                  <select
                    name="checkout_time"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select time</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {listingType === "activity" && (
          <div className="mb-6">
            <h2 className="text-lg font-medium text-[#8c3a3a] mb-4">Activity Details</h2>

            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <Timer size={16} className="mr-1.5" />
                  Duration
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <Input name="duration_value" placeholder="Duration (e.g., 2)" type="number" min="1" />
                  <select
                    name="duration_unit"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select unit</option>
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <Users size={16} className="mr-1.5" />
                  Group Size
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input name="min_participants" type="number" placeholder="Minimum participants" min="1" />
                    <div className="text-xs text-gray-500 mt-1">Minimum group size</div>
                  </div>
                  <div>
                    <Input name="max_participants" type="number" placeholder="Maximum participants" min="1" />
                    <div className="text-xs text-gray-500 mt-1">Maximum group size</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {listingType === "restaurant" && (
          <div className="mb-6">
            <h2 className="text-lg font-medium text-[#8c3a3a] mb-4">Restaurant Details</h2>

            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <ChefHat size={16} className="mr-1.5" />
                  Cuisine Type
                </label>
                <Input name="cuisine_type" placeholder="Enter cuisine type (e.g., Italian, Mexican)" />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <Truck size={16} className="mr-1.5" />
                  Delivery Options
                </label>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" name="offers_delivery" value="yes" id="delivery" className="mt-1" />
                  <label htmlFor="delivery" className="text-sm leading-none flex items-center pt-0.5">
                    Offers Delivery
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-1.5">
                  <Armchair size={16} className="mr-1.5" />
                  Seating Capacity
                </label>
                <Input name="seating_capacity" type="number" placeholder="Enter seating capacity" min="1" />
              </div>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full" size="lg">
          Submit Listing
        </Button>
      </form>

      <div className="px-6 pb-6">
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button className="bg-[#8B2635] hover:bg-[#6d1e29] flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
