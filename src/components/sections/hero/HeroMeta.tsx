import { useTranslations } from "next-intl";

export function HeroMeta() {
  const t = useTranslations("Hero");

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true"
          className="size-1.5 rounded-full bg-mint-cream-600" />
        {t("availability")}
      </span>

      <span className="hidden h-4 w-px bg-border sm:block" />

      <span>{t("location")}</span>
    </div>
  );
}
