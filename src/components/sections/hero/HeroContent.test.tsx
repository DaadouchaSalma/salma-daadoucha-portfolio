import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeroContent } from "./HeroContent";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      greeting: "Hello, I'm",
      name: "Salma Daadoucha",
      headline: "Full-Stack Developer",
      description:
        "I build reliable and polished digital experiences.",
    };

    return translations[key] ?? key;
  },
}));

vi.mock("./HeroActions", () => ({
  HeroActions: () => <div data-testid="hero-actions" />,
}));

vi.mock("./HeroMeta", () => ({
  HeroMeta: () => <div data-testid="hero-meta" />,
}));

describe("HeroContent", () => {
  it("renders the greeting", () => {
    render(<HeroContent />);

    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
  });

  it("renders the name as the main heading", () => {
    render(<HeroContent />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Salma Daadoucha",
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "hero-title");
  });

  it("renders the headline", () => {
    render(<HeroContent />);

    expect(
      screen.getByText("Full-Stack Developer"),
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<HeroContent />);

    expect(
      screen.getByText(
        "I build reliable and polished digital experiences.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the hero actions", () => {
    render(<HeroContent />);

    expect(screen.getByTestId("hero-actions")).toBeInTheDocument();
  });

  it("renders the hero meta information", () => {
    render(<HeroContent />);

    expect(screen.getByTestId("hero-meta")).toBeInTheDocument();
  });
});
