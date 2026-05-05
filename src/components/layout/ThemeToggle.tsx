"use client";

import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full border border-[#3d3d3d] relative transition-colors duration-300 ${
          isDark ? "bg-black" : "bg-white"
        }`}
        aria-label="Toggle Theme"
      >
        <span
          className={`absolute top-1 left-1 w-3.5 h-3.5 rounded-full transition-transform duration-300 ${
            isDark ? "bg-white translate-x-0" : "bg-black translate-x-6"
          }`}
        />
      </button>
    </div>
  );
}
