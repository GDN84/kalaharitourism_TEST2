import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-[#8B2635]">Submit Your Interest</CardTitle>
            <CardDescription className="text-gray-600">
              Join Orange River Kalahari and showcase your business to travelers seeking authentic experiences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form method="POST" action="https://formspree.io/f/xpwderjb" className="space-y-6">
              {/* Hidden fields */}
              <input type="hidden" name="_redirect" value="/thank-you" />
              <input type="hidden" name="_gotcha" style={{ display: "none" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    className="w-full"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                    Type of Business *
                  </Label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select business type</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Accommodation">Accommodation</option>
                    <option value="Experience">Experience</option>
                    <option value="Tour Guide">Tour Guide</option>
                    <option value="Activity Provider">Activity Provider</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    className="w-full"
                    placeholder="City, Province/State"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                    Website or Social Media Link
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    className="w-full"
                    placeholder="https://www.yourwebsite.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message / Listing Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none"
                  placeholder="Tell us about your business, what makes it special, and what you'd like to offer to visitors. Include any specific details about your services, facilities, or unique experiences."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#8B2635] hover:bg-[#6d1e29] text-white py-3 text-base font-medium"
                >
                  Submit Your Interest
                </Button>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>
                  By submitting this form, you agree to be contacted by Orange River Kalahari regarding your business
                  listing.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
