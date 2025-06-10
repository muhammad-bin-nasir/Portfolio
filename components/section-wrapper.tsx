"use client"

import { motion, type Variants } from "framer-motion"
import type React from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-24 container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  )
}
