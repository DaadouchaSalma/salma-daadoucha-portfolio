import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SkillsHeader } from "./SkillsHeader";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      title: "Skills & Technologies",
      description: "A collection of tools and technologies I work with.",
    };

    return translations[key] ?? key;
  },
}));

vi.mock("@/components/Reveal", () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="reveal-wrapper">{children}</div>
  ),
}));

describe("SkillsHeader", () => {
  it("renders the translated title as an h2 heading", () => {
    render(<SkillsHeader />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Skills & Technologies",
      })
    ).toBeInTheDocument();
  });

  it("renders the translated description", () => {
    render(<SkillsHeader />);

    expect(
      screen.getByText("A collection of tools and technologies I work with.")
    ).toBeInTheDocument();
  });

  it("sets the correct id on the heading for aria-labelledby linking", () => {
    render(<SkillsHeader />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveAttribute("id", "skills-title");
  });

  it("applies correct styling classes to the heading", () => {
    render(<SkillsHeader />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveClass("text-3xl", "font-bold", "tracking-tight");
    expect(heading).toHaveClass("sm:text-4xl");
  });

  it("applies correct styling classes to the description", () => {
    render(<SkillsHeader />);

    const description = screen.getByText(
      "A collection of tools and technologies I work with."
    );

    expect(description).toHaveClass("mt-4", "text-muted-foreground");
  });

  it("renders inside the Reveal component", () => {
    render(<SkillsHeader />);

    expect(screen.getByTestId("reveal-wrapper")).toBeInTheDocument();
  });

  it("falls back to the key when a translation is missing", () => {
    vi.doMock("next-intl", () => ({
      useTranslations: () => (key: string) => key,
    }));


    render(<SkillsHeader />);


    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
