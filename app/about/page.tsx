import Image from "next/image"
import { ArrowRight, Award, Building2, Globe, Heart, Lightbulb, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WelcomeAlert } from "@/components/welcome-alert"
import { QuickNavSection } from "@/components/quick-nav-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-muted/50 animate-gradient" />
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute inset-0 bg-gradient-radial opacity-20 animate-pulse-slow" />
        <div className="container relative px-4 md:px-6">
          <WelcomeAlert />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all-500 hover:bg-muted glass animate-float">
                  <span className="text-primary animate-pulse-slow">🏢</span>
                  <span className="ml-2">About Us</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 animate-gradient">
                  Building the Future of Work
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed animate-fade-in delay-200">
                  We're on a mission to revolutionize how people navigate their careers, powered by data-driven insights and a supportive community.
                </p>
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0 animate-slide-up">
              <div className="relative aspect-square w-full max-w-[550px] rounded-2xl overflow-hidden shadow-2xl glass animate-float">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  fill
                  alt="About Workforce Spotlight"
                  className="object-cover transition-all-500 hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-radial opacity-20 animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
        <div className="container relative px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all-500 hover:bg-muted glass animate-float">
              <span className="text-primary animate-pulse-slow">🚀</span>
              <span className="ml-2">Our Mission</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">Empowering Career Growth Through Data</h2>
            <p className="mt-4 text-muted-foreground">
              At Workforce Spotlight, we believe that everyone deserves access to meaningful career insights and opportunities.
              Our platform combines advanced data analytics with a user-friendly experience to help professionals
              at every stage of their career journey.
            </p>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Global Reach</CardTitle>
                  <CardDescription>
                    Connecting professionals across industries and borders with targeted opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Data-Driven Insight</CardTitle>
                  <CardDescription>
                    Leveraging the latest in labor market analytics to provide actionable career guidance.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Community Focus</CardTitle>
                  <CardDescription>
                    Building a supportive environment where professionals can learn, grow, and connect.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section (will only appear for logged in users) */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="container relative px-4 md:px-6">
          <QuickNavSection />
        </div>
      </section>
    </div>
  )
}
