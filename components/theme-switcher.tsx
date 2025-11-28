"use client"

import { useAppearance } from "@/hooks/use-appearance"
import { RiSunLine, RiMoonLine } from "@remixicon/react"

export default function ThemeSwitcher() {
  const { theme, mounted, toggleTheme } = useAppearance()

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
    </button>
  )
}
