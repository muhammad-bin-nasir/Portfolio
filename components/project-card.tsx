"use client"

import type React from "react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    liveUrl?: string
    repoUrl?: string
    icon?: React.ElementType
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ProjectIcon = project.icon
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
        <CardHeader className="relative p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
              {ProjectIcon && <ProjectIcon className="w-6 h-6 text-primary" />}
              {project.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-foreground/80 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 border-t flex justify-end space-x-2">
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
