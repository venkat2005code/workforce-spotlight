"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"

export default function LogoutPage() {
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()
  const { logout } = useAuth()
  
  useEffect(() => {
    // Log out the user
    logout()
    
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-secondary" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Successfully Logged Out</CardTitle>
          <CardDescription className="text-center">Thank you for using Workforce Spotlight</CardDescription>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          <p>You have been successfully logged out of your account.</p>
          <p className="mt-2">Redirecting to home page in {countdown} seconds...</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Return to Home Page</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
