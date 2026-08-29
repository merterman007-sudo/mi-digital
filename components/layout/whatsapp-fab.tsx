"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/gtag";

const whatsappUrl =
  "https://wa.me/905437128366?text=Merhaba%20MI%20DIGITAL,%20projem%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum.";

export function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("whatsapp_click", {
          placement: "floating_button",
        })
      }
      aria-label="WhatsApp ile iletişime geç"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:scale-[1.03]"
    >
      <span className="whatsapp-pulse inline-flex h-2.5 w-2.5 rounded-full bg-white" />
      WhatsApp
    </motion.a>
  );
}
