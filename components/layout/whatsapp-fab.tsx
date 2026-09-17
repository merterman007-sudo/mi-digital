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
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition hover:scale-[1.05] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#25D366]"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16.01 2.67A13.2 13.2 0 0 0 4.67 22.65L2.8 29.3l6.82-1.79a13.3 13.3 0 1 0 6.39-24.84Zm0 24.18a10.8 10.8 0 0 1-5.51-1.51l-.39-.23-4.04 1.06 1.08-3.94-.25-.41a10.84 10.84 0 1 1 9.11 5.03Zm5.95-8.12c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.52-2.66-1.65-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.17-.74-1.79-1.01-2.45-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.12-1.14 2.73 0 1.61 1.17 3.17 1.33 3.39.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.62-.09 1.95-.8 2.22-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z" />
      </svg>
    </motion.a>
  );
}
