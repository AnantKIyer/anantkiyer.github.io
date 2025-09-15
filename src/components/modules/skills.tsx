"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Card } from "@/components/ui/card"
import { Typewriter } from "@/components/ui/typewriter"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma"]
  }
]

export function Skills() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Caption>Technical Expertise</Caption>
            <Heading variant="h2">
              <Typewriter 
                text="Skills & Technologies"
                speed={100}
                delay={2000}
              />
            </Heading>
            <Text variant="body" className="text-muted-foreground max-w-2xl mx-auto">
              <Typewriter 
                text="A comprehensive toolkit for building modern, scalable applications across the full stack."
                speed={25}
                delay={4000}
              />
            </Text>
          </div>

          <Grid cols={3} gap="lg">
            {skillCategories.map((category, index) => (
              <Card key={index} variant="outlined" padding="lg" hover>
                <div className="space-y-4">
                  <Text variant="h6">{category.title}</Text>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <Text variant="small">{skill}</Text>
                        <div className="w-8 h-px bg-border"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  )
}
