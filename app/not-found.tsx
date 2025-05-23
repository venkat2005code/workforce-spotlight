"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // If the route doesn't exist, try adding a trailing slash
    if (!pathname.endsWith("/")) {
      router.replace(`${pathname}/`)
    }
  }, [pathname, router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button 
        onClick={() => router.push("/")}
        className="mt-8 inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
      >
        Return to Home
      </button>
    </div>
  )
}
