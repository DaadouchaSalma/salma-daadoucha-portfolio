import type { MetadataRoute } from "next";

const BASE_URL = "https://salmadaadoucha.me";

const locales = ["en", "fr", "ar"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        en: `${BASE_URL}/en`,
        fr: `${BASE_URL}/fr`,
        ar: `${BASE_URL}/ar`,
      },
    },
  }));
}
