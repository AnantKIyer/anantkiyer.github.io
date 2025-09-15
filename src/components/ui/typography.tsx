import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

const variants = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-mono font-medium tracking-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl font-mono font-medium tracking-tight", 
  h3: "text-2xl md:text-3xl lg:text-4xl font-mono font-medium",
  h4: "text-xl md:text-2xl lg:text-3xl font-mono font-medium",
  h5: "text-lg md:text-xl lg:text-2xl font-mono font-medium",
  h6: "text-base md:text-lg lg:text-xl font-mono font-medium",
  body: "text-sm md:text-base font-mono leading-relaxed",
  small: "text-xs md:text-sm font-mono",
  caption: "text-xs font-mono text-muted-foreground uppercase tracking-wider"
}

export function Heading({ 
  children, 
  className, 
  as: Component = "h1",
  variant = "h1"
}: TypographyProps & { variant?: keyof typeof variants }) {
  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  )
}

export function Text({ 
  children, 
  className, 
  as: Component = "p",
  variant = "body"
}: TypographyProps & { variant?: keyof typeof variants }) {
  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  )
}

export function Caption({ 
  children, 
  className 
}: Omit<TypographyProps, "as">) {
  return (
    <span className={cn(variants.caption, className)}>
      {children}
    </span>
  )
}
