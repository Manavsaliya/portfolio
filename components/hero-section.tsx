"use client";

import Image from "next/image";
import Section from "./section";
import {
  RiMailLine,
  RiGithubLine,
  RiLinkedinLine,
  RemixiconComponentType,
  RiTwitterXLine,
} from "@remixicon/react";

const SOCIALS: {
  name: string;
  href: string;
  icon: RemixiconComponentType;
}[] = [
  {
    name: "Email",
    href: "mailto:manav@example.com",
    icon: RiMailLine,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: RiLinkedinLine,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: RiTwitterXLine,
  },
];

export default function HeroSection() {
  return (
    <Section isTop={true}>
      <div className="flex gap-8 items-center">
        <div className="shrink-0">
          <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-border">
            <Image
              src="/images/profile.jpg?height=128&width=128"
              alt="Manav Saliya"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Name, quote on right side */}
        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Manav Saliya</h1>
            <p className="text-lg text-primary font-semibold mt-2">
              Full-stack developer crafting fast, scalable, and user-focused web
              apps.
            </p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            "Building elegant solutions to complex problems."
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        {SOCIALS.map((social) => {
          return (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
              className="p-2.5 rounded-sm bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          );
        })}
      </div>
    </Section>
  );
}
