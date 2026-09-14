"use client";

import { Check, Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const languages: Array<{
  locale: Locale;
  label: string;
  shortLabel: string;
}> = [
  {
    locale: "en",
    label: "English",
    shortLabel: "EN",
  },
  {
    locale: "fr",
    label: "Français",
    shortLabel: "FR",
  },
  {
    locale: "ar",
    label: "العربية",
    shortLabel: "AR",
  },
];

export default function LanguageSwitcher() {
  const t = useTranslations("Language");
  const currentLocale = useLocale() as Locale;

  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(locale: Locale) {
    router.replace(pathname, {
      locale,
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            aria-label={t("change")}
            className="gap-2"
          />
        }
      >
        <Languages aria-hidden="true" className="size-4" />

        <span className="hidden sm:inline">
          {currentLocale.toUpperCase()}
        </span>

        <span className="sr-only">{t("change")}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.locale}
            onClick={() => changeLanguage(language.locale)}
            className="justify-between gap-6"
          >
            <span lang={language.locale}>{language.label}</span>

            {currentLocale === language.locale && (
              <Check aria-hidden="true" className="size-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
