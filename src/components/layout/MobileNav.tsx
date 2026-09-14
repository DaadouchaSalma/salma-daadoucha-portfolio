"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  {
    key: "home",
    href: "#home",
  },
  {
    key: "about",
    href: "#about",
  },
  {
    key: "skills",
    href: "#skills",
  },
  {
    key: "projects",
    href: "#projects",
  },
  {
    key: "services",
    href: "#services",
  },
  {
    key: "contact",
    href: "#contact",
  },
] as const;

export default function MobileNav() {
  const t = useTranslations("Navigation");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label={t("menu")}
            className="md:hidden"
          />
        }
      >
        <Menu aria-hidden="true" className="size-5" />
        <span className="sr-only">{t("menu")}</span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-[min(85vw,22rem)] flex-col"
      >
        <SheetHeader>
          <SheetTitle>Salma Daadoucha</SheetTitle>

          <SheetDescription>
            {t("description")}
          </SheetDescription>
        </SheetHeader>

        <nav
          aria-label={t("mobileNavigation")}
          className="flex flex-1 flex-col gap-1 px-4"
        >
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 border-t border-border p-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
