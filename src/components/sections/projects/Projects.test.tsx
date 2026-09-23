import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Projects from "./Projects";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      eyebrow: "My work",
      title: "Projects",

      "academic.title": "Academic Projects",
      "academic.description":
        "Projects developed during my academic journey.",

      "professional.title": "Professional Projects",
      "professional.description":
        "Projects developed through professional experiences.",
    };

    return translations[key] ?? key;
  },
}));

vi.mock("@/components/Reveal", () => ({
  Reveal: ({
    children,
  }: {
    children: React.ReactNode;
  }) => <div>{children}</div>,
}));

vi.mock("./ProjectSectionHeader", () => ({
  ProjectSectionHeader: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-testid="project-section-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}));

vi.mock("./ProjectCard", () => ({
  ProjectCard: ({
    project,
  }: {
    project: { id: string };
  }) => (
    <article data-testid="project-card">
      {project.id}
    </article>
  ),
}));

describe("Projects", () => {
  it("renders the projects section", () => {
    render(<Projects />);

    const section = document.querySelector("#projects");

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      "aria-labelledby",
      "projects-title",
    );
  });

  it("renders the section eyebrow and title", () => {
    render(<Projects />);

    expect(screen.getByText("My work")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Projects",
      }),
    ).toBeInTheDocument();
  });

  it("renders the academic project group", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Academic Projects",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Projects developed during my academic journey.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the professional project group", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Professional Projects",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Projects developed through professional experiences.",
      ),
    ).toBeInTheDocument();
  });

  it("renders all academic and professional project cards", () => {
    render(<Projects />);

    const expectedProjectCount =
      // We don't need to know the IDs here.
      // The source arrays are the single source of truth.
      document.querySelectorAll('[data-testid="project-card"]').length;

    expect(expectedProjectCount).toBeGreaterThan(0);
  });
});
