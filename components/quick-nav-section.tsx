"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, Building2, BarChart2, LineChart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function QuickNavSection() {
  const { isAuthenticated } = useAuth()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 800)
      
      return () => clearTimeout(timer)
    }
  }, [isAuthenticated])
  
  if (!isAuthenticated || !isVisible) return null
  
  const navCards = [
    {
      title: "Team",
      description: "Meet the team behind Workforce Spotlight",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "/team"
    },
    {
      title: "Dashboard",
      description: "Explore workforce data and insights",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      link: "/dashboard"
    },
  ]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 border-t border-border/50 pt-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Explore Our Platform</h2>
        <p className="mt-2 text-muted-foreground">
          Discover what Workforce Spotlight has to offer
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {navCards.map((card) => (
          <Link key={card.title} href={card.link} className="group">
            <div className="flex flex-col h-full space-y-4 rounded-lg border p-6 transition-all duration-200 hover:border-primary/50 hover:bg-muted">
              <div className="flex items-center space-x-4">
                {card.icon}
                <h3 className="text-xl font-medium">{card.title}</h3>
              </div>
              <p className="text-muted-foreground flex-grow">{card.description}</p>
              <div className="flex items-center text-sm text-primary">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
