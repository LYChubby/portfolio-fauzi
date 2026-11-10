"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-border" aria-hidden="true" />;
  }

  // Tema efektif: kalau user belum pernah pilih (theme = "system"/undefined),
  // ikuti resolvedTheme dari perangkat. Kalau sudah pilih, pakai pilihan user.
  const effectiveTheme = theme === "system" || !theme ? resolvedTheme : theme;

  // Rotasi hanya 2 state
  const nextTheme = effectiveTheme === "dark" ? "light" : "dark";

  const Icon = effectiveTheme === "dark" ? Moon : Sun;
  const themeLabel = effectiveTheme === "dark" ? "Dark Mode" : "Light Mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`Tema saat ini ${themeLabel}. Klik untuk mengubah ke ${nextTheme === "dark" ? "Dark Mode" : "Light Mode"}.`}
      title={`Tema: ${themeLabel}`}
    >
      <Icon size={19} strokeWidth={1.8} />
    </button>
  );
}
