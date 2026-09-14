import { Code2, Layers3, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </p>

            <h2
              id="about-title"
              className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {t("title")}
            </h2>

            <div className="mt-6 max-w-3xl space-y-4 text-pretty leading-8 text-muted-foreground">
              <p>{t("descriptionOne")}</p>
              <p>{t("descriptionTwo")}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ key, icon: Icon }) => (
              <Card key={key}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>

                  <div>
                    <CardTitle className="text-base">
                      {t(`highlights.${key}.title`)}
                    </CardTitle>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`highlights.${key}.description`)}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="hidden" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
