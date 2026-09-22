import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroActions() {
  const t = useTranslations("Hero");

  return (
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
  );
}
