"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/AnantKIyer" },
  { name: "LinkedIn", href: "https://linkedin.com/in/anant-iyer" },
  { name: "Twitter", href: "https://twitter.com/" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Section spacing="md">
        <Container>
          <Grid cols={3} gap="lg">
            {/* Brand */}
            <div className="space-y-4">
              <Text variant="h6">Anant Kumar Iyer</Text>
              <Text variant="small" className="text-muted-foreground">
                Full Stack Developer crafting digital experiences with modern technologies.
              </Text>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <Caption>Links</Caption>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <Caption>Social</Caption>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Grid>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <Text variant="small" className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Anant Kumar Iyer. All rights reserved.
            </Text>
          </div>
        </Container>
      </Section>
    </footer>
  )
}