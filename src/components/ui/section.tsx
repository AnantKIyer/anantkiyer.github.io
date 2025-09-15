import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "default" | "muted" | "accent"
}

const spacingClasses = {
  none: "",
  sm: "py-8",
  md: "py-16", 
  lg: "py-24",
  xl: "py-32"
}

const backgroundClasses = {
  default: "",
  muted: "bg-muted/30",
  accent: "bg-accent/10"
}

export function Section({ 
  children, 
  className, 
  spacing = "md",
  background = "default"
}: SectionProps) {
  return (
    <section className={cn(
      spacingClasses[spacing],
      backgroundClasses[background],
      className
    )}>
      {children}
    </section>
  )
}
