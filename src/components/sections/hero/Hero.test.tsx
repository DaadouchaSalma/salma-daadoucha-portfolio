import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Hero from "./Hero";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      name: "Salma Daadoucha",
      headline: "Full-Stack Developer",
    };

    return translations[key] ?? key;
  },
}));

vi.mock("./HeroContent", () => ({
  HeroContent: () => <div data-testid="hero-content" />,
}));

vi.mock("./HeroCodePanel", () => ({
  HeroCodePanel: ({
    name,
    headline,
  }: {
    name: string;
    headline: string;
  }) => (
    <div data-testid="hero-code-panel">
      <span>{name}</span>
      <span>{headline}</span>
    </div>
  ),
}));

describe("Hero", () => {
  it("renders the hero section", () => {
    render(<Hero />);

    const hero = document.querySelector("section");

    expect(hero).toBeInTheDocument();
    expect(hero).toHaveAttribute("id", "home");
    expect(hero).toHaveAttribute("aria-labelledby", "hero-title");
  });

  it("renders the hero content", () => {
    render(<Hero />);

    expect(screen.getByTestId("hero-content")).toBeInTheDocument();
  });

  it("passes translated name and headline to the code panel", () => {
    render(<Hero />);

    const codePanel = screen.getByTestId("hero-code-panel");

    expect(codePanel).toHaveTextContent("Salma Daadoucha");
    expect(codePanel).toHaveTextContent("Full-Stack Developer");
  });
});
