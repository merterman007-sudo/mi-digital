import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(3, "Ad Soyad en az 3 karakter olmalıdır."),
  email: z.string().trim().email("Geçerli bir e-posta adresi girin."),
  phone: z
    .string()
    .trim()
    .min(10, "Telefon en az 10 karakter olmalıdır.")
    .max(20, "Telefon en fazla 20 karakter olmalıdır."),
  company: z.string().trim().min(2, "Şirket adı en az 2 karakter olmalıdır."),
  message: z.string().trim().min(10, "Mesaj en az 10 karakter olmalıdır."),
});

export type ContactInput = z.infer<typeof contactSchema>;
