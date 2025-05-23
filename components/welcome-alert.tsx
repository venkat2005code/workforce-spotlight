"use client"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useAuth } from "@/contexts/auth-context"

export function WelcomeAlert() {
  const { isAuthenticated } = useAuth()
  const [showAlert, setShowAlert] = useState(false)
  const [isNewLogin, setIsNewLogin] = useState(false)
  
  useEffect(() => {
    // Check if this is a new login by looking at sessionStorage
    const hasShownWelcome = sessionStorage.getItem("welcomeShown")
    const justLoggedIn = !hasShownWelcome && isAuthenticated
    
    if (justLoggedIn) {
      setIsNewLogin(true)
      setShowAlert(true)
      // Mark as shown
      sessionStorage.setItem("welcomeShown", "true")
      
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [isAuthenticated])
  
  if (!showAlert) return null
  
  return (
    <Alert 
      className="mb-6 border-primary/50 bg-primary/10 animate-in fade-in slide-in-from-top-5 duration-300"
    >
      <CheckCircle2 className="h-5 w-5 text-primary" />
      <AlertTitle className="text-foreground">Welcome to Workforce Spotlight!</AlertTitle>
      <AlertDescription className="text-muted-foreground">
        You're now signed in and can explore all areas of the platform. Use the navigation bar above to discover our features.
      </AlertDescription>
    </Alert>
  )
}
