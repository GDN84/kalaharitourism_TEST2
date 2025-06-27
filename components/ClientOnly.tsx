"use client"

import { useEffect, useState, type ReactNode } from "react"

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // Only render children client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ height: "80px" }}></div> // Placeholder with approximate height
  }

  return <>{children}</>
}
