import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outlined" | "elevated" | "minimal"
  padding?: "none" | "sm" | "md" | "lg"
  hover?: boolean
}

const variantClasses = {
  default: "bg-background",
  outlined: "border border-border bg-background",
  elevated: "bg-background shadow-sm",
  minimal: "bg-transparent"
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
}

export function Card({ 
  children, 
  className, 
  variant = "outlined",
  padding = "md",
  hover = false
}: CardProps) {
  return (
    <div className={cn(
      "transition-all duration-200",
      variantClasses[variant],
      paddingClasses[padding],
      hover && "hover:bg-muted/50 cursor-pointer",
      className
    )}>
      {children}
    </div>
  )
}

export function CardHeader({ 
  children, 
  className 
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  )
}

export function CardContent({ 
  children, 
  className 
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  )
}

export function CardFooter({ 
  children, 
  className 
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-4", className)}>
      {children}
    </div>
  )
}