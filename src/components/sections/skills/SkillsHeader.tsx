import { useTranslations } from "next-intl";

import { Reveal } from "@/components/Reveal";

export function SkillsHeader() {
  const t = useTranslations("Skills");

  return (
    <Reveal>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2
          id="skills-title"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t("title")}
        </h2>

        <p className="mt-4 text-muted-foreground">
          {t("description")}
        </p>
      </div>
    </Reveal>
  );
}
