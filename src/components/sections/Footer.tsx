import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={t("goHome")}
            >
              <Image
                              src="/images/logo.png"
                              alt="Salma Daadoucha Logo"
                              width={36}
                              height={36}
                              priority
                              className="size-9 rounded-lg"
                            />

              <div>
                <p className="font-semibold">Salma Daadoucha</p>
                <p className="text-sm text-muted-foreground">
                  {t("role")}
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav
              aria-label={t("navigationLabel")}
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
            >
              <a
                href="#about"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("links.about")}
              </a>

              <a
                href="#skills"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("links.skills")}
              </a>

              <a
                href="#projects"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("links.projects")}
              </a>

              <a
                href="#services"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("links.services")}
              </a>

              <a
                href="#contact"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("links.contact")}
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/DaadouchaSalma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                )}
              >
                <FaGithub aria-hidden="true" className="size-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/salma-daadoucha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                )}
              >
                <FaLinkedinIn aria-hidden="true" className="size-5" />
              </a>

              <a
                href="mailto:salmadaadoucha@gmail.com"
                aria-label={t("emailLabel")}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                )}
              >
                <Mail aria-hidden="true" className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Salma Daadoucha. {t("rights")}
          </p>

          <p>{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
