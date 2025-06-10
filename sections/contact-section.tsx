"use client"

import SectionWrapper from "@/components/section-wrapper"
import AnimatedText from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { personalInfo } from "@/lib/data"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>

export default function ContactSection() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(data)
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    reset()
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <SectionWrapper id="contact">
      <AnimatedText
        text="Get In Touch"
        el="h2"
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
      />
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-6">
          <AnimatedText text="Let's Connect!" el="h3" className="text-2xl font-semibold mb-4" />
          <motion.p custom={0} variants={inputVariants} className="text-foreground/80 leading-relaxed">
            I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to
            reach out using the form or connect with me through my social channels.
          </motion.p>

          <motion.div custom={1} variants={inputVariants} className="space-y-3">
            <Link
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>{personalInfo.email}</span>
            </Link>
            {personalInfo.phone && (
              <Link
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>{personalInfo.phone}</span>
              </Link>
            )}
            <div className="flex items-center gap-3 text-foreground/80">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.div custom={2} variants={inputVariants} className="flex space-x-4 mt-4">
            {personalInfo.socials.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="icon"
                asChild
                className="hover:border-primary hover:text-primary"
              >
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div custom={0} variants={inputVariants}>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} placeholder="Your Name" />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </motion.div>
          <motion.div custom={1} variants={inputVariants}>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
          </motion.div>
          <motion.div custom={2} variants={inputVariants}>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" {...register("message")} placeholder="Your message here..." rows={5} />
            {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
          </motion.div>
          <motion.div custom={3} variants={inputVariants}>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
