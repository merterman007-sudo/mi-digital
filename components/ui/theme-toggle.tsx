"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted || !resolvedTheme) {
    return (
      <button
        type="button"
        className="h-9 min-w-9 rounded-full border border-slate-300/70 bg-white/70 px-2 text-xs"
        aria-label="Tema değiştir"
      >
        D
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "h-9 min-w-9 rounded-full border px-2 text-xs font-semibold transition",
        "border-slate-300/70 bg-white/70 text-slate-700 hover:bg-white",
        "dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-900",
      )}
      aria-label="Tema değiştir"
      title={isDark ? "Açık moda geç" : "Koyu moda geç"}
    >
      {isDark ? "L" : "D"}
    </button>
  );
}
