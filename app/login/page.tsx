"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const { toast } = useToast()
  const router = useRouter()
  const { login } = useAuth()

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Call login from auth context
      login()

      // Redirect to the About page instead of Dashboard
      toast({
        title: "Login successful",
        description: "Welcome back to Workforce Spotlight!",
      })

      router.push("/about")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      {/* Circuit background pattern */}        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -inset-[10%] animate-pulse-slow">
            <svg 
              className="h-full w-full" 
              xmlns="http://www.w3.org/2000/svg" 
              width="100%" 
              height="100%" 
              viewBox="0 0 1200 800"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="shine-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                </linearGradient>
                <linearGradient id="triangle-fill-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                </linearGradient>
                <linearGradient id="triangle-fill-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
                <linearGradient id="triangle-fill-3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                </linearGradient>
                <pattern id="polygon-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(1.1) rotate(10)">                {/* Triangular Mosaic Pattern */}
                {/* Row 1 */}
                <polygon points="0,0 50,0 25,40" fill="url(#triangle-fill-1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" begin="0s" repeatCount="indefinite" />
                </polygon>
                <polygon points="50,0 100,0 75,40" fill="url(#triangle-fill-2)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" begin="1s" repeatCount="indefinite" />
                </polygon>
                <polygon points="25,40 75,40 50,80" fill="url(#triangle-fill-3)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" begin="2s" repeatCount="indefinite" />
                </polygon>
                <polygon points="0,0 25,40 0,80" fill="url(#triangle-fill-2)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" begin="3s" repeatCount="indefinite" />
                </polygon>
                <polygon points="100,0 75,40 100,80" fill="url(#triangle-fill-1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" begin="4s" repeatCount="indefinite" />
                </polygon>
                
                {/* Row 2 */}
                <polygon points="0,80 50,80 25,40" fill="url(#triangle-fill-3)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" begin="2.5s" repeatCount="indefinite" />
                </polygon>
                <polygon points="50,80 100,80 75,40" fill="url(#triangle-fill-1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" begin="3.5s" repeatCount="indefinite" />
                </polygon>
                
                {/* Intersection Points */}
                <circle cx="0" cy="0" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="0" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="0" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="25" cy="40" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="75" cy="40" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="80" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="80" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="80" r="1.5" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="3s" begin="3.5s" repeatCount="indefinite" />
                </circle>
                
                {/* Additional Design Elements */}
                <line x1="25" y1="40" x2="75" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="3,2">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="20s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="0" x2="50" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="3,2">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="20s" repeatCount="indefinite" />
                </line>
                
                {/* Animated Point */}
                <circle cx="50" cy="40" r="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7">
                  <animate attributeName="r" values="2;3;2" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="0.7;1.2;0.7" dur="5s" repeatCount="indefinite" />
                </circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#polygon-pattern)"></rect>
              
              {/* Larger Animated Triangular Elements */}
              <g className="animate-float" style={{animationDelay: "1s"}}>
                <polygon points="300,200 450,250 350,350" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
                  <animate attributeName="fill-opacity" values="0.07;0.12;0.07" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.25;0.18" dur="10s" repeatCount="indefinite" />
                </polygon>
                <polygon points="300,200 200,300 350,350" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
                  <animate attributeName="fill-opacity" values="0.04;0.08;0.04" dur="9s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.28;0.18" dur="11s" repeatCount="indefinite" />
                </polygon>
                <circle cx="300" cy="200" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4;3" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="250" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4;3" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="350" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4;3" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="7s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="300" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4;3" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
                </circle>
              </g>
              
              <g className="animate-float-x" style={{animationDelay: "2.5s"}}>
                <polygon points="800,300 900,350 850,450 750,400" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
                  <animate attributeName="points" values="800,300 900,350 850,450 750,400; 805,305 905,355 855,455 755,405; 800,300 900,350 850,450 750,400" dur="20s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.05;0.1;0.05" dur="12s" repeatCount="indefinite" />
                </polygon>
                <line x1="800" y1="300" x2="850" y2="450" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" values="0;20" dur="15s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.3;0.18" dur="10s" repeatCount="indefinite" />
                </line>
                <line x1="900" y1="350" x2="750" y2="400" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" values="0;20" dur="18s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.3;0.18" dur="12s" repeatCount="indefinite" />
                </line>
                <circle cx="800" cy="300" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4.5;3" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="9s" repeatCount="indefinite" />
                </circle>
                <circle cx="900" cy="350" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4.5;3" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="10s" repeatCount="indefinite" />
                </circle>
                <circle cx="850" cy="450" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4.5;3" dur="9s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="750" cy="400" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4.5;3" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="12s" repeatCount="indefinite" />
                </circle>
                <circle cx="825" cy="375" r="5" fill="rgba(255,255,255,0.2)">
                  <animate attributeName="r" values="5;7;5" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.2;0.4;0.2" dur="8s" repeatCount="indefinite" />
                </circle>
              </g>
              
              <g className="animate-morph" style={{animationDelay: "0.5s"}}>
                <polygon points="500,500 600,450 550,600 450,550" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
                  <animate attributeName="points" values="500,500 600,450 550,600 450,550; 505,505 605,455 555,605 455,555; 500,500 600,450 550,600 450,550" dur="25s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="15s" repeatCount="indefinite" />
                </polygon>
                <line x1="500" y1="500" x2="550" y2="600" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" values="0;15" dur="20s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.28;0.18" dur="10s" repeatCount="indefinite" />
                </line>
                <line x1="600" y1="450" x2="450" y2="550" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" values="0;15" dur="18s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.28;0.18" dur="12s" repeatCount="indefinite" />
                </line>
                <circle cx="500" cy="500" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;5;3" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="9s" repeatCount="indefinite" />
                </circle>
                <circle cx="600" cy="450" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;5;3" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="10s" repeatCount="indefinite" />
                </circle>
                <circle cx="550" cy="600" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;5;3" dur="9s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="550" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;5;3" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="12s" repeatCount="indefinite" />
                </circle>
                <circle cx="525" cy="525" r="5" fill="rgba(255,255,255,0.2)">
                  <animate attributeName="r" values="5;8;5" dur="12s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.2;0.5;0.2" dur="10s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Animated Unique Triangle Shapes */}
              <g className="animate-float-x" style={{animationDelay: "1.7s"}}>
                <polygon points="950,150 980,200 920,220" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
                  <animate attributeName="points" values="950,150 980,200 920,220; 955,155 985,205 925,225; 950,150 980,200 920,220" dur="15s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.07;0.14;0.07" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.3;0.18" dur="8s" repeatCount="indefinite" />
                </polygon>
                <circle cx="950" cy="190" r="3" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="3;4.5;3" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.5;0.8;0.5" dur="8s" repeatCount="indefinite" />
                </circle>
              </g>
              
              <g className="animate-float" style={{animationDelay: "3.2s"}}>
                <polygon points="150,350 200,400 130,440" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
                  <animate attributeName="points" values="150,350 200,400 130,440; 155,355 205,405 135,445; 150,350 200,400 130,440" dur="18s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.07;0.14;0.07" dur="12s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0.3;0.18" dur="10s" repeatCount="indefinite" />
                </polygon>
                <circle cx="160" cy="395" r="3" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="r" values="3;4.5;3" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.5;0.8;0.5" dur="9s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Additional Morphing Triangle */}
              <g className="animate-morph" style={{animationDelay: "2.3s"}}>
                <polygon points="250,150 300,100 320,180" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2">
                  <animate attributeName="points" values="250,150 300,100 320,180; 245,145 305,95 325,185; 250,150 300,100 320,180" dur="20s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.05;0.1;0.05" dur="15s" repeatCount="indefinite" />
                </polygon>
                <circle cx="290" cy="140" r="3" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="r" values="3;4;3" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur="10s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Animated Connecting Lines */}
              <path d="M450,250 C 480,300 520,350 550,450" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="8,4" className="animate-pulse-slow" style={{animationDelay: "0.8s"}}>
                <animate attributeName="stroke-dashoffset" values="0;30" dur="20s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.15;0.25;0.15" dur="15s" repeatCount="indefinite" />
                <animate attributeName="d" values="M450,250 C 480,300 520,350 550,450; M450,250 C 490,310 530,360 550,450; M450,250 C 480,300 520,350 550,450" dur="30s" repeatCount="indefinite" />
              </path>
              
              <path d="M750,400 C 700,450 650,500 600,450" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="8,4" className="animate-pulse-slow" style={{animationDelay: "2.3s"}}>
                <animate attributeName="stroke-dashoffset" values="0;25" dur="25s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.15;0.25;0.15" dur="18s" repeatCount="indefinite" />
                <animate attributeName="d" values="M750,400 C 700,450 650,500 600,450; M750,400 C 710,460 640,510 600,450; M750,400 C 700,450 650,500 600,450" dur="35s" repeatCount="indefinite" />
              </path>
              
              <path d="M200,300 C 180,320 160,340 150,350" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="8,4" className="animate-pulse-slow" style={{animationDelay: "1.2s"}}>
                <animate attributeName="stroke-dashoffset" values="0;20" dur="18s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.15;0.3;0.15" dur="12s" repeatCount="indefinite" />
                <animate attributeName="d" values="M200,300 C 180,320 160,340 150,350; M200,300 C 185,325 165,345 150,350; M200,300 C 180,320 160,340 150,350" dur="28s" repeatCount="indefinite" />
              </path>
              
              <path d="M900,350 C 920,320 940,280 950,220" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="8,4" className="animate-pulse-slow" style={{animationDelay: "3s"}}>
                <animate attributeName="stroke-dashoffset" values="0;22" dur="22s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.15;0.28;0.15" dur="15s" repeatCount="indefinite" />
                <animate attributeName="d" values="M900,350 C 920,320 940,280 950,220; M900,350 C 925,325 945,285 950,220; M900,350 C 920,320 940,280 950,220" dur="32s" repeatCount="indefinite" />
              </path>
              
              {/* Additional Animated Connecting Lines */}
              <path d="M300,200 C 350,175 400,170 450,250" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="6,3" className="animate-pulse-slow" style={{animationDelay: "1.5s"}}>
                <animate attributeName="stroke-dashoffset" values="0;18" dur="20s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.12;0.25;0.12" dur="15s" repeatCount="indefinite" />
              </path>
              
              <path d="M130,440 C 180,470 250,500 300,450" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="6,3" className="animate-pulse-slow" style={{animationDelay: "2.8s"}}>
                <animate attributeName="stroke-dashoffset" values="0;15" dur="18s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.12;0.22;0.12" dur="12s" repeatCount="indefinite" />
              </path>
              
              <path d="M450,550 C 500,575 550,580 600,550" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="6,3" className="animate-pulse-slow" style={{animationDelay: "3.3s"}}>
                <animate attributeName="stroke-dashoffset" values="0;20" dur="22s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.12;0.24;0.12" dur="16s" repeatCount="indefinite" />
              </path>
              
              <path d="M850,450 C 820,500 780,550 750,580" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="6,3" className="animate-pulse-slow" style={{animationDelay: "0.5s"}}>
                <animate attributeName="stroke-dashoffset" values="0;16" dur="24s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.12;0.2;0.12" dur="14s" repeatCount="indefinite" />
              </path>
              
              {/* Enhanced Glowing Center for Polygonal Pattern */}
              <defs>
                <radialGradient id="center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
                
                <filter id="enhanced-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="20" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Enhanced Center Glow with Animation */}
              <circle cx="50%" cy="50%" r="180" fill="url(#center-glow)" className="animate-pulse-slow" filter="url(#enhanced-glow)">
                <animate attributeName="r" values="180;200;180" dur="15s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;1;0.7" dur="10s" repeatCount="indefinite" />
              </circle>
              
              {/* Animated Triangular Glow Points */}
              <g className="animate-float">
                <polygon points="400,350 450,300 500,350" fill="rgba(255,255,255,0.07)" className="animate-pulse-slow" style={{animationDelay: "0.3s"}}>
                  <animate attributeName="points" values="400,350 450,300 500,350; 410,360 450,305 490,360; 400,350 450,300 500,350" dur="20s" repeatCount="indefinite" />
                </polygon>
              </g>
              
              <g className="animate-float-x">
                <polygon points="700,450 750,400 800,450" fill="rgba(255,255,255,0.07)" className="animate-pulse-slow" style={{animationDelay: "1.5s"}}>
                  <animate attributeName="points" values="700,450 750,400 800,450; 710,455 750,395 795,455; 700,450 750,400 800,450" dur="25s" repeatCount="indefinite" />
                </polygon>
              </g>
              
              <g className="animate-morph">
                <polygon points="550,250 600,300 550,350" fill="rgba(255,255,255,0.07)" className="animate-pulse-slow" style={{animationDelay: "2.7s"}}>
                  <animate attributeName="points" values="550,250 600,300 550,350; 545,245 605,305 545,355; 550,250 600,300 550,350" dur="18s" repeatCount="indefinite" />
                </polygon>
              </g>
              
              <g className="animate-float">
                <polygon points="400,500 450,550 400,600" fill="rgba(255,255,255,0.07)" className="animate-pulse-slow" style={{animationDelay: "3.4s"}}>
                  <animate attributeName="points" values="400,500 450,550 400,600; 405,505 455,555 405,605; 400,500 450,550 400,600" dur="22s" repeatCount="indefinite" />
                </polygon>
              </g>
              
              {/* Enhanced Focal Points with Animations */}
              <circle cx="35%" cy="40%" r="3" fill="rgba(255,255,255,0.6)" className="animate-pulse-slow" style={{animationDelay: "0.4s"}}>
                <animate attributeName="r" values="3;4;3" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="7s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="65%" cy="60%" r="3" fill="rgba(255,255,255,0.6)" className="animate-pulse-slow" style={{animationDelay: "1.6s"}}>
                <animate attributeName="r" values="3;4;3" dur="6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="8s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="50%" cy="30%" r="3" fill="rgba(255,255,255,0.6)" className="animate-pulse-slow" style={{animationDelay: "2.8s"}}>
                <animate attributeName="r" values="3;4;3" dur="7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="9s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="45%" cy="70%" r="3" fill="rgba(255,255,255,0.6)" className="animate-pulse-slow" style={{animationDelay: "3.5s"}}>
                <animate attributeName="r" values="3;4;3" dur="8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="10s" repeatCount="indefinite" />
              </circle>
              
              {/* Enhanced Rotating Geometric Elements */}
              <g className="animate-rotate-slow origin-center">
                <polygon points="600,400 650,415 680,455 670,505 630,535 580,520 550,480 560,430" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;20" dur="30s" repeatCount="indefinite" />
                </polygon>
                <polygon points="600,400 680,455 630,535 550,480" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                  <animate attributeName="stroke-opacity" values="0.15;0.25;0.15" dur="10s" repeatCount="indefinite" />
                </polygon>
                <polygon points="600,400 650,415 580,520 560,430" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                  <animate attributeName="stroke-opacity" values="0.15;0.3;0.15" dur="12s" repeatCount="indefinite" />
                </polygon>
                <polygon points="650,415 680,455 630,535 580,520" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                  <animate attributeName="stroke-opacity" values="0.15;0.2;0.15" dur="15s" repeatCount="indefinite" />
                </polygon>
                <polygon points="560,430 550,480 630,535 670,505" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                  <animate attributeName="stroke-opacity" values="0.15;0.25;0.15" dur="14s" repeatCount="indefinite" />
                </polygon>
              </g>
              
              {/* Counter-Rotating Element */}
              <g className="animate-rotate-reverse origin-center">
                <polygon points="400,200 450,215 480,255 470,305 430,335 380,320 350,280 360,230" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,3">
                  <animate attributeName="stroke-dashoffset" values="0;15" dur="25s" repeatCount="indefinite" />
                </polygon>
                <circle cx="415" cy="265" r="4" fill="rgba(255,255,255,0.2)">
                  <animate attributeName="r" values="4;5;4" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>
        
        {/* Updated Background Glow Effects for Triangular Pattern */}
        <div className="absolute top-1/4 left-1/3 h-44 w-44 opacity-50 blur-3xl animate-pulse-glow bg-gradient-to-br from-white/10 to-white/3">
          <div className="absolute inset-0 animate-morph"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 h-64 w-64 opacity-40 blur-3xl animate-pulse-glow bg-gradient-to-tr from-white/10 to-white/3" style={{animationDelay: "2s"}}>
          <div className="absolute inset-0 animate-morph" style={{animationDelay: "1s"}}></div>
        </div>
        <div className="absolute top-2/3 right-1/3 h-32 w-32 opacity-60 blur-3xl animate-pulse-glow bg-gradient-to-br from-white/15 to-white/3" style={{animationDelay: "3.5s"}}>
          <div className="absolute inset-0 animate-morph" style={{animationDelay: "2s"}}></div>
        </div>
        
        {/* Additional Glow Points for Depth with Animation */}
        <div className="absolute top-1/3 left-2/3 h-20 w-20 opacity-50 blur-2xl animate-pulse-glow bg-gradient-to-tl from-white/15 to-transparent" style={{animationDelay: "1.2s"}}>
          <div className="absolute inset-0 animate-float"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 h-24 w-24 opacity-40 blur-2xl animate-pulse-glow bg-gradient-to-tr from-white/10 to-transparent" style={{animationDelay: "2.8s"}}>
          <div className="absolute inset-0 animate-float-x"></div>
        </div>
        
        {/* Triangle Vertex Highlights with Enhanced Animation */}
        <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[2px] animate-pulse-slow">
          <div className="absolute inset-0 animate-float" style={{animationDelay: "0.5s"}}></div>
        </div>
        <div className="absolute top-1/3 left-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[2px] animate-pulse-slow" style={{animationDelay: "0.7s"}}>
          <div className="absolute inset-0 animate-float-x" style={{animationDelay: "1.2s"}}></div>
        </div>
        <div className="absolute top-2/3 right-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[2px] animate-pulse-slow" style={{animationDelay: "1.3s"}}>
          <div className="absolute inset-0 animate-float" style={{animationDelay: "0.8s"}}></div>
        </div>
        <div className="absolute bottom-1/3 right-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[2px] animate-pulse-slow" style={{animationDelay: "2.1s"}}>
          <div className="absolute inset-0 animate-float-x" style={{animationDelay: "1.9s"}}></div>
        </div>
        <div className="absolute top-2/5 right-2/5 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[2px] animate-pulse-slow" style={{animationDelay: "1.1s"}}>
          <div className="absolute inset-0 animate-float" style={{animationDelay: "2.3s"}}></div>
        </div>
        <div className="absolute bottom-2/5 left-2/5 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[2px] animate-pulse-slow" style={{animationDelay: "2.4s"}}>
          <div className="absolute inset-0 animate-float-x" style={{animationDelay: "3.1s"}}></div>
        </div>
        
        {/* Animated Triangular Edge Highlights with Dash Effect */}
        <div className="absolute top-1/4 right-1/3 h-[1px] w-24 rotate-30 bg-white/25 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute bottom-1/3 left-1/4 h-[1px] w-28 -rotate-30 bg-white/25 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "2.7s"}}></div>
        <div className="absolute top-1/2 right-1/4 h-[1px] w-20 rotate-[60deg] bg-white/25 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "3.2s"}}></div>
        <div className="absolute bottom-1/4 right-1/2 h-[1px] w-16 rotate-[120deg] bg-white/25 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "1.8s"}}></div>
        <div className="absolute top-1/3 left-1/4 h-[1px] w-24 rotate-[210deg] bg-white/25 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "0.9s"}}></div>
        <div className="absolute bottom-2/5 right-1/3 h-[1px] w-16 rotate-[150deg] bg-white/25 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "2.2s"}}></div>
        <div className="absolute top-2/5 left-1/3 h-[1px] w-16 rotate-[-30deg] bg-white/25 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "3.7s"}}></div>
        
        {/* Additional Animated Edge Highlights */}
        <div className="absolute top-1/5 right-2/5 h-[1px] w-20 rotate-[15deg] bg-white/20 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "1.2s"}}></div>
        <div className="absolute bottom-1/5 left-2/5 h-[1px] w-24 rotate-[45deg] bg-white/20 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "2.5s"}}></div>
        <div className="absolute top-3/5 right-1/5 h-[1px] w-28 rotate-[75deg] bg-white/20 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "3.3s"}}></div>
        <div className="absolute bottom-3/5 left-1/5 h-[1px] w-20 rotate-[135deg] bg-white/20 blur-[1px] animate-pulse-slow animate-dash" style={{animationDelay: "0.7s"}}></div>
      </div>
      
      <Card className="relative z-10 w-full max-w-md shadow-xl border-border/60 bg-background/95 backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>Enter your email and password to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={`pl-10 ${errors.password ? "border-destructive" : ""}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
