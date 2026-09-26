import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email is too long."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must contain at least 3 characters.")
    .max(150, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters.")
    .max(5000, "Message is too long."),

  website: z
    .string()
    .max(0, "Spam detected.")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
