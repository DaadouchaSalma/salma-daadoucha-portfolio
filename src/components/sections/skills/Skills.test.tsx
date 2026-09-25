import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Skills from "./Skills";
import { skillCategories } from "@/data/skills-data";

vi.mock("./SkillsHeader", () => ({
  SkillsHeader: () => <div data-testid="skills-header" />,
}));

vi.mock("./SkillCard", () => ({
  SkillCard: ({ category }: { category: { key: string } }) => (
    <div data-testid="skill-card" data-key={category.key}>
      {category.key}
    </div>
  ),
}));

vi.mock("@/components/Reveal", () => ({
  Reveal: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="reveal-wrapper" data-classname={className}>
      {children}
    </div>
  ),
}));

vi.mock("lucide-react", () => ({
  Code2: () => <svg data-testid="icon-code2" />,
  Server: () => <svg data-testid="icon-server" />,
  Database: () => <svg data-testid="icon-database" />,
  BrainCircuit: () => <svg data-testid="icon-brain" />,
  Cloud: () => <svg data-testid="icon-cloud" />,
}));

const WIDE_THRESHOLD = 6;

describe("Skills", () => {
  it("renders the main section with correct accessibility attributes", () => {
    render(<Skills />);

    const section = document.querySelector("#skills");

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("aria-labelledby", "skills-title");
  });

  it("renders the SkillsHeader component", () => {
    render(<Skills />);

    expect(screen.getByTestId("skills-header")).toBeInTheDocument();
  });

  it("renders a SkillCard for each category in the actual data", () => {
    render(<Skills />);

    const cards = screen.getAllByTestId("skill-card");
    expect(cards).toHaveLength(skillCategories.length);

    skillCategories.forEach((category) => {
      expect(screen.getByText(category.key)).toBeInTheDocument();
    });
  });

  it("applies correct column classes based on the WIDE_THRESHOLD and actual data", () => {
    render(<Skills />);

    const revealWrappers = screen.getAllByTestId("reveal-wrapper");

    skillCategories.forEach((category, index) => {
      const wrapper = revealWrappers[index];
      const isWide = category.skills.length >= WIDE_THRESHOLD;
      const expectedClassName = isWide ? "md:col-span-4" : "md:col-span-2";

      expect(wrapper).toHaveAttribute("data-classname", expectedClassName);
    });
  });

  it("correctly identifies wide and narrow categories based on real data", () => {
    const wideCategories = skillCategories.filter(c => c.skills.length >= WIDE_THRESHOLD);
    const narrowCategories = skillCategories.filter(c => c.skills.length < WIDE_THRESHOLD);

    expect(wideCategories).toHaveLength(3);
    expect(wideCategories.map(c => c.key)).toEqual(["frontend", "backend", "devops"]);

    expect(narrowCategories).toHaveLength(2);
    expect(narrowCategories.map(c => c.key)).toEqual(["data", "ai"]);
  });
});
