"use client"

import * as React from "react"

const projects = [
  {
    title: "ECOMMERCE PLATFORM",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    tech: "NEXT.JS, TYPESCRIPT, STRIPE, POSTGRESQL",
    status: "COMPLETED"
  },
  {
    title: "TASK MANAGEMENT APP", 
    description: "Collaborative task management with real-time updates and team collaboration features.",
    tech: "REACT, NODE.JS, SOCKET.IO, MONGODB",
    status: "COMPLETED"
  },
  {
    title: "WEATHER DASHBOARD",
    description: "Responsive weather application with location-based forecasts and interactive maps.",
    tech: "REACT, OPENWEATHER API, CHART.JS",
    status: "COMPLETED"
  },
  {
    title: "SOCIAL ANALYTICS",
    description: "Analytics dashboard for social media metrics with data visualization and reporting.",
    tech: "VUE.JS, D3.JS, EXPRESS, REDIS",
    status: "IN PROGRESS"
  },
  {
    title: "BANKING APP",
    description: "Cross-platform mobile banking with secure authentication and transaction management.",
    tech: "REACT NATIVE, FIREBASE, REDUX",
    status: "COMPLETED"
  },
  {
    title: "PORTFOLIO WEBSITE",
    description: "Modern, responsive portfolio with smooth animations and dark mode support.",
    tech: "NEXT.JS, TAILWIND CSS, TYPESCRIPT",
    status: "COMPLETED"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-2xl font-mono mb-2">PROJECTS</h1>
          <div className="text-sm text-muted-foreground font-mono">
            SELECTED WORK & EXPERIMENTS
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="minimal-border p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-mono">{project.title}</h2>
                <div className="text-xs font-mono text-muted-foreground">
                  {project.status}
                </div>
              </div>
              
              <div className="text-xs font-mono text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </div>
              
              <div className="text-xs font-mono">
                {project.tech}
              </div>
            </div>
          ))}
        </div>

        {/* Dashes Pattern */}
        <div className="mt-16 space-y-1">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="text-muted-foreground font-mono">
              {Array.from({ length: i + 1 }, () => '-').join('')}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 minimal-border p-6">
          <div className="text-xs font-mono text-muted-foreground mb-2">
            INTERESTED IN WORKING TOGETHER?
          </div>
          <div className="text-sm font-mono">
            <a href="/contact" className="minimal-hover p-1 -m-1">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}