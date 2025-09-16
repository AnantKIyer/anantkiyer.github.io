"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Card } from "@/components/ui/card"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const contactInfo = [
  {
    label: "Email",
    value: "anant.k.iyer@outlook.com",
    href: "mailto:anant.k.iyer@outlook.com"
  },
  {
    label: "Location", 
    value: "Bangalore, KA",
    href: null
  },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/AnantKIyer" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anant-iyer" },
  { label: "Twitter", href: "https://twitter.com/" }
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    form.reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <Section spacing="lg">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Caption>Get in Touch</Caption>
            <Heading variant="h2">Contact</Heading>
            <Text variant="body" className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let&apos;s discuss how we can work together 
              to bring your ideas to life.
            </Text>
          </div>

          <Grid cols={2} gap="lg">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <Card variant="outlined" padding="lg">
                  <div className="text-center space-y-4">
                    <Text variant="h6">Message Sent</Text>
                    <Text variant="body" className="text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </Text>
                  </div>
                </Card>
              ) : (
                <Card variant="outlined" padding="lg">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-mono text-muted-foreground block mb-2">
                          Name *
                        </label>
                        <input
                          {...form.register("name")}
                          className="w-full border border-border bg-transparent p-3 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="Your name"
                        />
                        {form.formState.errors.name && (
                          <Text variant="small" className="text-red-500 mt-1">
                            {form.formState.errors.name.message}
                          </Text>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-mono text-muted-foreground block mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          {...form.register("email")}
                          className="w-full border border-border bg-transparent p-3 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="your.email@example.com"
                        />
                        {form.formState.errors.email && (
                          <Text variant="small" className="text-red-500 mt-1">
                            {form.formState.errors.email.message}
                          </Text>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-mono text-muted-foreground block mb-2">
                        Subject *
                      </label>
                      <input
                        {...form.register("subject")}
                        className="w-full border border-border bg-transparent p-3 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="What's this about?"
                      />
                      {form.formState.errors.subject && (
                        <Text variant="small" className="text-red-500 mt-1">
                          {form.formState.errors.subject.message}
                        </Text>
                      )}
                    </div>
                    
                    <div>
                      <label className="text-sm font-mono text-muted-foreground block mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={6}
                        {...form.register("message")}
                        className="w-full border border-border bg-transparent p-3 font-mono text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                        placeholder="Tell me about your project or just say hello..."
                      />
                      {form.formState.errors.message && (
                        <Text variant="small" className="text-red-500 mt-1">
                          {form.formState.errors.message.message}
                        </Text>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border border-border p-3 font-mono text-sm hover:bg-muted/50 disabled:opacity-50 transition-colors"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card variant="outlined" padding="lg">
                <div className="space-y-4">
                  <Text variant="h6">Contact Info</Text>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index}>
                        <Text variant="small" className="text-muted-foreground mb-1">
                          {info.label}
                        </Text>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-mono hover:text-muted-foreground transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <Text variant="small">{info.value}</Text>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card variant="outlined" padding="lg">
                <div className="space-y-4">
                  <Text variant="h6">Social</Text>
                  <div className="space-y-2">
                    {socialLinks.map((social, index) => (
                      <div key={index}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono hover:text-muted-foreground transition-colors"
                        >
                          {social.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Response Time */}
              <Card variant="outlined" padding="lg">
                <div className="space-y-2">
                  <Text variant="small" className="text-muted-foreground">
                    Response Time
                  </Text>
                  <Text variant="small">
                    I typically respond within 24 hours.
                  </Text>
                </div>
              </Card>
            </div>
          </Grid>
        </div>
      </Container>
    </Section>
  )
}
