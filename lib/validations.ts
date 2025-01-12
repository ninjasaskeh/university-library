import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University card is required"),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
