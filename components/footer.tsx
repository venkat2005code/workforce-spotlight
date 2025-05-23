"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Explore", href: "/explore" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="container relative py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Workforce Spotlight
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering professionals with insights and opportunities in the global workforce.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold">Navigation</h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-all duration-500 hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Connect</h3>
              <ul className="mt-4 flex space-x-6">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-all duration-500 hover:text-foreground"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Workforce Spotlight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
