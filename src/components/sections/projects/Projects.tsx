import { useTranslations } from "next-intl";

import { academicProjects, professionalProjects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

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

        <div className="mt-16 space-y-24">
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
      </div>
    </section>
  );
}

function SectionIntro() {
  const t = useTranslations("Projects");

  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {t("eyebrow")}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h2
          id="projects-title"
          className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t("title")}
        </h2>
      </Reveal>

      {/*<p className="mt-5 text-pretty leading-8 text-muted-foreground">
        {t("description")}
      </p>*/}
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
    <div>
      <Reveal>
        <ProjectSectionHeader title={title} description={description} />
      </Reveal>

      <div className="mt-8 grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={Math.min(index * 90, 360)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
