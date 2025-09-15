"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const contactInfo = [
  {
    label: "EMAIL",
    value: "anant@example.com",
    href: "mailto:anant@example.com"
  },
  {
    label: "LOCATION", 
    value: "SAN FRANCISCO, CA",
    href: null
  },
  {
    label: "PHONE",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  }
]

const socialLinks = [
  {
    label: "GITHUB",
    href: "https://github.com/anantkiyer"
  },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/anantkiyer"
  },
  {
    label: "TWITTER", 
    href: "https://twitter.com/anantkiyer"
  }
]

export default function Contact() {
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
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-2xl font-mono mb-2">CONTACT</h1>
          <div className="text-sm text-muted-foreground font-mono">
            GET IN TOUCH
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="minimal-border p-6">
                <div className="text-sm font-mono mb-2">MESSAGE SENT</div>
                <div className="text-xs font-mono text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </div>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground block mb-2">
                      NAME *
                    </label>
                    <input
                      {...form.register("name")}
                      className="w-full minimal-border p-3 bg-transparent font-mono text-sm focus:outline-none"
                      placeholder="Your name"
                    />
                    {form.formState.errors.name && (
                      <div className="text-xs font-mono text-red-500 mt-1">
                        {form.formState.errors.name.message}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted-foreground block mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      {...form.register("email")}
                      className="w-full minimal-border p-3 bg-transparent font-mono text-sm focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                    {form.formState.errors.email && (
                      <div className="text-xs font-mono text-red-500 mt-1">
                        {form.formState.errors.email.message}
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-mono text-muted-foreground block mb-2">
                    SUBJECT *
                  </label>
                  <input
                    {...form.register("subject")}
                    className="w-full minimal-border p-3 bg-transparent font-mono text-sm focus:outline-none"
                    placeholder="What&apos;s this about?"
                  />
                  {form.formState.errors.subject && (
                    <div className="text-xs font-mono text-red-500 mt-1">
                      {form.formState.errors.subject.message}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="text-xs font-mono text-muted-foreground block mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={6}
                    {...form.register("message")}
                    className="w-full minimal-border p-3 bg-transparent font-mono text-sm focus:outline-none resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {form.formState.errors.message && (
                    <div className="text-xs font-mono text-red-500 mt-1">
                      {form.formState.errors.message.message}
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="minimal-border p-3 w-full font-mono text-sm minimal-hover disabled:opacity-50"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-4">CONTACT INFO</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="minimal-border p-4">
                    <div className="text-xs font-mono text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-mono minimal-hover p-1 -m-1"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm font-mono">{info.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-4">SOCIAL</h2>
              <div className="space-y-2">
                {socialLinks.map((social, index) => (
                  <div key={index}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono minimal-hover p-2 -m-2 block"
                    >
                      {social.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="minimal-border p-4">
              <div className="text-xs font-mono text-muted-foreground mb-2">
                RESPONSE TIME
              </div>
              <div className="text-sm font-mono">
                I typically respond within 24 hours.
              </div>
            </div>
          </div>
        </div>

        {/* Dashes Pattern */}
        <div className="mt-16 space-y-1">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="text-muted-foreground font-mono">
              {Array.from({ length: i + 1 }, () => '-').join('')}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}