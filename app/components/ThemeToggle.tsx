"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  function toggleTheme() {
    const nextIsLight = !isLight;
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    setIsLight(nextIsLight);
  }

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      className="flex items-center gap-2 rounded border border-current px-3 py-2 text-sm"
      onClick={toggleTheme}
      type="button"
    >
      {isLight ? (
        <MoonIcon
          aria-hidden="true"
          className="h-5 w-5"
        />
      ) : (
        <SunIcon
          aria-hidden="true"
          className="h-5 w-5"
        />
      )}
      <span>Switch to {isLight ? "dark" : "light"} mode</span>
    </button>
  );
}
