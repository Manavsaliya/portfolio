"use client";

import { SKILLS } from "@/constants/skills";
import Section from "./section";

export default function SkillsSection() {
  return (
    <Section title="Technical Skills">
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-sm bg-muted text-muted-foreground text-sm transition-colors hover:bg-primary hover:text-primary-foreground cursor-default select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
