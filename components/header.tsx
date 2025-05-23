"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Define navigation items
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/dashboard", label: "Dashboard" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center space-x-2">
          <div className="relative w-8 h-8 transition-all duration-300 text-primary group-hover:text-primary/80">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Circle background */}
              <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.1" />
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
              
              {/* W letter */}
              <path d="M8 10L10.5 22H12.5L14 14L15.5 22H17.5L20 10H18L16.25 19L14.75 10H13.25L11.75 19L10 10H8Z" fill="currentColor" />
              
              {/* S letter */}
              <path d="M24 13.5C24 11.567 22.433 10 20.5 10H19C17.067 10 15.5 11.567 15.5 13.5C15.5 15.433 17.067 17 19 17H21C21.827 17 22.5 17.673 22.5 18.5C22.5 19.327 21.827 20 21 20H19.5C18.673 20 18 19.327 18 18.5H15.5C15.5 20.433 17.067 22 19 22H20.5C22.433 22 24 20.433 24 18.5C24 16.567 22.433 15 20.5 15H18.5C17.673 15 17 14.327 17 13.5C17 12.673 17.673 12 18.5 12H20C20.827 12 21.5 12.673 21.5 13.5H24Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary">
            Workforce Spotlight
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                    pathname === item.href 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/logout"
                className="group relative overflow-hidden rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <Link 
              href="/login"
              className="group relative overflow-hidden rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg animate-in slide-in-from-right">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-6 h-6 text-primary">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Circle background */}
                    <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.1" />
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
                    
                    {/* W letter */}
                    <path d="M8 10L10.5 22H12.5L14 14L15.5 22H17.5L20 10H18L16.25 19L14.75 10H13.25L11.75 19L10 10H8Z" fill="currentColor" />
                    
                    {/* S letter */}
                    <path d="M24 13.5C24 11.567 22.433 10 20.5 10H19C17.067 10 15.5 11.567 15.5 13.5C15.5 15.433 17.067 17 19 17H21C21.827 17 22.5 17.673 22.5 18.5C22.5 19.327 21.827 20 21 20H19.5C18.673 20 18 19.327 18 18.5H15.5C15.5 20.433 17.067 22 19 22H20.5C22.433 22 24 20.433 24 18.5C24 16.567 22.433 15 20.5 15H18.5C17.673 15 17 14.327 17 13.5C17 12.673 17.673 12 18.5 12H20C20.827 12 21.5 12.673 21.5 13.5H24Z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Workforce Spotlight
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {isAuthenticated ? (
                <>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-all duration-300 hover:text-primary ${
                        pathname === item.href 
                          ? "text-primary font-semibold" 
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link 
                      href="/logout"
                      className="w-full inline-flex justify-center items-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Out
                    </Link>
                  </div>
                </>
              ) : (
                <div className="mt-4 pt-4 border-t border-border">
                  <Link 
                    href="/login"
                    className="w-full inline-flex justify-center items-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
