import { useTranslations } from "next-intl";

import { SkillCategory } from "@/data/skills-data";

type SkillCardProps = {
  category: SkillCategory;
};

export function SkillCard({ category }: SkillCardProps) {
  const t = useTranslations("Skills");
  const Icon = category.icon;

  return (
    <div className="group h-full rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-4 flex items-center gap-2.5">
        <span
          className="h-[3px] w-5 rounded-full bg-primary transition-all duration-300 group-hover:w-8"
          aria-hidden="true"
        />
        <Icon
          className="size-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
          aria-hidden="true"
        />
        <h3 className="text-base font-semibold">
          {t(`categories.${category.key}.title`)}
        </h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:-translate-y-0.5 cursor-pointer"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
