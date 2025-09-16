"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Card } from "@/components/ui/card"
import { Typewriter } from "@/components/ui/typewriter"

export function Hero() {
  const [showSubtitle, setShowSubtitle] = React.useState(false)

  return (
    <Section spacing="xl" className="min-h-screen flex items-center">
      <Container>
        <Grid cols={1} gap="lg">
          {/* Header */}
          <div className="space-y-4">
            <Caption>Available for work</Caption>
            <Heading variant="h1">
              <Typewriter 
                text="Anant Kumar Iyer"
                speed={150}
                delay={500}
                onComplete={() => setShowSubtitle(true)}
              />
            </Heading>
            {showSubtitle && (
              <Text variant="body" className="text-muted-foreground max-w-2xl">
                <Typewriter 
                  text="Full-stack developer crafting digital experiences with modern technologies. Specializing in React, Next.js, and scalable web applications."
                  speed={30}
                  delay={1000}
                />
              </Text>
            )}
          </div>

          {/* Quick Stats */}
          <Grid cols={3} gap="md" className="mt-12">
            <Card variant="minimal" padding="sm" className="text-center">
              <Text variant="small" className="text-muted-foreground">Experience</Text>
              <Text variant="h6">5+ Years</Text>
            </Card>
            <Card variant="minimal" padding="sm" className="text-center">
              <Text variant="small" className="text-muted-foreground">Projects</Text>
              <Text variant="h6">50+</Text>
            </Card>
            <Card variant="minimal" padding="sm" className="text-center">
              <Text variant="small" className="text-muted-foreground">Technologies</Text>
              <Text variant="h6">15+</Text>
            </Card>
          </Grid>

          {/* Contact CTA */}
          <Card variant="outlined" padding="md" className="mt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Text variant="small" className="text-muted-foreground mb-1">
                  Let&apos;s work together
                </Text>
                <Text variant="body">
                  <a href="mailto:anant.k.iyer@outlook.com" className="hover:text-muted-foreground transition-colors">
                    anant.k.iyer@outlook.com
                  </a>
                </Text>
              </div>
              <div className="flex gap-4">
                <a 
                  href="/projects" 
                  className="text-sm font-mono border-b border-transparent hover:border-current transition-colors"
                >
                  View Work
                </a>
                <a 
                  href="/contact" 
                  className="text-sm font-mono border-b border-transparent hover:border-current transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </Card>
        </Grid>
      </Container>
    </Section>
  )
}
