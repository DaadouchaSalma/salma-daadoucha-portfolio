import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Contact form environment variables are missing.");

      return NextResponse.json(
        { error: "Contact service is not configured." },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Please check your form data." },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = result.data;

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Salma Daadoucha <hello@salmadaadoucha.me>",
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
