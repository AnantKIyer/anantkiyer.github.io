"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text } from "@/components/ui/typography"
import { Card } from "@/components/ui/card"

export default function NotFound() {
  return (
    <Section spacing="xl" className="min-h-screen flex items-center">
      <Container>
        <div className="text-center space-y-8 max-w-md mx-auto">
          <div className="space-y-4">
            <Heading variant="h1" className="text-6xl">404</Heading>
            <Text variant="h6">Page Not Found</Text>
            <Text variant="body" className="text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist.
            </Text>
          </div>

          <Card variant="outlined" padding="lg">
            <div className="space-y-4">
              <Link 
                href="/" 
                className="text-sm font-mono hover:text-muted-foreground transition-colors block"
              >
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="text-sm font-mono hover:text-muted-foreground transition-colors"
              >
                Go Back
              </button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}