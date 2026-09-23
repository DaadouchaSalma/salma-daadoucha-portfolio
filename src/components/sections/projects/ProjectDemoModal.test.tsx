import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { Project } from "@/data/projects";

import { ProjectDemoModal } from "./ProjectDemoModal";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "jobnest.title": "JobNest",
      "jobnest.description":
        "A freelance platform connecting developers and clients.",

      "demo.description": "Watch a short walkthrough of the project.",
      "demo.technologies": "Technologies",
      "demo.videoUnsupported":
        "Your browser does not support video playback.",
    };

    return translations[key] ?? key;
  },
}));

vi.mock("@/components/ui/dialog", () => ({
  Dialog: ({
    children,
    open,
  }: {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }) => (open ? <div role="dialog">{children}</div> : null),

  DialogContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),

  DialogHeader: ({ children }: { children: React.ReactNode }) => (
    <header>{children}</header>
  ),

  DialogTitle: ({ children }: { children: React.ReactNode }) => (
    <h2>{children}</h2>
  ),

  DialogDescription: ({ children }: { children: React.ReactNode }) => (
    <p>{children}</p>
  ),
}));

const projectWithVideo = {
  id: "jobnest",
  category: "academic",
  image: "/projects/jobnest_preview.png",
  technologies: ["React", "GraphQL", "NestJS"],
  video: "/videos/jobnest.mp4",
  links: {
    github: "https://github.com/example/jobnest",
  },
} as Project;

const projectWithoutVideo = {
  id: "jobnest",
  category: "academic",
  image: "/projects/jobnest_preview.png",
  technologies: ["React", "GraphQL", "NestJS"],
  links: {
    github: "https://github.com/example/jobnest",
  },
} as Project;

describe("ProjectDemoModal", () => {
  it("renders nothing when the project has no video", () => {
    render(
      <ProjectDemoModal
        project={projectWithoutVideo}
        open
        onOpenChange={vi.fn()}
      />,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders the dialog when the project has a video and is open", () => {
    render(
      <ProjectDemoModal
        project={projectWithVideo}
        open
        onOpenChange={vi.fn()}
      />,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("renders the project title and description", () => {
    render(
      <ProjectDemoModal
        project={projectWithVideo}
        open
        onOpenChange={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "JobNest" }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Watch a short walkthrough of the project.",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "A freelance platform connecting developers and clients.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the demo video with the correct source", () => {
    render(
      <ProjectDemoModal
        project={projectWithVideo}
        open
        onOpenChange={vi.fn()}
      />,
    );

    const video = screen.getByLabelText("JobNest demo video");

    expect(video).toHaveAttribute(
      "src",
      "/videos/jobnest.mp4",
    );

    expect(video).toHaveAttribute("controls");
    expect(video).toHaveAttribute("playsinline");
  });

  it("renders all project technologies", () => {
    render(
      <ProjectDemoModal
        project={projectWithVideo}
        open
        onOpenChange={vi.fn()}
      />,
    );

    expect(screen.getByText("Technologies")).toBeInTheDocument();

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("GraphQL")).toBeInTheDocument();
    expect(screen.getByText("NestJS")).toBeInTheDocument();
  });

  it("does not render the dialog when it is closed", () => {
    render(
      <ProjectDemoModal
        project={projectWithVideo}
        open={false}
        onOpenChange={vi.fn()}
      />,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
