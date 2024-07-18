import { z } from "zod";

export const enquiryFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(9, "Phone number must be at least 9 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
