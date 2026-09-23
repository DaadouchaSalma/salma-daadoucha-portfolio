import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { HeroActions } from "./HeroActions";
import { HeroMeta } from "./HeroMeta";

const reveal =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-backwards motion-safe:duration-500";

export function HeroContent() {
  const t = useTranslations("Hero");

  return (
    <div className="max-w-2xl">
      <p
        className={cn("text-sm text-muted-foreground", reveal)}
        style={{ animationDelay: "0ms" }}
      >
        {t("greeting")}
      </p>

      <h1
        id="hero-title"
        className={cn(
          "mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl",
          reveal,
        )}
        style={{ animationDelay: "80ms" }}
      >
        {t("name")}
      </h1>

      <p
        className={cn("mt-3 text-lg text-foreground/80 sm:text-xl", reveal)}
        style={{ animationDelay: "160ms" }}
      >
        {t("headline")}
      </p>

      <p
        className={cn(
          "mt-6 max-w-xl text-base leading-7 text-muted-foreground",
          reveal,
        )}
        style={{ animationDelay: "240ms" }}
      >
        {t("description")}
      </p>

      <div className={reveal} style={{ animationDelay: "320ms" }}>
        <HeroActions />
      </div>

      <div className={reveal} style={{ animationDelay: "400ms" }}>
        <HeroMeta />
      </div>
    </div>
  );
}
