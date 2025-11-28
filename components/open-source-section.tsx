"use client";

import { OPENSOURCE } from "@/constants/projects";
import ProjectCard from "./project-card";

export default function OpenSourceSection() {
  return (
    <div>
      {OPENSOURCE.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          oneLiner={project.oneLiner}
          bullets={project.bullets}
          github_link={project.github_link}
          link={project.link}
        />
      ))}
    </div>
  );
}
