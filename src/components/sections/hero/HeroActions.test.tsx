import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeroActions } from "./HeroActions";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      projectsButton: "View my projects",
      contactButton: "Contact me",
    };

    return translations[key] ?? key;
  },
}));

describe("HeroActions", () => {
  it("renders the projects CTA", () => {
    render(<HeroActions />);

    const projectsLink = screen.getByRole("link", {
      name: "View my projects",
    });

    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "#projects");
  });

  it("renders the contact CTA", () => {
    render(<HeroActions />);

    const contactLink = screen.getByRole("link", {
      name: "Contact me",
    });

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "#contact");
  });

  it("renders exactly two CTA links", () => {
    render(<HeroActions />);

    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
