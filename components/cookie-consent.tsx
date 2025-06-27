"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)

    // Enable all cookies/analytics here if needed
    console.log("All cookies accepted")
  }

  const handleDeclineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)

    // Disable non-essential cookies here if needed
    console.log("Non-essential cookies declined")
  }

  const handleClose = () => {
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              We use cookies on our website to enhance your browsing experience, remember your preferences, and improve
              our services. By clicking "Accept All", you agree to the use of all cookies. If you prefer, you can select
              "Decline Cookies" to opt out of non-essential cookies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
            <Button onClick={handleDeclineCookies} variant="outline" size="sm" className="whitespace-nowrap">
              Decline Cookies
            </Button>
            <Button
              onClick={handleAcceptAll}
              size="sm"
              className="whitespace-nowrap bg-[#8B2635] hover:bg-[#7A1F2B] text-white"
            >
              Accept All
            </Button>
          </div>

          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
