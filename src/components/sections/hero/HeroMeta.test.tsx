import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeroMeta } from "./HeroMeta";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      availability: "Available for opportunities",
      location: "Tunis, Tunisia",
    };

    return translations[key] ?? key;
  },
}));

describe("HeroMeta", () => {
  it("renders the availability information", () => {
    render(<HeroMeta />);

    expect(
      screen.getByText("Available for opportunities"),
    ).toBeInTheDocument();
  });

  it("renders the location information", () => {
    render(<HeroMeta />);

    expect(screen.getByText("Tunis, Tunisia")).toBeInTheDocument();
  });

  it("renders the availability indicator as a decorative element", () => {
    const { container } = render(<HeroMeta />);

    const indicator = container.querySelector(
      ".bg-mint-cream-600",
    );

    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveAttribute("aria-hidden", "true");
  });
});
