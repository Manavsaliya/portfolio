import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

export default function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const baseStyles =
    "font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring cursor-pointer"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    ghost: "text-foreground hover:bg-muted",
    outline: "border border-border text-foreground hover:bg-muted",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
}
