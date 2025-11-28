"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useAppearance() {
  const [theme, setTheme] = useState<Theme | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null

    if (stored) {
      setTheme(stored)
      applyTheme(stored)
    } else {
      // Use system preference, but don't store "system" in localStorage
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
      applyTheme(systemTheme)
    }
    setMounted(true)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  return { theme, mounted, toggleTheme }
}
