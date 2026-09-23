import { render, screen } from "@testing-library/react";

import { ProjectSectionHeader } from "./ProjectSectionHeader";
import { describe, expect, it } from "vitest";

describe("ProjectSectionHeader", () => {
  it("renders the title as a level 3 heading", () => {
    render(
      <ProjectSectionHeader
        title="Academic Projects"
        description="Projects developed during my studies."
      />,
    );

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Academic Projects",
      }),
    ).toBeInTheDocument();
  });

  it("renders the project group description", () => {
    render(
      <ProjectSectionHeader
        title="Professional Projects"
        description="Projects developed during my professional experience."
      />,
    );

    expect(
      screen.getByText(
        "Projects developed during my professional experience.",
      ),
    ).toBeInTheDocument();
  });

  it("renders both title and description", () => {
    render(
      <ProjectSectionHeader
        title="My Projects"
        description="A selection of projects I have worked on."
      />,
    );

    expect(screen.getByRole("heading", { name: "My Projects" })).toBeInTheDocument();
    expect(
      screen.getByText("A selection of projects I have worked on."),
    ).toBeInTheDocument();
  });
});
