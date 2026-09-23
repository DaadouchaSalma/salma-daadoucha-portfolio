"use client";

import { useTranslations } from "next-intl";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import type { Project } from "@/data/projects";
import { Play } from "lucide-react";

type ProjectDemoModalProps = {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDemoModal({
  project,
  open,
  onOpenChange,
}: ProjectDemoModalProps) {
  const t = useTranslations("Projects");

  if (!project.video) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="w-[90vw] !max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
            {/* Header */}
            <DialogHeader className="border-b border-border px-6 pb-5 pt-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <DialogTitle className="text-xl font-semibold tracking-tight text-foreground">
                  {t(`${project.id}.title`)}
                </DialogTitle>
              </div>

              <DialogDescription className="mt-1.5 text-muted-foreground">
                {t("demo.description")}
              </DialogDescription>
            </DialogHeader>

            {/* Video */}
            <div className="px-6 pt-6">
              <div className="overflow-hidden rounded-xl border border-border bg-[#0f1624]">
                <video
                  className="aspect-video w-full"
                  src={project.video}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${t(`${project.id}.title`)} demo video`}
                >
                  {t("demo.videoUnsupported")}
                </video>
              </div>
            </div>

            {/* Description + technologies */}
            <div className="space-y-5 px-6 pb-6 pt-6">
              <p className="text-sm leading-6 text-muted-foreground">
                {t(`${project.id}.description`)}
              </p>

              <div className="border-t border-border pt-5">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("demo.technologies")}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="secondary"
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
  );
}
