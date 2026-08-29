"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID?.trim() || "G-YK4V02EYVC";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
