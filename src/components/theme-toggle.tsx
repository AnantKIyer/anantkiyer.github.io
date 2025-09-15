"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="font-mono text-xs minimal-hover p-2 -m-2"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "DARK" : "LIGHT"}
    </button>
  )
}
