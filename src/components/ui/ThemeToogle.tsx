"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-border" aria-hidden="true" />;
  }

  const currentTheme = theme ?? "system";

  const nextTheme = currentTheme === "light" ? "dark" : currentTheme === "dark" ? "system" : "light";

  const Icon = currentTheme === "system" ? Monitor : resolvedTheme === "dark" ? Moon : Sun;

  const themeLabel = currentTheme === "system" ? "System Preference" : currentTheme === "dark" ? "Dark Mode" : "Light Mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`Tema saat ini ${themeLabel}. Klik untuk mengubah ke ${nextTheme}.`}
      title={`Tema: ${themeLabel}`}
    >
      <Icon size={19} strokeWidth={1.8} />
    </button>
  );
}
