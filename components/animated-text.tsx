"use client"

import { motion, type Variants } from "framer-motion"
import type { JSX } from "react" // Import JSX to fix the undeclared variable error

interface AnimatedTextProps {
  text: string
  el?: keyof JSX.IntrinsicElements
  className?: string
  stagger?: number
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function AnimatedText({ text, el: Wrapper = "p", className, stagger = 0.03 }: AnimatedTextProps) {
  const containerVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  }

  return (
    <Wrapper className={className}>
      <motion.span className="sr-only" initial="hidden" animate="visible" variants={containerVariants} aria-hidden>
        {text}
      </motion.span>
      <motion.span initial="hidden" animate="visible" variants={containerVariants} aria-hidden>
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={defaultVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
