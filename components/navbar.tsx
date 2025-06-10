"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" passHref legacyBehavior>
            <a
              onClick={(e) => scrollToSection(e, "#hero")}
              className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              <Code className="w-7 h-7" />
              <span>JohnDoe</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref legacyBehavior>
                <a
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden pb-4"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref legacyBehavior>
                <a
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
