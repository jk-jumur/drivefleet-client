"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 animate-pulse rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900 sm:h-10 sm:w-10" />;
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-700 shadow-[0_10px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(91,124,255,0.18)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:h-10 sm:w-10"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 text-base sm:text-lg">
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
};

export default ThemeToggle;