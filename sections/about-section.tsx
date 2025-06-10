"use client"

import SectionWrapper from "@/components/section-wrapper"
import AnimatedText from "@/components/animated-text"
import { personalInfo } from "@/lib/data"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-md mx-auto aspect-square"
        >
          <Image
            src="/placeholder.svg?width=500&height=500"
            alt={personalInfo.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
          <motion.div
            className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-lg -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>
        <div>
          <AnimatedText text="About Me" el="h2" className="text-3xl sm:text-4xl font-bold mb-6 text-primary" />
          <motion.p
            className="text-lg text-foreground/80 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {personalInfo.bio}
          </motion.p>
          <motion.p
            className="text-lg text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes, or diving
            into a good sci-fi novel.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  )
}
