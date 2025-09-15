"use client"

import * as React from "react"

const skills = [
  "REACT",
  "NEXT.JS", 
  "TYPESCRIPT",
  "NODE.JS",
  "POSTGRESQL",
  "TAILWIND CSS",
  "FIGMA",
  "DOCKER"
]

const experience = [
  {
    period: "2020 - PRESENT",
    role: "FULL STACK DEVELOPER",
    description: "Building scalable web applications and leading development teams."
  },
  {
    period: "2018 - 2020", 
    role: "FRONTEND DEVELOPER",
    description: "Creating responsive user interfaces and optimizing user experiences."
  }
]

export default function About() {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-2xl font-mono mb-2">ABOUT</h1>
          <div className="text-sm text-muted-foreground font-mono">
            BACKGROUND & EXPERIENCE
          </div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Bio */}
          <section>
            <div className="text-sm font-mono leading-relaxed space-y-4">
              <p>
                Passionate about creating digital experiences that make a difference. 
                I combine technical expertise with creative vision to build solutions that users love.
              </p>
              <p>
                My journey in technology began with curiosity and a desire to understand how things work. 
                What started as simple HTML pages has evolved into a passion for building complex, 
                user-centered applications.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="mb-8">
              <h2 className="text-sm font-mono text-muted-foreground mb-4">SKILLS</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="minimal-border p-3 text-center">
                    <div className="text-xs font-mono">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <div className="mb-8">
              <h2 className="text-sm font-mono text-muted-foreground mb-4">EXPERIENCE</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="minimal-border p-4">
                    <div className="text-xs font-mono text-muted-foreground mb-2">
                      {exp.period}
                    </div>
                    <div className="text-sm font-mono mb-2">{exp.role}</div>
                    <div className="text-xs font-mono text-muted-foreground">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dashes Pattern */}
          <div className="space-y-1">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="text-muted-foreground font-mono">
                {Array.from({ length: i + 1 }, () => '-').join('')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}