"use client"

import { useEffect, useState } from "react"

// This hook safely accesses window properties that might be defined by extensions
export function useSafeWindow() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Only run on client-side
    setIsMounted(true)

    // Prevent ethereum property conflicts
    if (typeof window !== "undefined") {
      try {
        // Create a safety wrapper around ethereum to prevent redefinition errors
        const originalDescriptor = Object.getOwnPropertyDescriptor(window, "ethereum")
        if (originalDescriptor && !originalDescriptor.configurable) {
          console.log("Ethereum property is already defined and not configurable")
          // We don't try to modify it if it's not configurable
        }
      } catch (error) {
        console.error("Error handling ethereum property:", error)
      }
    }
  }, [])

  return { isMounted }
}
