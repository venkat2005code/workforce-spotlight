"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

// Routes that require authentication
const protectedRoutes = ["/dashboard", "/team"]

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  
  useEffect(() => {
    // Check if the current route requires authentication
    const isProtectedRoute = protectedRoutes.includes(pathname)
    
    if (isProtectedRoute && !isAuthenticated) {
      // Redirect to login if trying to access protected route while not authenticated
      router.push("/login")
    }
  }, [isAuthenticated, pathname, router])
  
  return <>{children}</>
}
