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
        url: "favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "favicon.png",
        type: "image/jpg",
      },
    ],
    apple: "favicon.png",
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
