"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "2022 - Present",
    role: "Senior Full Stack Developer",
    company: "TechCorp",
    description: "Leading development of scalable web applications, mentoring junior developers, and implementing modern development practices.",
    achievements: [
      "Increased application performance by 40% through optimization",
      "Led a team of 5 developers on major product launches",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    period: "2020 - 2022",
    role: "Full Stack Developer", 
    company: "StartupXYZ",
    description: "Built and maintained full-stack applications using React, Node.js, and cloud technologies.",
    achievements: [
      "Developed 15+ client applications from concept to deployment",
      "Integrated third-party APIs and payment systems",
      "Collaborated with design team to implement pixel-perfect UIs"
    ]
  },
  {
    period: "2018 - 2020",
    role: "Frontend Developer",
    company: "WebAgency",
    description: "Created responsive user interfaces and optimized user experiences for various clients.",
    achievements: [
      "Built 20+ responsive websites and web applications",
      "Improved page load times by 50% through optimization",
      "Worked with clients to understand and implement requirements"
    ]
  }
]

export function Experience() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Caption>Professional Journey</Caption>
            <Heading variant="h2">Experience</Heading>
            <Text variant="body" className="text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous learning and growth in the world of web development.
            </Text>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} variant="outlined" padding="lg">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <Text variant="h6">{exp.role}</Text>
                      <Text variant="body" className="text-muted-foreground">
                        {exp.company}
                      </Text>
                    </div>
                    <Caption>{exp.period}</Caption>
                  </div>
                  
                  <Text variant="body" className="text-muted-foreground">
                    {exp.description}
                  </Text>
                  
                  <div className="space-y-2">
                    <Text variant="small" className="font-medium">Key Achievements:</Text>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm font-mono text-muted-foreground flex items-start gap-2">
                          <span className="text-foreground mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
