import { Reveal } from "@/components/Reveal";

import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <ContactHeader />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal
            delay={100}
            className="h-fit"
          >
            <ContactInfo />
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-xl border bg-card p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-semibold">
                {t("formTitle")}
              </h3>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
