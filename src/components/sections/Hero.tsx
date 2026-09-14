import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const technologies = [
  "Next.js",
  "TypeScript",
  "NestJS",
  "GraphQL",
  "PostgreSQL",
] as const;

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-background" />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(74,108,181,0.22),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(0,204,133,0.14),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(0,161,255,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(74,108,181,0.2),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(0,204,133,0.1),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(0,161,255,0.08),transparent_28%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(74,108,181,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,108,181,0.08)_1px,transparent_1px)] [background-size:42px_42px] dark:opacity-[0.18]"
      />

      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left side */}
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge
                variant="secondary"
                className="gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-primary"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint-cream-600 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-mint-cream-600" />
                </span>

                {t("availability")}
              </Badge>

              <Badge
                variant="outline"
                className="gap-2 rounded-full px-4 py-2"
              >
                <Sparkles aria-hidden="true" className="size-4" />
                {t("specialization")}
              </Badge>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {t("greeting")}
            </p>

            <h1
              id="hero-title"
              className="mt-4 text-balance text-5xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {t("name")}
            </h1>

            <h2 className="mt-5 max-w-2xl text-balance text-2xl font-semibold leading-tight text-foreground/90 sm:text-3xl lg:text-4xl">
              {t("headline")}
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "group rounded-xl px-6 shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20",
                )}
              >
                {t("projectsButton")}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "rounded-xl border-primary/20 bg-background/70 px-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40",
                )}
              >
                <Mail aria-hidden="true" className="size-4" />
                {t("contactButton")}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div
                className="flex items-center gap-2"
                aria-label={t("socialLinks")}
              >
                <a
                  href="https://github.com/DaadouchaSalma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "rounded-full border border-transparent hover:border-border hover:bg-card",
                  )}
                >
                  <FaGithub aria-hidden="true" className="size-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/salma-daadoucha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "rounded-full border border-transparent hover:border-border hover:bg-card",
                  )}
                >
                  <FaLinkedinIn aria-hidden="true" className="size-5" />
                </a>

                <a
                  href="mailto:salmadaadoucha@gmail.com"
                  aria-label={t("emailLabel")}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "rounded-full border border-transparent hover:border-border hover:bg-card",
                  )}
                >
                  <Mail aria-hidden="true" className="size-5" />
                </a>
              </div>

              <div className="hidden h-5 w-px bg-border sm:block" />

              <p className="text-sm text-muted-foreground">
                {t("location")}
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-smart-blue-500/20 via-yale-blue-500/10 to-mint-cream-500/15 blur-3xl"
            />

            <Card className="relative overflow-hidden border-primary/15 bg-card/75 shadow-2xl shadow-smart-blue-950/10 backdrop-blur-xl dark:bg-card/70">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-cream-500 to-transparent"
              />

              <CardHeader className="border-b border-border/70">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-primary">
                      {t("panel.eyebrow")}
                    </p>

                    <CardTitle className="mt-2 text-2xl">
                      {t("panel.title")}
                    </CardTitle>
                  </div>

                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <Code2 aria-hidden="true" className="size-6" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                    <Layers3
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />

                    <p className="mt-3 font-semibold">
                      {t("panel.fullStackTitle")}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {t("panel.fullStackDescription")}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                    <Sparkles
                      aria-hidden="true"
                      className="size-5 text-mint-cream-600 dark:text-mint-cream-500"
                    />

                    <p className="mt-3 font-semibold">
                      {t("panel.productTitle")}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {t("panel.productDescription")}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/60 p-5">
                  <p className="text-sm font-semibold">
                    {t("panel.stackTitle")}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="rounded-full px-3 py-1"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-mint-cream-600/20 bg-mint-cream-50/70 p-5 dark:bg-mint-cream-950/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-mint-cream-700 dark:text-mint-cream-500"
                    />

                    <div>
                      <p className="font-semibold">
                        {t("panel.freelanceTitle")}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {t("panel.freelanceDescription")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -bottom-5 -start-5 hidden rounded-2xl border border-border/70 bg-card/90 px-4 py-3 shadow-xl backdrop-blur md:block">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("floatingLabel")}
              </p>

              <p className="mt-1 font-semibold text-primary">
                Next.js · NestJS · SaaS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
