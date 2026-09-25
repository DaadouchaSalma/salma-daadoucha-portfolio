import { useTranslations } from "next-intl";

import { SkillCategory } from "@/data/skills-data";

type SkillCardProps = {
  category: SkillCategory;
};

export function SkillCard({ category }: SkillCardProps) {
  const t = useTranslations("Skills");
  const Icon = category.icon;

  return (
    <div className="h-full rounded-xl border border-border/60 bg-card p-6 transition-colors duration-200 hover:border-primary/30">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="h-[3px] w-5 rounded-full bg-primary" aria-hidden="true" />
        <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
        <h3 className="text-base font-semibold">
          {t(`categories.${category.key}.title`)}
        </h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 bg-primary/10 text-primary`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
