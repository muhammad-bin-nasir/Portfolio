"use client"

import SectionWrapper from "@/components/section-wrapper"
import AnimatedText from "@/components/animated-text"
import { experiences } from "@/lib/data"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react" // Default icon

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-muted/30">
      <AnimatedText
        text="My Journey"
        el="h2"
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
      />
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden sm:block"></div>

        {experiences.map((exp, index) => {
          const IconComponent = exp.icon || Briefcase
          const isLeft = index % 2 === 0
          return (
            <motion.div
              key={exp.id}
              className={`mb-10 flex items-start ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Icon and Dot */}
              <div className={`relative flex-shrink-0 ${isLeft ? "sm:mr-8" : "sm:ml-8"} sm:self-center`}>
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 sm:hidden"></div>{" "}
                {/* Mobile line */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground z-10 relative border-4 border-background">
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`ml-8 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] bg-card p-6 rounded-lg shadow-lg border border-border hover:border-primary/50 transition-colors duration-300`}
              >
                <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                <p className="text-md text-primary mb-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
