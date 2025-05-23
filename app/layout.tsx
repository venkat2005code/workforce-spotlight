import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/contexts/auth-context"
import { RouteGuard } from "@/components/route-guard"
import { PageTransition } from "@/components/page-transition"
import { NavActionButtons } from "@/components/nav-action-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Workforce Spotlight",
  description: "Empowering career growth through data-driven insights",
  icons: {
    icon: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <RouteGuard>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                  <PageTransition>{children}</PageTransition>
                </main>
                <Footer />
                <NavActionButtons />
              </div>
            </RouteGuard>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
