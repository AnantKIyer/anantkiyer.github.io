"use client"

import * as React from "react"
import Image from "next/image"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function LazyImage({ src, alt, width, height, className, priority = false }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className="transition-opacity duration-300"
        style={{
          opacity: isLoaded ? 1 : 0,
        }}
      />
    </div>
  )
}