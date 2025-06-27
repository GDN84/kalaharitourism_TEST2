"use client"

import { useState, useEffect, type ReactNode } from "react"

export default function SafeClientProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set mounted state
    setIsMounted(true)

    // Add additional error handling for ethereum errors
    const handleError = (event: ErrorEvent) => {
      if (event.message && event.message.includes("ethereum")) {
        event.preventDefault()
        console.warn("Ethereum error suppressed in client component")
        return true
      }
    }

    window.addEventListener("error", handleError as EventListener)
    return () => window.removeEventListener("error", handleError as EventListener)
  }, [])

  if (!isMounted) {
    return null // Return nothing during SSR
  }

  return <>{children}</>
}
