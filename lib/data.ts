import { Github, Linkedin, Twitter, Briefcase, Lightbulb, Code2, BarChart3, Users, Palette } from "lucide-react"

export const personalInfo = {
  name: "John Doe",
  title: "Software Engineer & Creative Developer",
  email: "john.doe@example.com",
  phone: "+1 123 456 7890",
  location: "San Francisco, CA",
  socials: [
    { name: "GitHub", url: "https://github.com/johndoe", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/johndoe", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com/johndoe", icon: Twitter },
  ],
  bio: "I'm a passionate software engineer with a knack for creating elegant and efficient solutions. With a strong foundation in full-stack development and a love for beautiful UIs, I strive to build applications that are not only functional but also delightful to use. Always eager to learn new technologies and take on challenging projects.",
  shortBio:
    "Crafting digital experiences, one line of code at a time. Full-stack developer with a passion for UI/UX and problem-solving.",
}

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with admin dashboard, payment integration, and advanced product filtering. Built for scalability and performance.",
    image: "/placeholder.svg?width=600&height=400",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Project Management Tool",
    description:
      "A collaborative project management tool with features like task tracking, team communication, and progress visualization. Real-time updates using WebSockets.",
    image: "/placeholder.svg?width=600&height=400",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "#",
    repoUrl: "#",
    icon: Users,
  },
  {
    id: 3,
    title: "Personal Portfolio V2",
    description:
      "This very portfolio website, designed to showcase my skills and projects with a modern and interactive user experience. Features animations and a clean design.",
    image: "/placeholder.svg?width=600&height=400",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
    icon: Palette,
  },
  {
    id: 4,
    title: "AI Powered Code Assistant",
    description:
      "An intelligent code assistant that provides suggestions, autocompletes snippets, and helps debug code using advanced AI models.",
    image: "/placeholder.svg?width=600&height=400",
    tags: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
    icon: Code2,
  },
]

export const skills = [
  { name: "JavaScript", level: 95, icon: "/placeholder.svg?width=48&height=48" },
  { name: "TypeScript", level: 90, icon: "/placeholder.svg?width=48&height=48" },
  { name: "React", level: 95, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Next.js", level: 90, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Node.js", level: 85, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Python", level: 80, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Tailwind CSS", level: 95, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Framer Motion", level: 75, icon: "/placeholder.svg?width=48&height=48" },
  { name: "SQL (PostgreSQL)", level: 80, icon: "/placeholder.svg?width=48&height=48" },
  { name: "NoSQL (MongoDB)", level: 70, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Git & GitHub", level: 90, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Docker", level: 75, icon: "/placeholder.svg?width=48&height=48" },
]

export const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Led a team of 5 developers in building scalable web applications. Architected and implemented microservices. Improved system performance by 30%. Mentored junior engineers.",
    icon: Briefcase,
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Innovate Hub",
    period: "2019 - 2021",
    description:
      "Developed and maintained client-facing applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software. Contributed to UI/UX design.",
    icon: Lightbulb,
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "Startup X",
    period: "Summer 2018",
    description:
      "Assisted in the development of a new mobile application. Gained experience in agile methodologies and version control systems. Wrote unit tests and documentation.",
    icon: Code2,
  },
]
