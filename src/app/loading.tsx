import { Container } from "@/components/ui/container"
import { Text } from "@/components/ui/typography"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container>
        <div className="text-center space-y-4">
          <div className="animate-pulse">
            <Text variant="h6">Loading</Text>
          </div>
          <div className="flex justify-center">
            <div className="w-16 h-px bg-border animate-pulse"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}