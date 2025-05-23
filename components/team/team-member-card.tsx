"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Briefcase, Github, Laptop, Lightbulb, Linkedin, Twitter } from "lucide-react"
import { ReactNode } from "react"

// Team members data - reduced to 6 key members
export const teamMembers = [
  {
    name: "SABARIVASAN M",
    role: "FRONTEND DEVELOPER",
    bio: "Sabarivasan is an innovative Frontend Developer (927623BAD094) who specializes in creating responsive and interactive user interfaces. He brings a keen eye for design and strong technical expertise to the Workforce Spotlight team.",
    color: "from-teal-500/20 via-transparent to-transparent",
    icon: <Laptop className="h-8 w-8 text-teal-500" />,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "SWATHI B",
    role: "DASHBOARD CREATOR",
    bio: "Swathi (927623BAD115) is a talented Dashboard Creator who excels at transforming complex data into intuitive, interactive dashboards. Her expertise in data visualization helps make workforce insights accessible to all users.",
    color: "from-orange-500/20 via-transparent to-transparent",
    icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "PERIASAMY R M",
    role: "DATA ANALYTICS",
    bio: "Periasamy (927623BAD073) specializes in data analytics and statistical modeling. His expertise in analyzing workforce trends and employment patterns provides crucial insights that drive the platform's predictive capabilities.",
    color: "from-blue-500/20 via-transparent to-transparent",
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
]

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Team member type
type TeamMember = {
  name: string
  role: string
  bio: string
  color: string
  icon: ReactNode
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

// Team Member Card Component
export function TeamMemberCard({ member, index }: { member: TeamMember, index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex flex-col overflow-hidden rounded-xl border bg-background shadow-md"
    >
      <div className="relative">
        {/* Gradient background with member's initials instead of image */}
        <div className={`aspect-[4/3] bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
          {/* Animated background pattern */}
          <motion.div 
            className="absolute inset-0 w-full h-full opacity-10"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,30 Q50,10 90,30 T90,60 T10,90 T10,30" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.25" />
            </svg>
          </motion.div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 w-full h-full">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/30"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5 + 0.2,
                }}
                animate={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          {/* Member's initials */}
          <motion.div 
            className="text-5xl font-bold text-white/90 mix-blend-overlay tracking-wider z-10"
            animate={{
              scale: isHovered ? 1.1 : 1,
              textShadow: isHovered ? "0 0 8px rgba(255,255,255,0.8)" : "0 0 0px rgba(255,255,255,0)"
            }}
            transition={{ duration: 0.3 }}
          >
            {member.name.split(' ').map(word => word[0]).join('')}
          </motion.div>
        </div>
        
        {/* Icon badge */}
        <motion.div 
          className="absolute -bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border bg-background shadow-lg"
          animate={{
            rotate: isHovered ? 360 : 0,
            boxShadow: isHovered ? "0 0 20px rgba(255,255,255,0.3)" : "0 4px 6px rgba(0,0,0,0.1)"
          }}
          transition={{ duration: 0.5 }}
        >
          {member.icon}
        </motion.div>
      </div>
      
      <motion.div 
        className="flex flex-1 flex-col p-6 pt-8 relative"
        animate={{
          backgroundColor: isHovered ? `rgba(${member.color.includes('teal') ? '240,253,250' : member.color.includes('orange') ? '255,247,237' : '239,246,255'},0.2)` : 'transparent'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4">
          <motion.h3 
            className="text-2xl font-bold tracking-tight"
            animate={{ 
              color: isHovered ? `var(--${member.color.includes('teal') ? 'teal' : member.color.includes('orange') ? 'orange' : 'blue'}-600)` : 'var(--foreground)'
            }}
            transition={{ duration: 0.3 }}
          >
            {member.name}
          </motion.h3>
          <p className="text-primary font-medium">{member.role}</p>
        </div>
        
        <p className="flex-1 text-muted-foreground">{member.bio}</p>
        
        <motion.div 
          className="mt-6 flex items-center space-x-4"
          animate={{ 
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0.7
          }}
          transition={{ duration: 0.3 }}
        >
          {member.social.linkedin && (
            <Link 
              href={member.social.linkedin} 
              className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
          {member.social.twitter && (
            <Link 
              href={member.social.twitter} 
              className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
          {member.social.github && (
            <Link 
              href={member.social.github} 
              className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
