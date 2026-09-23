const BASE_URL = "https://salmadaadoucha.me";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Salma Daadoucha",
    url: BASE_URL,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/DaadouchaSalma",
      "https://www.linkedin.com/in/salma-daadoucha",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Web Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
