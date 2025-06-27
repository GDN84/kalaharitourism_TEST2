import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home, ArrowLeft } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f5f2ec] p-4">
      <div className="w-full max-w-2xl text-center">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-3xl font-semibold text-[#8c3a3a] mb-4">Thank You!</h1>

          <p className="text-gray-600 mb-6 text-lg">
            Your listing has been successfully submitted to Orange River Kalahari.
          </p>

          <div className="bg-[#f9f1f1] rounded-md p-4 mb-6">
            <h2 className="text-lg font-medium text-[#8c3a3a] mb-2">What happens next?</h2>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• Our team will review your submission within 2-3 business days</li>
              <li>• We'll contact you via email to confirm your listing details</li>
              <li>• Once approved, your listing will be featured on our website</li>
              <li>• You'll receive login credentials to manage your listing</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              If you have any questions, please contact us at{" "}
              <a href="mailto:tastingroom@owk.co.za" className="text-[#8B2635] hover:underline">
                tastingroom@owk.co.za
              </a>{" "}
              or call{" "}
              <a href="tel:+27795941339" className="text-[#8B2635] hover:underline">
                079 594 1339
              </a>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-[#8B2635] hover:bg-[#6d1e29] flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Return to Homepage
                </Button>
              </Link>

              <Link href="/signup">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Submit Another Listing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
