import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      resolvedTheme: "light",
      setTheme: (theme) => {
        const resolved = theme === "system" && typeof window !== "undefined"
          ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
          : (theme === "dark" ? "dark" : "light");
        set({ theme, resolvedTheme: resolved });
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", resolved === "dark");
        }
      },
    }),
    { name: "learnsmart-theme" }
  )
);
