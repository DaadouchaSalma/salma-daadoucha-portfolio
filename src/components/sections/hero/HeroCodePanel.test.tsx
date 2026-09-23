import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroCodePanel } from "./HeroCodePanel";

describe("HeroCodePanel", () => {
  const defaultProps = {
    name: "Salma Daadoucha",
    headline: "Full-Stack Developer",
  };

  it("renders the profile file name", () => {
    render(<HeroCodePanel {...defaultProps} />);

    expect(screen.getByText("profile.ts")).toBeInTheDocument();
  });

  it("renders the provided name", () => {
    render(<HeroCodePanel {...defaultProps} />);

    expect(screen.getByText('"Salma Daadoucha"')).toBeInTheDocument();
  });

  it("renders the provided headline", () => {
    render(<HeroCodePanel {...defaultProps} />);

    expect(screen.getByText('"Full-Stack Developer"')).toBeInTheDocument();
  });

  it("renders the development focus", () => {
    render(<HeroCodePanel {...defaultProps} />);

    expect(
      screen.getByText('"Full-stack development & AI integrations"'),
    ).toBeInTheDocument();
  });

  it("renders all technologies in the stack", () => {
    render(<HeroCodePanel {...defaultProps} />);

    const technologies = [
      "Next.js",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
    ];

    for (const technology of technologies) {
      expect(
        screen.getByText(`"${technology}"`),
      ).toBeInTheDocument();
    }
  });

  it("renders the decorative cursor", () => {
    render(<HeroCodePanel {...defaultProps} />);

    const cursor = document.querySelector('[aria-hidden="true"]');

    expect(cursor).toBeInTheDocument();
  });
});
