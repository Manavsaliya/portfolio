"use client";

import { Suspense } from "react";
import OpenSourceSection from "@/components/open-source-section";
import ProjectsSection from "@/components/projects-section";
import Section from "@/components/section";
import Button from "@/components/button";
import { RiDownloadCloud2Line } from "@remixicon/react";

function ResumeSkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-8 bg-muted rounded-lg w-1/3 animate-pulse" />
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <Section className="flex justify-between items-center gap-4" isTop={true}>
        <h1 className="text-3xl font-bold text-foreground">Resume</h1>
        <a
          href="https://drive.google.com/file/d/1example/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="md" className="gap-2 flex items-center">
            <RiDownloadCloud2Line size={16} />
            Download
          </Button>
        </a>
      </Section>

      <Section title="Open-Source Contributions">
        <Suspense fallback={<ResumeSkeleton />}>
          <OpenSourceSection />
        </Suspense>
      </Section>

      <Section title="Projects" isBottom={true}>
        <Suspense fallback={<ResumeSkeleton />}>
          <ProjectsSection />
        </Suspense>
      </Section>
    </main>
  );
}
