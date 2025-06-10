"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import { personalInfo } from "@/lib/data"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/10 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: Math.random() * 1 + 0.5,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              opacity: [0, 0.3, 0],
              scale: Math.random() * 1.5 + 0.5,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedText
            text={`Hi, I'm ${personalInfo.name}`}
            el="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
            stagger={0.05}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatedText
            text={personalInfo.title}
            el="p"
            className="text-xl sm:text-2xl md:text-3xl text-primary mb-8"
            stagger={0.02}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-4"
        >
          <Button asChild size="lg" className="group">
            <Link href="#projects" onClick={scrollToProjects}>
              View My Work <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href="/CV.pdf" download="CV.pdf">
              {" "}
              {/* Replace with actual resume path */}
              Download CV <Download className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
      </motion.div>
    </section>
  )
}
