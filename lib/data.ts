import { Github, Linkedin, Twitter, Briefcase, Lightbulb, Code2, BarChart3, Users, Palette } from "lucide-react"

export const personalInfo = {
  name: "Muhammad Bin Nasir",
  title: "AI Developer & Cybersecurity Enthusiast",
  email: "muhammadbn727@gmail.com",
  phone: "+92 312 6182358",
  location: "Rawalpindi, Pakistan",
  socials: [
    { name: "GitHub", url: "https://github.com/muhammad-bin-nasir", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/muhammad-bin-nasir", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com/Muhammad", icon: Twitter },
  ],
  bio: "I am a third-year Computer Science student with a strong focus on statistical computing and data analysis. Through rigorous coursework in algorithms, machine learning, and advanced mathematics, I've developed a robust foundation for tackling complex data challenges. I have worked on projects such as implementing neural networks from scratch and developing predictive models for real-world datasets, demonstrating both technical proficiency and practical problem-solving abilities. With a strong passion for Data Science, I aim to pursue an MS degree to deepen my expertise in areas such as deep learning and big data analytics. My combination of academic excellence, hands-on project experience, and commitment to data-driven innovation positions me to make meaningful contributions to the industry.",
  shortBio:
    "Crafting digital experiences, one line of code at a time. Focused on AI driven solutions..",
}

export const projects = [
  {
    id: 1,
  title: "Automated Quiz Generator",
  description:
    "A C++ application that dynamically generates quizzes from a question bank based on subject and difficulty. Supports student login, quiz attempts, and PDF export using hpdf.",
  image: "/placeholder.svg?width=600&height=400",
  tags: ["C++", "Data Structures", "hpdf", "File Handling"],
  liveUrl: "#",
  repoUrl: "#",
  icon: 'BookOpenCheck',
  },
  {
    id: 2,
  title: "Library Management System",
  description:
    "A web-based solution to manage books, track lending, and handle admin operations with login authentication. Developed using the LAMP stack and served via XAMPP.",
  image: "/placeholder.svg?width=600&height=400",
  tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
  liveUrl: "#",
  repoUrl: "#",
  icon: Users,
  },
  {
    id: 3,
  title: "Class Management CLI",
  description:
    "A Python command-line interface that manages student records, attendance, and grading using CSV files. Features a dual interface for admin and student roles.",
  image: "/placeholder.svg?width=600&height=400",
  tags: ["Python", "CLI", "CSV", "File Handling"],
  liveUrl: "#",
  repoUrl: "#",
  icon: 'ClipboardList',
  },
  {
    id: 5,
  title: "AI Notes Summarizer (Desktop)",
  description:
    "An OCR-powered desktop application that extracts and summarizes text from typed and handwritten notes. Utilizes OpenCV for image processing and a custom AI model for summarization.",
  image: "/placeholder.svg?width=600&height=400",
  tags: ["Python", "OpenCV", "OCR", "AI", "NLP"],
  liveUrl: "#",
  repoUrl: "#",
  icon: 'FileText',
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
  { name: "Kotlin and XML", level: 75, icon: "/placeholder.svg?width=48&height=48" },
  { name: "SQL (MySQL)", level: 80, icon: "/placeholder.svg?width=48&height=48" },
  { name: "NoSQL (MongoDB)", level: 70, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Git & GitHub", level: 90, icon: "/placeholder.svg?width=48&height=48" },
  { name: "Docker", level: 75, icon: "/placeholder.svg?width=48&height=48" },
]

export const experiences = [
  {
    id: 1,
    role: "Cyber Security Intern",
    company: "Confidential Firm",
    period: "Feb 2025 – Present",
    description:
      "Worked on secure file sharing protocols and network-level threat assessment. Configured local servers using Rebex Tiny Server and developed C# scripts to monitor file transfers.",
    icon: Users,
  },
  {
    id: 2,
    role: "Cyber Security Trainee",
    company: "Dynamic Leo",
    period: "Jan 2025 – Feb 2025",
    description:
      "Completed hands-on training in ethical hacking, reconnaissance techniques, and vulnerability scanning. Gained foundational skills in penetration testing and OSINT tools.",
    icon: Users,
  },
  {
    id: 3,
    role: "Game Theory & AI Research Intern",
    company: "Digital Empowerment Network",
    period: "Aug 2024 – Oct 2024",
    description:
      "Developed an AI-based Red-Blue Nim game with standard and misère logic. Designed a winning-strategy computer player using combinatorial game theory.",
    icon: Users,
  },
  {
    id: 4,
    role: "Independent Developer",
    company: "Freelance / Academic Projects",
    period: "2023 – Present",
    description:
      "Built various systems including quiz generators, library managers, and AI-based note summarizers. Focused on full-stack development, data structures, and real-world problem solving.",
    icon: Users,
  },
]

