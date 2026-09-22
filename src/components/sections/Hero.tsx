import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { buttonVariants } from "@/components/ui/button";
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
      className="border-b border-border/70 bg-background"
    >
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: content */}
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground">{t("greeting")}</p>

            <h1
              id="hero-title"
              className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              {t("name")}
            </h1>

            <p className="mt-3 text-lg text-foreground/80 sm:text-xl">
              {t("headline")}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              {t("description")}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group rounded-md px-5",
                )}
              >
                {t("projectsButton")}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-md px-5",
                )}
              >
                <Mail aria-hidden="true" className="size-4" />
                {t("contactButton")}
              </a>
            </div>

            {/* Status + location */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-mint-cream-600" />
                {t("availability")}
              </span>

              <span className="hidden h-4 w-px bg-border sm:block" />

              <span>{t("location")}</span>
            </div>
          </div>

          {/* Right: a code-shaped fact panel with real syntax-highlight colors */}
          <div className="hidden font-mono text-sm lg:block">
            <div className="overflow-hidden rounded-lg border border-border/70 bg-[#0d1117] shadow-sm">
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="size-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-xs text-white/40">profile.ts</span>
              </div>

              <div className="space-y-1 px-6 py-5 leading-7">
                <p>
                  <span className="text-[#ff7b72]">const</span>{" "}
                  <span className="text-[#d2a8ff]">engineer</span>{" "}
                  <span className="text-white/60">= {"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#79c0ff]">name</span>
                  <span className="text-white/60">: </span>
                  <span className="text-[#a5d6ff]">&quot;{t("name")}&quot;</span>
                  <span className="text-white/60">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#79c0ff]">role</span>
                  <span className="text-white/60">: </span>
                  <span className="text-[#a5d6ff]">
                    &quot;{t("headline")}&quot;
                  </span>
                  <span className="text-white/60">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#79c0ff]">focus</span>
                  <span className="text-white/60">: </span>
                  <span className="text-[#a5d6ff]">
                    &quot;Full-stack development & AI integrations&quot;
                  </span>
                  <span className="text-white/60">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#79c0ff]">stack</span>
                  <span className="text-white/60">: [</span>
                  {technologies.map((tech, i) => (
                    <span key={tech}>
                      <span className="text-[#a5d6ff]">&quot;{tech}&quot;</span>
                      {i < technologies.length - 1 && (
                        <span className="text-white/60">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-white/60">],</span>
                </p>
                <p className="text-white/60">{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
