import { useTranslations } from "next-intl";

import {
  academicProjects,
  featuredProject,
  professionalProjects,
} from "@/data/projects";

import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { ProjectSectionHeader } from "./ProjectSectionHeader";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 py-20 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro />

        <div className="mt-12">
          <FeaturedProject project={featuredProject} />
        </div>

        <ProjectGroup
          title={t("academic.title")}
          description={t("academic.description")}
          projects={academicProjects}
        />

        <ProjectGroup
          title={t("professional.title")}
          description={t("professional.description")}
          projects={professionalProjects}
        />
      </div>
    </section>
  );
}

function SectionIntro() {
  const t = useTranslations("Projects");

  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {t("eyebrow")}
      </p>

      <h2
        id="projects-title"
        className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {t("title")}
      </h2>

      <p className="mt-5 text-pretty leading-8 text-muted-foreground">
        {t("description")}
      </p>
    </div>
  );
}

function ProjectGroup({
  title,
  description,
  projects,
}: {
  title: string;
  description: string;
  projects: typeof academicProjects;
}) {
  return (
    <div className="mt-24">
      <ProjectSectionHeader title={title} description={description} />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
