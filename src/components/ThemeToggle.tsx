"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return <div className="w-9.5 h-9.5" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-black/[.04] dark:hover:bg-white/[.04] transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/20"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="w-5.5 h-5.5 text-slate-700 dark:text-slate-200" />
      ) : (
        <Sun className="w-5.5 h-5.5 text-cyan-400" />
      )}
    </button>
  );
}
