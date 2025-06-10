"use client"

import SectionWrapper from "@/components/section-wrapper"
import AnimatedText from "@/components/animated-text"
import { skills } from "@/lib/data"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  }),
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <AnimatedText
        text="My Skills"
        el="h2"
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            variants={skillItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group"
          >
            <Card className="text-center p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-105">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-2 transition-transform duration-300 group-hover:scale-110">
                  {typeof skill.icon === "function" ? (
                    <skill.icon className="w-full h-full text-primary" />
                  ) : (
                    <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} layout="fill" objectFit="contain" />
                  )}
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground/90">{skill.name}</p>
                <div className="w-full bg-muted rounded-full h-1.5 sm:h-2 mt-2 overflow-hidden">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.05 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
