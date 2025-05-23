"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Users, LineChart, Info } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function NavActionButtons() {
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()
  const [showNav, setShowNav] = useState(false)
  
  useEffect(() => {
    // Only show after a slight delay to avoid flash during page transitions
    if (isAuthenticated) {
      const timer = setTimeout(() => setShowNav(true), 300)
      return () => clearTimeout(timer)
    } else {
      setShowNav(false)
    }
  }, [isAuthenticated])
  
  if (!showNav || !isAuthenticated) return null
  
  const navButtons = [
    { href: "/", label: "Home", icon: Home },
    { href: "/team", label: "Team", icon: Users },
    { href: "/dashboard", label: "Dashboard", icon: LineChart },
    { href: "/about", label: "About", icon: Info },
  ]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
    >
      <div className="flex items-center gap-2 bg-background border border-border/40 rounded-full shadow-lg px-4 py-2 backdrop-blur-md">
        {navButtons.map((button) => {
          const isActive = pathname === button.href
          const Icon = button.icon
          return (
            <a
              key={button.href}
              href={button.href}
              className={`flex flex-col items-center justify-center p-2 rounded-full transition-colors ${
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{button.label}</span>
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}
