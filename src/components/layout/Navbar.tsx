import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MobileNav from "@/components/layout/MobileNav";
import ThemeToggle from "@/components/layout/ThemeToggle";

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

export default function Navbar() {
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          aria-label={t("goHome")}
          className="group inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
            SD
          </span>

          <span className="hidden font-semibold tracking-tight sm:inline">
            Salma Daadoucha
          </span>
        </a>

        <nav
          aria-label={t("desktopNavigation")}
          className="hidden items-center gap-1 md:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
