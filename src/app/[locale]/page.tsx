import { setRequestLocale } from "next-intl/server";

import About from "@/components/sections/About";
import Projects from "@/components/sections/projects/Projects";
import Hero from "@/components/sections/hero/Hero";
import Skills from "@/components/sections/skills/Skills";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
