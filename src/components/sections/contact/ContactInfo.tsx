import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  Mail,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  const t = useTranslations("Contact");

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold">
          {t("connectTitle")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {t("connectDescription")}
        </p>

        <div className="mt-8 space-y-6">
          <a
            href="mailto:salmadaadoucha@gmail.com"
            className="group flex items-center gap-4"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Mail className="size-5" />
            </span>

            <span>
              <span className="block text-xs text-muted-foreground">
                {t("emailLabel")}
              </span>

              <span className="text-sm font-medium transition-colors group-hover:text-primary">
                salmadaadoucha@gmail.com
              </span>
            </span>
          </a>

          <a
            href="https://github.com/DaadouchaSalma"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <FaGithub className="size-5" />
            </span>

            <span>
              <span className="block text-xs text-muted-foreground">
                GitHub
              </span>

              <span className="text-sm font-medium transition-colors group-hover:text-primary">
                {t("github")}
              </span>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/salma-daadoucha"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <FaLinkedinIn className="size-5" />
            </span>

            <span>
              <span className="block text-xs text-muted-foreground">
                LinkedIn
              </span>

              <span className="text-sm font-medium transition-colors group-hover:text-primary">
                {t("linkedin")}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </span>

            <span>
              <span className="block text-xs text-muted-foreground">
                {t("locationLabel")}
              </span>

              <span className="text-sm font-medium">
                {t("location")}
              </span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
