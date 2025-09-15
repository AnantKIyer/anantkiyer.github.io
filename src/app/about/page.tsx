import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Text, Caption } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Card } from "@/components/ui/card"
import { Experience } from "@/components/modules/experience"

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="min-h-screen flex items-center">
        <Container>
          <div className="space-y-8">
            <div className="space-y-4">
              <Caption>About Me</Caption>
              <Heading variant="h1">Background & Experience</Heading>
              <Text variant="body" className="text-muted-foreground max-w-3xl">
                Passionate about creating digital experiences that make a difference. 
                I combine technical expertise with creative vision to build solutions that users love.
              </Text>
            </div>

            <Grid cols={2} gap="lg">
              <Card variant="outlined" padding="lg">
                <div className="space-y-4">
                  <Text variant="h6">Philosophy</Text>
                  <Text variant="body" className="text-muted-foreground">
                    I believe in the power of clean, efficient code and user-centered design. 
                    Every project is an opportunity to solve real problems and create meaningful impact.
                  </Text>
                </div>
              </Card>
              
              <Card variant="outlined" padding="lg">
                <div className="space-y-4">
                  <Text variant="h6">Approach</Text>
                  <Text variant="body" className="text-muted-foreground">
                    My development process focuses on understanding user needs, 
                    iterating quickly, and delivering high-quality solutions that scale.
                  </Text>
                </div>
              </Card>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Experience Section */}
      <Experience />
    </>
  )
}