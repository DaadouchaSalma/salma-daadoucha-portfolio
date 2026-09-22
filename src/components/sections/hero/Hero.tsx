import { useTranslations } from "next-intl";

import { HeroCodePanel } from "./HeroCodePanel";
import { HeroContent } from "./HeroContent";

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
          <HeroContent />

          <HeroCodePanel
            name={t("name")}
            headline={t("headline")}
          />
        </div>
      </div>
    </section>
  );
}
