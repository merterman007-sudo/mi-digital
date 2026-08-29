"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { contactSchema } from "@/lib/validations";
import { trackEvent } from "@/lib/gtag";

type ContactState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialState: ContactState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const web3FormsAccessKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || "";

export function ContactForm() {
  const router = useRouter();
  const [data, setData] = useState<ContactState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactState, string>>>({});

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    if (!hasStarted && value.trim().length > 0) {
      setHasStarted(true);
      trackEvent("form_start", {
        form_name: "contact",
        channel: "website",
      });
    }
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        fullName: fieldErrors.fullName?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        company: fieldErrors.company?.[0],
        message: fieldErrors.message?.[0],
      });
      toast.error("Lütfen form alanlarını kontrol edin.");
      return;
    }

    try {
      setIsSubmitting(true);

      if (!web3FormsAccessKey) {
        throw new Error("Form ayarı eksik. Web3Forms access key tanımlanmalıdır.");
      }

      const mailPayload = {
        access_key: web3FormsAccessKey,
        subject: "Yeni Müşteri Talebi - MI DIGITAL",
        from_name: "MI DIGITAL Web Sitesi",
        name: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        company: parsed.data.company,
        message: parsed.data.message,
        botcheck: "",
      };

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(mailPayload),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Form gönderimi başarısız oldu. Lütfen tekrar deneyin.");
      }

      setData(initialState);
      trackEvent("generate_lead", {
        form_name: "contact",
        channel: "website",
        value: 1,
      });
      trackEvent("cta_click_service", {
        cta_target: "/teklif-alindi",
        cta_placement: "contact_form_submit",
      });
      toast.success("Teşekkür ederiz, talebiniz bize ulaştı.");

      router.push("/teklif-alindi");
    } catch (error) {
      trackEvent("form_submit_error", {
        form_name: "contact",
        channel: "website",
      });
      const message = error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="grid gap-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Ad Soyad"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Field
            label="E-posta"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Telefon"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Field
            label="Şirket Adı"
            name="company"
            value={data.company}
            onChange={handleChange}
            error={errors.company}
          />
        </div>
        <label className="grid gap-2 text-sm font-medium">
          <span>Mesaj</span>
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            rows={5}
            className="rounded-[8px] border border-[#f4efd4]/30 bg-black px-4 py-3 text-[#f4efd4] outline-none transition focus:border-[#84acfb]"
            placeholder="Projenizden kısaca bahsedin..."
          />
          {errors.message ? <span className="text-xs text-red-500">{errors.message}</span> : null}
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-full bg-[#84acfb] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#a9c5ff] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Gönderiliyor..." : "Teklif Al"}
        </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof ContactState;
  value: string;
  error?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Field({ label, name, value, error, onChange, type = "text" }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-[8px] border border-[#f4efd4]/30 bg-black px-4 py-3 text-[#f4efd4] outline-none transition focus:border-[#84acfb]"
      />
      {error ? <span className="text-xs text-red-500">{error}</span> : null}
    </label>
  );
}
