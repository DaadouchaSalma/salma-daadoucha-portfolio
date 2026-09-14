import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const t = useTranslations("Projects");

  return (
    <Card className="overflow-hidden border-primary/20">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <FeaturedPreview />

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <Badge variant="secondary">{t("featured.label")}</Badge>

            <span className="text-sm text-muted-foreground">
              {t("featured.period")}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            {t(`${project.id}.title`)}
          </h3>

          <p className="mt-3 text-lg font-medium text-muted-foreground">
            {t(`${project.id}.subtitle`)}
          </p>

          <p className="mt-5 leading-7 text-muted-foreground">
            {t(`${project.id}.description`)}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology} variant="outline">
                {technology}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "default",
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
                    size: "default",
                  }),
                )}
              >
                {t("actions.live")}
                <ExternalLink aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

function FeaturedPreview() {
  return (
    <div className="relative min-h-[280px] overflow-hidden bg-muted/50 lg:min-h-[440px]">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-md rounded-xl border bg-background p-4 shadow-sm">
          <div className="flex items-center gap-2 border-b pb-3">
            <div className="size-2.5 rounded-full bg-primary/30" />
            <div className="size-2.5 rounded-full bg-primary/20" />
            <div className="size-2.5 rounded-full bg-primary/10" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="col-span-2 h-24 rounded-lg bg-muted" />
            <div className="h-24 rounded-lg bg-primary/10" />

            <div className="h-16 rounded-lg bg-muted" />
            <div className="col-span-2 h-16 rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
