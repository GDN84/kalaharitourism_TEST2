"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AccommodationForm() {
  return (
    <Card className="w-full max-w-lg shadow-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold text-center text-[#8B2635]">Submit Your Listing</CardTitle>
        <CardDescription className="text-center">List your accommodation with Orange River Kalahari</CardDescription>
      </CardHeader>
      <CardContent>
        <form method="POST" action="https://formspree.io/f/xpwderjb" className="space-y-4">
          {/* Hidden fields for Formspree */}
          <input type="hidden" name="_redirect" value="/thank-you" />
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="accommodation-type" className="text-sm font-medium">
              Type of Accommodation
            </label>
            <select
              id="accommodation-type"
              name="accommodation-type"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select accommodation type</option>
              <option value="Hotel">Hotel</option>
              <option value="Guest House">Guest House</option>
              <option value="B&B">Bed & Breakfast</option>
              <option value="Self-catering">Self-catering</option>
              <option value="Lodge">Lodge</option>
              <option value="Resort">Resort</option>
              <option value="Apartment">Apartment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <Input id="location" name="location" placeholder="City, area or address" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="text-sm font-medium">
              Website or Social Media Link
            </label>
            <Input id="website" name="website" type="url" placeholder="https://..." />
            <p className="text-xs text-gray-500">Optional</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message / Listing Details
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please provide details about your accommodation, including number of rooms, amenities, etc."
              className="min-h-[120px]"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#8B2635] hover:bg-[#6d1e29]">
            Submit Listing
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Link href="/">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
