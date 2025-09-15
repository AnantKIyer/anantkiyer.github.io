"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
  once?: boolean
}

export function Animated({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.6, 
  direction = "fade",
  once = true 
}: AnimatedProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [once])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-[${duration * 1000}ms]`
    
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} ${durationClass} translate-y-8 opacity-0`
        case "down":
          return `${baseClasses} ${durationClass} -translate-y-8 opacity-0`
        case "left":
          return `${baseClasses} ${durationClass} translate-x-8 opacity-0`
        case "right":
          return `${baseClasses} ${durationClass} -translate-x-8 opacity-0`
        case "scale":
          return `${baseClasses} ${durationClass} scale-95 opacity-0`
        default:
          return `${baseClasses} ${durationClass} opacity-0`
      }
    }
    
    return `${baseClasses} ${durationClass} translate-y-0 translate-x-0 scale-100 opacity-100`
  }

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Convenience components
export const AnimatedDiv = Animated
export const AnimatedSection = Animated
export const AnimatedP = Animated
export const AnimatedH1 = Animated
export const AnimatedH2 = Animated
export const AnimatedH3 = Animated
