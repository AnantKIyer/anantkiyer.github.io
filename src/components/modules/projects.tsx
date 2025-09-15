"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Typewriter } from "@/components/ui/typewriter"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    status: "Completed",
    category: "Full Stack"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, team collaboration, and project tracking.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    status: "Completed", 
    category: "Full Stack"
  },
  {
    title: "Weather Dashboard",
    description: "Responsive weather application with location-based forecasts, interactive maps, and data visualization.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    status: "Completed",
    category: "Frontend"
  },
  {
    title: "Social Analytics",
    description: "Analytics dashboard for social media metrics with real-time data visualization and reporting.",
    technologies: ["Vue.js", "D3.js", "Express", "Redis", "PostgreSQL"],
    status: "In Progress",
    category: "Full Stack"
  },
  {
    title: "Banking App",
    description: "Cross-platform mobile banking application with secure authentication and transaction management.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    status: "Completed",
    category: "Mobile"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio with smooth animations, dark mode, and optimized performance.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    status: "Completed",
    category: "Frontend"
  }
]

export function Projects() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Caption>Selected Work</Caption>
            <Heading variant="h2">
              <Typewriter 
                text="Projects & Experiments"
                speed={100}
                delay={6000}
              />
            </Heading>
            <Text variant="body" className="text-muted-foreground max-w-2xl mx-auto">
              <Typewriter 
                text="A collection of projects showcasing my expertise in modern web development and problem-solving approach."
                speed={25}
                delay={8000}
              />
            </Text>
          </div>

          <Grid cols={2} gap="lg">
            {projects.map((project, index) => (
              <Card key={index} variant="outlined" padding="lg" hover>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Text variant="h6">{project.title}</Text>
                      <Caption>{project.category}</Caption>
                    </div>
                    <div className="text-right">
                      <Text variant="small" className="text-muted-foreground">
                        {project.status}
                      </Text>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Text variant="body" className="text-muted-foreground mb-4">
                    {project.description}
                  </Text>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-mono px-2 py-1 bg-muted/50 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="text-sm font-mono border-b border-transparent hover:border-current transition-colors"
                    >
                      View Project
                    </a>
                    <a 
                      href="#" 
                      className="text-sm font-mono border-b border-transparent hover:border-current transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  )
}
