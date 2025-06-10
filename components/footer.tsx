import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/johndoe" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/johndoe" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/johndoe" },
]

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.url} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.name}</span>
              </a>
            </Link>
          ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="text-xs mt-1">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  )
}
