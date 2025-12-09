"use client";

import {
  RemixiconComponentType,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiTwitterXLine,
} from "@remixicon/react";
import Image from "next/image";
import Section from "./section";

const SOCIALS: {
  name: string;
  href: string;
  icon: RemixiconComponentType;
}[] = [
  {
    name: "Email",
    href: "mailto:manavsaliya12@gmail.com",
    icon: RiMailLine,
  },
  {
    name: "GitHub",
    href: "https://github.com/Manavsaliya",
    icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/manavsaliya12",
    icon: RiLinkedinLine,
  },
  {
    name: "X",
    href: "https://x.com/manavsaliya12",
    icon: RiTwitterXLine,
  },
];

export default function HeroSection() {
  return (
    <Section isTop={true}>
      <div className="flex gap-8 items-center">
        <div className="shrink-0">
          <div className="relative select-none w-32 h-32 rounded-lg overflow-hidden border-2 border-border">
            <Image
              src="profile.png"
              alt="Manav Saliya"
              fill
              className="object-cover pointer-events-none scale-[120%] -translate-x-0.5"
            />
          </div>
        </div>

        {/* Name, quote on right side */}
        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Manav Saliya
            </h1>
            <p className="max-sm:hidden text-lg text-primary font-semibold mt-2">
              Crafting modern web apps with Laravel, React & Next.js ⚡
            </p>
          </div>
          <p className="max-sm:hidden text-sm text-muted-foreground italic">
            "Building elegant solutions to complex problems."
          </p>
        </div>
      </div>

      <div className="space-y-2 mt-3">
        <p className="sm:hidden text-md text-primary font-semibold mt-2">
          Crafting modern web apps with Laravel, React & Next.js ⚡
        </p>
        <p className="sm:hidden text-sm text-muted-foreground italic">
          "Building elegant solutions to complex problems."
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        {SOCIALS.map((social) => {
          return (
            <a
              key={social.href}
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
