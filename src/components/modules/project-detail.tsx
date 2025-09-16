"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Typewriter } from "@/components/ui/typewriter"
import { Project } from "@/data/projects"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [showContent, setShowContent] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="min-h-screen flex items-center">
        <Container>
          <div className="space-y-8">
            {/* Back Navigation */}
            <div className="flex items-center gap-4">
              <Link 
                href="/projects" 
                className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Projects
              </Link>
              <div className="h-px bg-border flex-1"></div>
            </div>

            {/* Project Header */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Caption>{project.category} • {project.year}</Caption>
                <Heading variant="h1">
                  <Typewriter 
                    text={project.title}
                    speed={100}
                    delay={500}
                    onComplete={() => setShowContent(true)}
                  />
                </Heading>
                {showContent && (
                  <Text variant="body" className="text-muted-foreground max-w-3xl">
                    <Typewriter 
                      text={project.longDescription}
                      speed={20}
                      delay={2000}
                    />
                  </Text>
                )}
              </div>

              {/* Project Meta */}
              <Grid cols={4} gap="md">
                <Card variant="outlined" padding="sm" className="text-center">
                  <Text variant="small" className="text-muted-foreground">Duration</Text>
                  <Text variant="body" className="font-medium">{project.duration}</Text>
                </Card>
                <Card variant="outlined" padding="sm" className="text-center">
                  <Text variant="small" className="text-muted-foreground">Team Size</Text>
                  <Text variant="body" className="font-medium">{project.teamSize} people</Text>
                </Card>
                <Card variant="outlined" padding="sm" className="text-center">
                  <Text variant="small" className="text-muted-foreground">Role</Text>
                  <Text variant="body" className="font-medium">{project.role}</Text>
                </Card>
                <Card variant="outlined" padding="sm" className="text-center">
                  <Text variant="small" className="text-muted-foreground">Status</Text>
                  <Text variant="body" className="font-medium">{project.status}</Text>
                </Card>
              </Grid>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border px-6 py-3 font-mono text-sm hover:bg-muted/50 transition-colors"
                  >
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border px-6 py-3 font-mono text-sm hover:bg-muted/50 transition-colors"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Technologies */}
      <Section spacing="lg">
        <Container>
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heading variant="h3">Technologies Used</Heading>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 border border-border bg-muted/30 font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section spacing="lg">
        <Container>
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heading variant="h3">Key Features</Heading>
            </div>
            <Grid cols={2} gap="md">
              {project.keyFeatures.map((feature, index) => (
                <Card key={index} variant="outlined" padding="md">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <Text variant="body">{feature}</Text>
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Challenges & Solutions */}
      <Section spacing="lg">
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Heading variant="h3">Challenges & Solutions</Heading>
              <Text variant="body" className="text-muted-foreground max-w-2xl mx-auto">
                Every project comes with unique challenges. Here&apos;s how I approached and solved them.
              </Text>
            </div>

            <Grid cols={2} gap="lg">
              {/* Challenges */}
              <div className="space-y-6">
                <Heading variant="h4">Challenges</Heading>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index} variant="outlined" padding="md">
                      <div className="space-y-2">
                        <Text variant="small" className="text-muted-foreground">
                          Challenge {index + 1}
                        </Text>
                        <Text variant="body">{challenge}</Text>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-6">
                <Heading variant="h4">Solutions</Heading>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <Card key={index} variant="outlined" padding="md">
                      <div className="space-y-2">
                        <Text variant="small" className="text-muted-foreground">
                          Solution {index + 1}
                        </Text>
                        <Text variant="body">{solution}</Text>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section spacing="lg">
        <Container>
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heading variant="h3">Results & Impact</Heading>
            </div>
            <Grid cols={2} gap="md">
              {project.results.map((result, index) => (
                <Card key={index} variant="outlined" padding="md">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <Text variant="body">{result}</Text>
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Lessons Learned */}
      <Section spacing="lg">
        <Container>
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heading variant="h3">Lessons Learned</Heading>
              <Text variant="body" className="text-muted-foreground max-w-2xl mx-auto">
                Key insights and learnings from this project that will inform future work.
              </Text>
            </div>
            <div className="max-w-4xl mx-auto">
              <Grid cols={2} gap="md">
                {project.lessonsLearned.map((lesson, index) => (
                  <Card key={index} variant="outlined" padding="md">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <Text variant="body">{lesson}</Text>
                    </div>
                  </Card>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section spacing="lg">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Heading variant="h4">Explore More Projects</Heading>
              <Text variant="body" className="text-muted-foreground">
                Check out other projects I&apos;ve worked on.
              </Text>
            </div>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/projects" 
                className="border border-border px-6 py-3 font-mono text-sm hover:bg-muted/50 transition-colors"
              >
                View All Projects
              </Link>
              <Link 
                href="/contact" 
                className="border border-border px-6 py-3 font-mono text-sm hover:bg-muted/50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
