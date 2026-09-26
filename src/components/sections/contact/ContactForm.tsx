"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("Contact.form");

  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);

      setStatus("error");
      setError(t("error"));
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium"
          >
            {t("name")}
          </label>

          <Input
            id="name"
            name="name"
            placeholder={t("namePlaceholder")}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
            {t("email")}
          </label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium"
        >
          {t("subject")}
        </label>

        <Input
          id="subject"
          name="subject"
          placeholder={t("subjectPlaceholder")}
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium"
        >
          {t("message")}
        </label>

        <Textarea
          id="message"
          name="message"
          placeholder={t("messagePlaceholder")}
          className="min-h-40 resize-none"
          required
          disabled={isLoading}
        />
      </div>

      {/* Honeypot field */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "success" && (
        <p
          role="status"
          className="text-sm text-green-600"
        >
          {t("success")}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="text-sm text-destructive"
        >
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          t("sending")
        ) : (
          <>
            {t("send")}
            <Send className="ml-2 size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
