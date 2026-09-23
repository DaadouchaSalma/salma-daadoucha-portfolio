import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import type { Project } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "jobnest.category": "Academic · Full-stack",
      "jobnest.title": "JobNest",
      "jobnest.description": "A freelance platform connecting developers and clients.",
      "jobnest.imageAlt": "JobNest project preview",

      "hrsmartly.category": "Professional · SaaS",
      "hrsmartly.title": "HRSmartly",
      "hrsmartly.description": "An intelligent HR management platform.",
      "hrsmartly.imageAlt": "HRSmartly project preview",

      "confidential.badge": "Confidential",
      "confidential.note": "This project is confidential.",
      "confidential.preview": "Confidential project",
      "confidential.available": "Available upon request",

      "actions.demo": "Demo",
      "actions.live": "Live",
    };

    return translations[key] ?? key;
  },
}));

vi.mock("./ProjectDemoModal", () => ({
  ProjectDemoModal: ({
    open,
  }: {
    project: Project;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }) => (
    <div data-testid="project-demo-modal">
      {open ? "Demo modal open" : "Demo modal closed"}
    </div>
  ),
}));

const publicProject = {
  id: "jobnest",
  category: "academic",
  image: "/projects/jobnest_preview.png",
  technologies: ["React", "GraphQL", "NestJS", "PostgreSQL", "TypeScript"],
  links: {
    live: "https://example.com/jobnest",
    github: "https://github.com/example/jobnest",
  },
  video: "/videos/jobnest.mp4",
  confidential: false,
} as Project;

const confidentialProject = {
  id: "hrsmartly",
  category: "professional",
  technologies: ["Next.js", "NestJS", "PostgreSQL"],
  confidential: true,
} as Project;

describe("ProjectCard", () => {
  describe("public projects", () => {
    it("renders the project title and description", () => {
      render(<ProjectCard project={publicProject} />);

      expect(screen.getByRole("heading", { name: "JobNest" })).toBeInTheDocument();

      expect(
        screen.getByText(
          "A freelance platform connecting developers and clients.",
        ),
      ).toBeInTheDocument();
    });

    it("renders the project technologies", () => {
      render(<ProjectCard project={publicProject} />);

      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("GraphQL")).toBeInTheDocument();
      expect(screen.getByText("NestJS")).toBeInTheDocument();
      expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    });

    it("limits visible technologies to four", () => {
      render(<ProjectCard project={publicProject} />);

      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("GraphQL")).toBeInTheDocument();
      expect(screen.getByText("NestJS")).toBeInTheDocument();
      expect(screen.getByText("PostgreSQL")).toBeInTheDocument();

      expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
      expect(screen.getByText("+1")).toBeInTheDocument();
    });

    it("renders the project links", () => {
      render(<ProjectCard project={publicProject} />);

      const liveLink = screen.getByRole("link", { name: /live/i });
      const githubLink = screen.getByRole("link", { name: /github/i });

      expect(liveLink).toHaveAttribute(
        "href",
        "https://example.com/jobnest",
      );

      expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/example/jobnest",
      );
    });

    it("opens the demo modal when the demo button is clicked", async () => {
      const user = userEvent.setup();

      render(<ProjectCard project={publicProject} />);

      expect(screen.getByTestId("project-demo-modal")).toHaveTextContent(
        "Demo modal closed",
      );

      await user.click(screen.getByRole("button", { name: /demo/i }));

      expect(screen.getByTestId("project-demo-modal")).toHaveTextContent(
        "Demo modal open",
      );
    });

    it("does not render a confidential badge", () => {
      render(<ProjectCard project={publicProject} />);

      expect(screen.queryByText("Confidential")).not.toBeInTheDocument();
    });
  });

  describe("confidential projects", () => {
    it("renders the confidential badge", () => {
      render(<ProjectCard project={confidentialProject} />);

      expect(screen.getByText("Confidential")).toBeInTheDocument();
    });

    it("renders the confidential preview", () => {
      render(<ProjectCard project={confidentialProject} />);

      expect(screen.getByText("Confidential project")).toBeInTheDocument();
    });

    it("renders the confidential note", () => {
      render(<ProjectCard project={confidentialProject} />);

      expect(
        screen.getByText("This project is confidential."),
      ).toBeInTheDocument();
    });

    it("does not render project links for confidential projects", () => {
      render(<ProjectCard project={confidentialProject} />);

      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("renders the confidential availability message", () => {
      render(<ProjectCard project={confidentialProject} />);

      expect(
        screen.getByText("Available upon request"),
      ).toBeInTheDocument();
    });
  });
});
