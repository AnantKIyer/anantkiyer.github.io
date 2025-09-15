"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
  cursorChar?: string
  onComplete?: () => void
}

export function Typewriter({
  text,
  speed = 100,
  delay = 0,
  className,
  showCursor = true,
  cursorChar = "_",
  onComplete
}: TypewriterProps) {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isComplete, setIsComplete] = React.useState(false)

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? delay : speed)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete])

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {showCursor && (
        <span 
          className={cn(
            "animate-pulse",
            isComplete && "animate-none"
          )}
          style={{
            animation: isComplete ? "none" : "blink 1s infinite"
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  )
}

// Add the blink animation to global CSS
export const typewriterStyles = `
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`
