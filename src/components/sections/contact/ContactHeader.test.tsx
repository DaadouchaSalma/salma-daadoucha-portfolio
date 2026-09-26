import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactHeader } from "./ContactHeader";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      title: "Contactez-moi",
      description: "Une question ou un projet ? Envoyez-moi un message.",
    };
    return translations[key] ?? key;
  },
}));

vi.mock("@/components/Reveal", () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="reveal">{children}</div>
  ),
}));

describe("ContactHeader", () => {
  it("affiche le titre de la section", () => {
    render(<ContactHeader />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Contactez-moi" }),
    ).toBeInTheDocument();
  });

  it("affiche la description", () => {
    render(<ContactHeader />);

    expect(
      screen.getByText("Une question ou un projet ? Envoyez-moi un message."),
    ).toBeInTheDocument();
  });

  it("applique l'id contact-title au titre (pour aria-labelledby)", () => {
    render(<ContactHeader />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveAttribute(
      "id",
      "contact-title",
    );
  });

  it("enveloppe le contenu dans Reveal", () => {
    render(<ContactHeader />);

    const reveal = screen.getByTestId("reveal");
    expect(reveal).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2 }),
    ).toBeInTheDocument();
  });
});
