import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";

import "../globals.css";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { CursorSpotlight } from "@/components/Cursorspotlight";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  const siteUrl = "https://salmadaadoucha.me";

  return {
    metadataBase: new URL(siteUrl),

    title: {
      default: t("title"),
      template: `%s | ${t("name")}`,
    },

    description: t("description"),

    keywords: [
      "Salma Daadoucha",
      "Software Engineer",
      "Full Stack Developer",
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Web Developer",
      "Portfolio",
    ],

    authors: [
      {
        name: "Salma Daadoucha",
        url: siteUrl,
      },
    ],

    creator: "Salma Daadoucha",
    publisher: "Salma Daadoucha",

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      url: `/${locale}`,
      title: t("title"),
      description: t("description"),
      siteName: "Salma Daadoucha",
      locale,
      images: [
            {
              url: "/og-image.png",
              width: 1200,
              height: 630,
              alt: "Salma Daadoucha — Software Engineer",
            },
          ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background overflow-x-hidden text-foreground antialiased">
        <Analytics />
        <SpeedInsights />
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <CursorSpotlight />
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
