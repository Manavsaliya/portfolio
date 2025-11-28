"use client";

import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <div>
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          oneLiner={project.oneLiner}
          bullets={project.bullets}
          link={project.link}
          github_link={project.github_link}
        />
      ))}
    </div>
  );
}
