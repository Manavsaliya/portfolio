"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xs">
      <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <div className="flex gap-8 items-center flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (!document.startViewTransition) return;
                document.startViewTransition();
              }}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <ThemeSwitcher />
      </div>
    </nav>
  );
}
