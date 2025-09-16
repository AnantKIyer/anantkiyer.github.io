"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Typewriter } from "@/components/ui/typewriter"
import { projects } from "@/data/projects"

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
                      <Caption>{project.category} • {project.year}</Caption>
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
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-mono px-2 py-1 bg-muted/50 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs font-mono px-2 py-1 bg-muted/50 rounded">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <div className="flex gap-4">
                    <Link 
                      href={`/projects/${project.id}`}
                      className="text-sm font-mono border-b border-transparent hover:border-current transition-colors"
                    >
                      View Details
                    </Link>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono border-b border-transparent hover:border-current transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono border-b border-transparent hover:border-current transition-colors"
                      >
                        Source Code
                      </a>
                    )}
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
