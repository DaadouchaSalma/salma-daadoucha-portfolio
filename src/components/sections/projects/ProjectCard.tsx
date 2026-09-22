"use client";
import { ArrowUpRight, ExternalLink, LockKeyhole, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
import { useState } from "react";
import { ProjectDemoModal } from "./ProjectDemoModal";

type ProjectCardProps = {
  project: Project;
};

const CATEGORY_COLORS: Record<string, { dot: string; text: string }> = {
  professional: {
    dot: "bg-smart-blue-500 dark:bg-smart-blue-300",
    text: "text-smart-blue-600 dark:text-smart-blue-300",
  },
  internship: {
    dot: "bg-mint-cream-600 dark:bg-mint-cream-400",
    text: "text-mint-cream-700 dark:text-mint-cream-400",
  },
  academic: {
    dot: "bg-yale-blue-500 dark:bg-yale-blue-300",
    text: "text-yale-blue-600 dark:text-yale-blue-300",
  },
};
const DEFAULT_CATEGORY_COLOR = { dot: "bg-primary", text: "text-primary" };



export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Projects");
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const isConfidential = project.confidential;

  const categoryColor =
      CATEGORY_COLORS[project.category as string] ?? DEFAULT_CATEGORY_COLOR;

  return (
    <>
    <Card className="group flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-primary/30">
      <ProjectPreview confidential={isConfidential} image={project.image} projectId={project.id}/>

      <CardHeader className="px-6 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5">
                         <span className={cn("size-1.5 rounded-full", categoryColor.dot)} />
                         <p className={cn("text-xs font-semibold uppercase tracking-wider", categoryColor.text)}>
                           {t(`${project.id}.category`)}
                         </p>
                       </div>

            <h4 className="mt-0.5 text-xl font-semibold tracking-tight">
              {t(`${project.id}.title`)}
            </h4>
          </div>

          {isConfidential && (
            <Badge variant="outline">{t("confidential.badge")}</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 px-6 pb-5 pt-0">
        <p className="text-sm leading-6 text-muted-foreground line-clamp-2">
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

      <ProjectActions project={project} onDemoClick={() => setIsDemoOpen(true)} />
    </Card>
    <ProjectDemoModal
           project={project}
           open={isDemoOpen}
           onOpenChange={setIsDemoOpen}
         />
    </>
  );
}

function ProjectPreview({ confidential = false, image, projectId }: { confidential?: boolean; image?: string; projectId: string }) {
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
  if (image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-white">
        <Image
          src={image}
          alt={t(`${projectId}.imageAlt`)}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
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
  const MAX_VISIBLE = 4;
  const visible = technologies.slice(0, MAX_VISIBLE);
  const remaining = technologies.length - visible.length;

  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {visible.map((technology) => (
        <Badge key={technology} variant="secondary" className="px-2 py-0.5 text-xs">
          {technology}
        </Badge>
      ))}
      {remaining > 0 && (
        <Badge variant="outline" className="px-2 py-0.5 text-xs text-muted-foreground">
          +{remaining}
        </Badge>
      )}
    </div>
  );
}

function ProjectActions({ project, onDemoClick, }: { project: Project; onDemoClick: () => void; }) {
  const t = useTranslations("Projects");

  if (project.confidential) {
    return (
      <CardFooter className="border-t px-6 py-4">
        <p className="text-sm font-medium text-muted-foreground">
          {t("confidential.available")}
        </p>
      </CardFooter>
    );
  }

  return (
      <CardFooter className="flex-wrap gap-2 border-t px-6 py-4">
        {project.video && (
          <button
            type="button"
            onClick={onDemoClick}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              }),
            )}
          >
            {t("actions.demo")}
            <Play aria-hidden="true" />
          </button>
        )}

        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
