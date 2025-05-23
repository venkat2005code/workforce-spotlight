"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import team data
import { teamMembers, TeamMemberCard } from "@/components/team/team-member-card"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

export default function TeamPageContent() {
  // Animation for the section headers
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container relative z-10 px-4 md:px-6"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Our Core Team
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Small Team, Big Impact
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 text-lg text-muted-foreground md:text-xl"
            >
              Our team of dedicated professionals brings together diverse expertise in data science, 
              product development, and workforce analytics to empower career growth worldwide.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Team Members Grid */}
      <section ref={sectionRef} className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-12"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Banner */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border shadow-lg"
          >
            <div className="absolute inset-0 bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.03]" />
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 p-8 text-center md:flex-row md:p-12 md:text-left lg:p-16">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Explore Workforce Analytics</h2>
                <p className="mt-4 text-muted-foreground">
                  Access interactive dashboards and in-depth analytics to gain insights 
                  into current workforce trends and career opportunities.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Link href="/dashboard">
                  <Button size="lg" className="group transition-all duration-300 hover:bg-primary/90 hover:shadow-lg">
                    Go to Dashboard
                    <motion.span 
                      className="ml-2"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, 15, 0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                    >
                      📊
                    </motion.span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
