import { ArrowUpRight, ExternalLink, LockKeyhole } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Projects");

  const isConfidential = project.confidential;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-colors hover:border-primary/30">
      <ProjectPreview confidential={isConfidential} />

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">
              {t(`${project.id}.category`)}
            </p>

            <h4 className="mt-1 text-xl font-semibold tracking-tight">
              {t(`${project.id}.title`)}
            </h4>
          </div>

          {isConfidential && (
            <Badge variant="outline">{t("confidential.badge")}</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="leading-7 text-muted-foreground">
          {t(`${project.id}.description`)}
        </p>

        {isConfidential ? (
          <div className="mt-5 rounded-lg border border-dashed bg-muted/30 p-4">
            <p className="text-sm leading-6 text-muted-foreground">
              {t("confidential.note")}
            </p>
          </div>
        ) : (
          <TechnologyList technologies={project.technologies} />
        )}
      </CardContent>

      <ProjectActions project={project} />
    </Card>
  );
}

function ProjectPreview({ confidential = false }: { confidential?: boolean }) {
  const t = useTranslations("Projects");

  if (confidential) {
    return (
      <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-muted/40">
        <div className="flex flex-col items-center text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <LockKeyhole aria-hidden="true" className="size-6" />
          </div>

          <p className="mt-4 text-sm font-medium">
            {t("confidential.preview")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-muted/50">
      <div className="w-[75%] rounded-xl border bg-background p-3 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b pb-2">
          <div className="size-2 rounded-full bg-primary/20" />
          <div className="size-2 rounded-full bg-primary/10" />
          <div className="size-2 rounded-full bg-muted" />
        </div>

        <div className="mt-3 space-y-2">
          <div className="h-3 w-2/3 rounded bg-muted" />
          <div className="h-20 rounded-lg bg-muted/70" />

          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 rounded bg-primary/10" />
            <div className="h-10 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnologyList({ technologies }: { technologies: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <Badge key={technology} variant="secondary">
          {technology}
        </Badge>
      ))}
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  const t = useTranslations("Projects");

  if (project.confidential) {
    return (
      <CardFooter className="border-t pt-5">
        <p className="text-sm font-medium text-muted-foreground">
          {t("confidential.available")}
        </p>
      </CardFooter>
    );
  }

  return (
    <CardFooter className="flex-wrap gap-3 border-t pt-5">
      {project.links?.demo && (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "sm",
            }),
          )}
        >
          {t("actions.demo")}
          <ArrowUpRight aria-hidden="true" />
        </a>
      )}

      {project.links?.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "sm",
            }),
          )}
        >
          {t("actions.live")}
          <ExternalLink aria-hidden="true" />
        </a>
      )}

      {project.links?.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
            }),
          )}
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
      )}
    </CardFooter>
  );
}
