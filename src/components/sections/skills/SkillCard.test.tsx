import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { type LucideIcon } from "lucide-react";

import { SkillCard } from "./SkillCard";
import type { SkillCategory } from "@/data/skills-data";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "categories.frontend.title": "Frontend Development",
      "categories.backend.title": "Backend Development",
    };

    return translations[key] ?? key;
  },
}));

const MockIcon = ((props: React.SVGProps<SVGSVGElement>) => (
  <svg data-testid="skill-icon" {...props} />
)) as unknown as LucideIcon;

describe("SkillCard", () => {
  const mockCategory: SkillCategory = {
    key: "frontend",
    icon: MockIcon,
    skills: ["React", "TypeScript", "Tailwind CSS"],
    size: "large",
  };

  it("renders the category title correctly using translations", () => {
    render(<SkillCard category={mockCategory} />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Frontend Development",
      })
    ).toBeInTheDocument();
  });

  it("renders the icon with correct accessibility attributes and classes", () => {
    render(<SkillCard category={mockCategory} />);

    const icon = screen.getByTestId("skill-icon");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("aria-hidden", "true");
    expect(icon).toHaveClass("size-4", "text-muted-foreground");
  });

  it("renders all skills in the category as list items", () => {
    render(<SkillCard category={mockCategory} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();

    const skillItems = screen.getAllByRole("listitem");
    expect(skillItems).toHaveLength(mockCategory.skills.length);
  });

  it("applies correct styling classes to the skill items", () => {
    render(<SkillCard category={mockCategory} />);

    const reactSkill = screen.getByText("React");

    expect(reactSkill).toHaveClass("rounded-md");
    expect(reactSkill).toHaveClass("px-3", "py-1.5");
    expect(reactSkill).toHaveClass("text-sm", "font-medium");
    expect(reactSkill).toHaveClass("bg-primary/10", "text-primary");
  });

  it("renders the decorative span element with proper accessibility", () => {
    render(<SkillCard category={mockCategory} />);

    const decorativeSpan = document.querySelector('span.h-\\[3px\\]');

    expect(decorativeSpan).toBeInTheDocument();
    expect(decorativeSpan).toHaveAttribute("aria-hidden", "true");
    expect(decorativeSpan).toHaveClass("w-5", "rounded-full", "bg-primary");
  });

  it("renders correctly with a different category key and size", () => {
    const backendCategory: SkillCategory = {
      key: "backend",
      icon: MockIcon,
      skills: ["Node.js", "PostgreSQL"],
      size: "small",
    };

    render(<SkillCard category={backendCategory} />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Backend Development",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
