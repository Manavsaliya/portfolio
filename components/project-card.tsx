"use client";

import { Project } from "@/constants/projects";
import { RiExternalLinkLine, RiGithubLine } from "@remixicon/react";

const Plus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="stroke-border"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
};

export default function ProjectCard({
  name,
  oneLiner,
  bullets,
  link,
  github_link,
  isLast,
}: Project) {
  return (
    <div className="relative py-4 px-4 space-y-3 border-b border-x first:border-t border-border hover:bg-muted/40 dark:hover:bg-muted/20">
      <div className="absolute -top-[7.4px] -left-[7.5px] text-muted-foreground text-xs">
        <Plus />
      </div>
      <div className="absolute -top-[7.4px] -right-[7.5px] text-muted-foreground text-xs">
        <Plus />
      </div>
      {isLast && (
        <>
          <div className="absolute -bottom-[19px] -left-2 text-muted-foreground text-xs">
            <Plus />
          </div>
          <div className="absolute -bottom-[19px] -right-2 text-muted-foreground text-xs">
            <Plus />
          </div>
        </>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground">{name}</h3>
          {oneLiner && (
            <p className="text-sm text-muted-foreground mt-1">{oneLiner}</p>
          )}
        </div>
        <div className="flex gap-2 shrink-0 transition-colors hover:text-foreground">
          {github_link && (
            <a
              href={github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub link"
            >
              <RiGithubLine size={16} />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="External link"
            >
              <RiExternalLinkLine size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Bullet points */}
      <ul className="space-y-2">
        {bullets.map((point, idx) => (
          <li
            key={idx}
            className="text-sm text-muted-foreground flex gap-3 text-justify leading-relaxed"
          >
            <span className="text-primary shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
