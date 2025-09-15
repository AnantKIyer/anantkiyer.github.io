"use client"

import * as React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-2xl font-mono mb-2">ANANT KIYER</h1>
          <div className="text-sm text-muted-foreground font-mono">
            FULL STACK DEVELOPER
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-16">
          <ul className="space-y-1 font-mono text-sm">
            <li>
              <Link href="/about" className="minimal-hover block p-2 -m-2">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/projects" className="minimal-hover block p-2 -m-2">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="minimal-hover block p-2 -m-2">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="space-y-8">
          <div className="text-sm text-muted-foreground font-mono leading-relaxed">
            <p>Building digital experiences with modern technologies.</p>
            <p>Specializing in React, Next.js, and full-stack development.</p>
          </div>

          {/* Dashes Pattern - Inspired by finethought.com.au */}
          <div className="mt-16 space-y-1">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="text-muted-foreground font-mono">
                {Array.from({ length: i + 1 }, () => '-').join('')}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-sm font-mono">
            <div className="minimal-border p-4">
              <div className="text-muted-foreground mb-2">AVAILABLE FOR WORK</div>
              <div>
                <a href="mailto:anant@example.com" className="minimal-hover block p-1 -m-1">
                  anant@example.com
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}