"use client";

import { usePathname } from "next/navigation";
import { Search, Bell, Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { useAuthStore } from "@/store/useAuthStore";

const pathTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/courses": "Courses",
  "/practice/coding": "Coding Practice",
  "/practice/quizzes": "Quizzes",
  "/notes": "Notes",
  "/flashcards": "Flashcards",
  "/ai-tutor": "AI Tutor",
  "/community": "Community",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export function TopBar({ title }: { title?: string }) {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useThemeStore();
  const { user } = useAuthStore();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-lg font-semibold">
        {title ||
          pathTitles[pathname] ||
          Object.entries(pathTitles)
            .filter(([p]) => pathname.startsWith(p))
            .sort((a, b) => b[0].length - a[0].length)[0]?.[1] ||
          "LearnSmart"}
      </h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            placeholder="Search courses, topics..."
            className="h-9 w-64 rounded-lg border border-zinc-200 bg-zinc-50 pl-9 pr-4 text-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-500"
          />
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Toggle theme"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        <button className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 font-medium">
            {user?.name?.charAt(0) || "U"}
          </div>
          <span className="text-sm font-medium hidden sm:inline">{user?.name || "Student"}</span>
        </div>
      </div>
    </header>
  );
}
