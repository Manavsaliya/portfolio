import type { Metadata } from "next";
import type React from "react";

import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manav Saliya - Full-Stack Developer",
  description: "Crafting modern web apps with Laravel, React & Next.js",
  icons: {
    icon: [
      {
        url: "/images/profile.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/profile.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/profile.jpg",
        type: "image/jpg",
      },
    ],
    apple: "/images/profile.jpg",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={manrope.className} lang="en" suppressHydrationWarning>
      <body className="antialiased min-w-[400px]" cz-shortcut-listen="true">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
