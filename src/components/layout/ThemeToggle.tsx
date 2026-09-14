"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const t = useTranslations("Theme");
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label={t("toggle")}
            className="relative"
          />
        }
      >
        <Sun
          aria-hidden="true"
          className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />

        <Moon
          aria-hidden="true"
          className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />

        <span className="sr-only">{t("toggle")}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun aria-hidden="true" className="size-4" />
          {t("light")}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon aria-hidden="true" className="size-4" />
          {t("dark")}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop aria-hidden="true" className="size-4" />
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
