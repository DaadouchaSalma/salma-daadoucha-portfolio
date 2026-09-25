import { Reveal } from "@/components/Reveal";

import { SkillCard } from "./SkillCard";
import { SkillsHeader } from "./SkillsHeader";
import { skillCategories } from "@/data/skills-data";

const WIDE_THRESHOLD = 6;

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-20 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <SkillsHeader />


        <div className="grid gap-4 md:grid-cols-6 md:grid-flow-dense">
          {skillCategories.map((category, index) => {
            const isWide = category.skills.length >= WIDE_THRESHOLD;

            return (
              <Reveal
                key={category.key}
                delay={index * 0.05}
                className={isWide ? "md:col-span-4" : "md:col-span-2"}
              >
                <SkillCard
                  category={category}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
