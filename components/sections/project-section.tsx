"use client"

import SectionWrapper from "@/components/section-wrapper"
import AnimatedText from "@/components/animated-text"
import { projects } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-muted/30">
      <AnimatedText
        text="My Projects"
        el="h2"
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
      />
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
