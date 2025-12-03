"use client";

import { EXPERIENCE } from "@/constants/experience";
import { calculateDuration, formatDate } from "@/lib/utils";
import ExperienceTimeline from "./experience-timeline";
import Section from "./section";

export default function ExperienceSection() {
  const sortedExperiences = [...EXPERIENCE].sort((a, b) => {
    if (a.end_period === "current") return -1;
    if (b.end_period === "current") return 1;
    const aDate = new Date(a.end_period);
    const bDate = new Date(b.end_period);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <Section title="Experience" isBottom={true}>
      <div className="space-y-6">
        {sortedExperiences.map((exp, index) => {
          const duration = calculateDuration(exp.start_period, exp.end_period);
          const isFirst = index === 0;
          const isLast = index === sortedExperiences.length - 1;

          return (
            <div key={index} className="flex gap-6">
              <ExperienceTimeline isFirst={isFirst} isLast={isLast} />

              {/* Content */}
              <div className="space-y-2 flex-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {exp.company}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <div className="flex gap-2 text-sm text-muted-foreground flex-wrap">
                  <span>{formatDate(exp.start_period)}</span>
                  <span>→</span>
                  <span>{formatDate(exp.end_period)}</span>
                  {duration && (
                    <>
                      <span>•</span>
                      <span>{duration}</span>
                    </>
                  )}
                </div>
                <ul className="space-y-2 pt-2 tracking-wide">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-foreground/90 flex gap-3 space-y-0.5"
                    >
                      <span className="text-primary/50 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
