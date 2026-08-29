"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/gtag";

export function QuoteFab() {
  const pathname = usePathname();
  const hideFab = pathname === "/iletisim" || pathname === "/teklif-alindi";

  if (hideFab) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.35 }}
      className="fixed bottom-[4.7rem] right-5 z-[60] md:hidden"
    >
      <Link
        href="/iletisim"
        onClick={() =>
          trackEvent("cta_click_service", {
            cta_target: "/iletisim",
            cta_placement: "mobile_sticky_quote",
          })
        }
        className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/95 px-4 py-2.5 text-xs font-semibold text-slate-900 shadow-xl shadow-cyan-700/10 backdrop-blur dark:border-cyan-700/60 dark:bg-slate-950/90 dark:text-slate-100"
      >
        <span className="inline-flex h-2 w-2 rounded-full bg-cyan-500 quote-pulse" />
        Teklif Al
      </Link>
    </motion.div>
  );
}
