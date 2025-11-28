"use client";

import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
