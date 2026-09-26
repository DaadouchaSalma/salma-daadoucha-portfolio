import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      formTitle: "Envoyez-moi un message",
    };
    return translations[key] ?? key;
  },
}));

vi.mock("@/components/Reveal", () => ({
  Reveal: ({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) => (
    <div data-testid="reveal" data-delay={delay} className={className}>
      {children}
    </div>
  ),
}));

vi.mock("./ContactHeader", () => ({
  ContactHeader: () => <h2 id="contact-title" data-testid="contact-header">Contact</h2>,
}));

vi.mock("./ContactInfo", () => ({
  ContactInfo: () => <div data-testid="contact-info" />,
}));

vi.mock("./ContactForm", () => ({
  default: () => <div data-testid="contact-form" />,
}));

describe("Contact", () => {
  it("rend la section avec l'id et l'attribut aria corrects", () => {
    render(<Contact />);

    const section = screen.getByRole("region", { name: /contact/i });
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "contact");
    expect(section).toHaveAttribute("aria-labelledby", "contact-title");
  });

  it("affiche le titre du formulaire traduit", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { level: 3, name: "Envoyez-moi un message" })).toBeInTheDocument();
  });

  it("rend tous les composants enfants", () => {
    render(<Contact />);

    expect(screen.getByTestId("contact-header")).toBeInTheDocument();
    expect(screen.getByTestId("contact-info")).toBeInTheDocument();
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("utilise les bons délais sur les composants Reveal", () => {
    render(<Contact />);

    const reveals = screen.getAllByTestId("reveal");
    expect(reveals).toHaveLength(2);
    expect(reveals[0]).toHaveAttribute("data-delay", "100");
    expect(reveals[1]).toHaveAttribute("data-delay", "150");
  });

  it("applique la classe h-fit au premier Reveal", () => {
    render(<Contact />);

    const reveals = screen.getAllByTestId("reveal");
    expect(reveals[0]).toHaveClass("h-fit");
  });
});
