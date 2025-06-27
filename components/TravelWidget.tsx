"use client"

import { useEffect, useRef } from "react"

export default function TravelWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a unique ID for each widget instance
    const widgetId = `travel-widget-${Math.random().toString(36).substring(2, 9)}`

    if (containerRef.current) {
      containerRef.current.id = widgetId
      // Clear any previous content to prevent duplicates
      containerRef.current.innerHTML = ""

      // Create and append the script element
      const script = document.createElement("script")
      script.src =
        "https://c121.travelpayouts.com/content?trs=328374&shmarker=552936&lang=www&layout=S10391&powered_by=true&promo_id=4038"
      script.async = true
      script.charset = "utf-8"

      // Add a custom link to redirect to the specified URL
      const customLink = document.createElement("div")
      customLink.style.textAlign = "center"
      customLink.style.marginTop = "10px"

      const bookButton = document.createElement("a")
      bookButton.href = "https://trip.tp.st/8hvitwPS"
      bookButton.target = "_blank"
      bookButton.rel = "noopener noreferrer"
      bookButton.textContent = "BOOK ACCOMMODATION"
      bookButton.style.backgroundColor = "#C4704F"
      bookButton.style.color = "white"
      bookButton.style.padding = "8px 16px"
      bookButton.style.borderRadius = "4px"
      bookButton.style.textDecoration = "none"
      bookButton.style.display = "inline-block"
      bookButton.style.fontWeight = "bold"

      customLink.appendChild(bookButton)
      containerRef.current.appendChild(customLink)
      containerRef.current.appendChild(script)
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        const scriptElement = containerRef.current.querySelector("script")
        if (scriptElement) {
          scriptElement.remove()
        }
      }
    }
  }, [])

  return <div ref={containerRef} className="mt-4 mb-8 w-full"></div>
}
