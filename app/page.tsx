import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Lightbulb, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background px-4 py-20 text-center">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-8 inline-flex animate-fade-in items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
            <span className="mr-2">✨</span>
            <span className="font-medium">Welcome to Workforce Spotlight</span>
          </div>
          <h1 className="mb-6 animate-fade-in text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Career Path
              </span>
              <span className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl" />
            </span>
          </h1>
          <p className="mb-8 animate-fade-in text-lg text-muted-foreground sm:text-xl">
            Explore career opportunities, track industry trends, and make informed decisions about your professional future.
          </p>
          <div className="flex animate-fade-in flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group relative overflow-hidden rounded-lg bg-primary px-8 py-6 text-lg font-medium text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              <Link href="/login">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group relative overflow-hidden rounded-lg border-2 px-8 py-6 text-lg font-medium transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:bg-primary/5">
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features for Your Career Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to navigate your professional path with confidence
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group relative overflow-hidden border-2 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 text-muted-foreground">
                    <p>{feature.additionalText}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Career?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Join thousands of professionals who are already using Workforce Spotlight to advance their careers.
          </p>
          <Button asChild size="lg" className="group relative overflow-hidden rounded-lg bg-primary-foreground px-8 py-6 text-lg font-medium text-primary transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary-foreground/25">
            <Link href="/login">
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Career Insights",
    description: "Get detailed insights into career paths, salary trends, and required skills.",
    icon: BarChart3,
    additionalText: "Access detailed analytics and reports on career progression and industry demand.",
  },
  {
    title: "Global Opportunities",
    description: "Discover job opportunities and career paths across different regions and industries.",
    icon: Globe,
    additionalText: "Explore international job markets and understand regional career trends.",
  },
  {
    title: "Skill Development",
    description: "Identify key skills needed for your desired career path and track your progress.",
    icon: Lightbulb,
    additionalText: "Follow personalized skill-building roadmaps tailored to your career goals.",
  },
  {
    title: "Community Support",
    description: "Connect with professionals and get guidance from industry experts.",
    icon: Users,
    additionalText: "Participate in mentorship programs and networking events with industry leaders.",
  },
]
