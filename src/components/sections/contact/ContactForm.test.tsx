import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "votre@email.com",
      subject: "Sujet",
      subjectPlaceholder: "Le sujet de votre message",
      message: "Message",
      messagePlaceholder: "Votre message...",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
    };
    return translations[key] ?? key;
  },
}));

const mockFetch = vi.fn();
global.fetch = mockFetch;

function fillForm(user: ReturnType<typeof userEvent.setup>) {
  return user.type(screen.getByLabelText(/nom/i), "Jean Dupont").then(() =>
    user.type(screen.getByLabelText(/email/i), "jean@example.com"),
  ).then(() =>
    user.type(screen.getByLabelText(/sujet/i), "Projet"),
  ).then(() =>
    user.type(screen.getByLabelText(/message/i), "Bonjour, je vous contacte pour..."),
  );
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("rend tous les champs du formulaire", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sujet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /envoyer/i })).toBeInTheDocument();
  });

  it("inclut le champ honeypot (caché et non focusable)", () => {
    render(<ContactForm />);

    const honeypot = screen.getByLabelText("Website");
    expect(honeypot).toHaveAttribute("tabIndex", "-1");
    expect(honeypot).toHaveAttribute("name", "website");
  });

  it("envoie les données au bon endpoint lors de la soumission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Jean Dupont",
          email: "jean@example.com",
          subject: "Projet",
          message: "Bonjour, je vous contacte pour...",
          website: "",
        }),
      });
    });
  });

  it("affiche le message de succès après envoi réussi", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Message envoyé avec succès !",
    );
  });

  it("affiche une erreur si la requête échoue", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Invalid data" }),
    });

    const user = userEvent.setup();
    render(<ContactForm />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Une erreur est survenue. Veuillez réessayer.",
    );
  });

  it("affiche une erreur en cas de rejet réseau", async () => {
    mockFetch.mockRejectedValue(new Error("Network error"));

    const user = userEvent.setup();
    render(<ContactForm />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(await screen.findByRole("alert")).toBeInTheDocument();
  });

  it("désactive les champs et affiche 'Envoi en cours...' pendant l'envoi", async () => {
    let resolveResponse: (value: unknown) => void;
    mockFetch.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveResponse = resolve;
        }),
    );

    const user = userEvent.setup();
    render(<ContactForm />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(screen.getByRole("button", { name: /envoi en cours/i })).toBeDisabled();
    expect(screen.getByLabelText(/nom/i)).toBeDisabled();
    expect(screen.getByLabelText(/email/i)).toBeDisabled();

    resolveResponse!({ ok: true, json: async () => ({}) });

    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });
});
