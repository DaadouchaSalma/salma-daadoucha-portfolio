import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactInfo } from "./ContactInfo";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      connectTitle: "Restons connectés",
      connectDescription: "Retrouvez-moi sur ces plateformes.",
      emailLabel: "Email",
      github: "DaadouchaSalma",
      linkedin: "Salma Daadoucha",
      locationLabel: "Localisation",
      location: "Casablanca, Maroc",
    };
    return translations[key] ?? key;
  },
}));

vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card">{children}</div>
  ),
  CardContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card-content">{children}</div>
  ),
}));

describe("ContactInfo", () => {
  it("affiche le titre et la description", () => {
    render(<ContactInfo />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Restons connectés" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Retrouvez-moi sur ces plateformes."),
    ).toBeInTheDocument();
  });

  it("rend le lien mailto avec l'adresse email", () => {
    render(<ContactInfo />);

    const emailLink = screen.getByRole("link", { name: /salmadaadoucha@gmail\.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:salmadaadoucha@gmail.com");
    expect(emailLink).not.toHaveAttribute("target");
  });

  it("rend le lien GitHub avec target _blank et rel sécurisé", () => {
    render(<ContactInfo />);

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/DaadouchaSalma",
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("rend le lien LinkedIn avec target _blank et rel sécurisé", () => {
    render(<ContactInfo />);

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/salma-daadoucha",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("affiche la localisation (sans lien)", () => {
    render(<ContactInfo />);

    expect(screen.getByText("Localisation")).toBeInTheDocument();
    expect(screen.getByText("Casablanca, Maroc")).toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: /casablanca/i }),
    ).not.toBeInTheDocument();
  });

  it("rend exactement 3 liens cliquables", () => {
    render(<ContactInfo />);

    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("enveloppe le contenu dans Card et CardContent", () => {
    render(<ContactInfo />);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-content")).toBeInTheDocument();
  });
});
