"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { User, Mail, Phone, Building, MapPin, Globe, MessageSquare } from "lucide-react"

export default function SubmitListingForm() {
  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader className="text-center space-y-2 pb-6">
        <CardTitle className="text-3xl font-light text-[#8B2635]">Submit Your Listing</CardTitle>
        <CardDescription className="text-gray-600">
          Join Orange River Kalahari and showcase your business to travelers exploring Upington and the Kalahari
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form method="POST" action="https://formspree.io/f/xpwderjb" className="space-y-6">
          {/* Hidden fields for Formspree */}
          <input type="hidden" name="_redirect" value="/thank-you" />
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

          <div className="space-y-2">
            <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-700">
              <User className="w-4 h-4 mr-2 text-[#8B2635]" />
              Full Name
            </label>
            <Input id="fullName" name="fullName" placeholder="Enter your full name" required className="h-11" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4 mr-2 text-[#8B2635]" />
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 mr-2 text-[#8B2635]" />
              Phone Number
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required className="h-11" />
          </div>

          <div className="space-y-2">
            <label htmlFor="businessType" className="flex items-center text-sm font-medium text-gray-700">
              <Building className="w-4 h-4 mr-2 text-[#8B2635]" />
              Type of Business
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select business type</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Experience">Experience</option>
              <option value="Café">Café</option>
              <option value="Bar">Bar</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Fine Dining">Fine Dining</option>
              <option value="Bistro">Bistro</option>
              <option value="Pub">Pub</option>
              <option value="Food Truck">Food Truck</option>
              <option value="Bakery">Bakery</option>
              <option value="Hotel">Hotel</option>
              <option value="Guest House">Guest House</option>
              <option value="Lodge">Lodge</option>
              <option value="B&B">Bed & Breakfast</option>
              <option value="Self-catering">Self-catering</option>
              <option value="Resort">Resort</option>
              <option value="Activity Provider">Activity Provider</option>
              <option value="Tour Operator">Tour Operator</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="flex items-center text-sm font-medium text-gray-700">
              <MapPin className="w-4 h-4 mr-2 text-[#8B2635]" />
              Location
            </label>
            <Input id="location" name="location" placeholder="City, area, or full address" required className="h-11" />
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="flex items-center text-sm font-medium text-gray-700">
              <Globe className="w-4 h-4 mr-2 text-[#8B2635]" />
              Website or Social Media Link
            </label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://www.yourwebsite.com or social media link"
              className="h-11"
            />
            <p className="text-xs text-gray-500">Optional - Include your website, Facebook, Instagram, etc.</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700">
              <MessageSquare className="w-4 h-4 mr-2 text-[#8B2635]" />
              Message / Listing Details
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your business - what makes it special, your specialties, operating hours, unique features, etc."
              className="min-h-[120px] resize-none"
              required
            />
            <p className="text-xs text-gray-500">
              Please provide details about your business that would help travelers understand what you offer
            </p>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-12 bg-[#8B2635] hover:bg-[#6d1e29] text-white font-medium text-base"
            >
              Submit Your Listing
            </Button>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-gray-500">
              By submitting this form, you agree to be contacted about listing opportunities with Orange River Kalahari
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
