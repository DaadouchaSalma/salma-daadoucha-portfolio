import { Code2, Layers3, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

export default function About() {
  const t = useTranslations("About");

  const highlights = [
    {
      key: "frontend",
      icon: Code2,
    },
    {
      key: "fullstack",
      icon: Layers3,
    },
    {
      key: "location",
      icon: MapPin,
    },
  ] as const;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 py-20 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {t("eyebrow")}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2
                id="about-title"
                className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
              >
                {t("title")}
              </h2>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-6 max-w-3xl space-y-4 text-pretty leading-8 text-muted-foreground">
                <p>{t("descriptionOne")}</p>
                <p>{t("descriptionTwo")}</p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ key, icon: Icon }, index) => (
              <Reveal key={key} delay={150 + index * 130}>
                <Card
                  className="
                    group relative overflow-hidden
                    border-border/60
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-lg hover:shadow-primary/5
                  "
                >
                  {/* Subtle hover glow */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute -right-10 -top-10
                      size-24 rounded-full
                      bg-primary/10 blur-2xl
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  <CardHeader className="relative flex flex-row items-center gap-4">
                    <div
                      className="
                        flex size-11 shrink-0 items-center justify-center rounded-xl
                        bg-primary/10 text-primary
                        transition-all duration-300 ease-out
                        group-hover:bg-primary/15
                        group-hover:scale-105
                        group-hover:-rotate-2
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        className="
                          size-5
                          transition-transform duration-300 ease-out
                          group-hover:scale-110
                        "
                      />
                    </div>

                    <div>
                      <CardTitle
                        className="
                          text-base
                          transition-colors duration-300
                          group-hover:text-primary
                        "
                      >
                        {t(`highlights.${key}.title`)}
                      </CardTitle>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(`highlights.${key}.description`)}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
