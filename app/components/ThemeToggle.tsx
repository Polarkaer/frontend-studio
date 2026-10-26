"use client";

import { useState } from "react";

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
      className="rounded border border-current px-3 py-2 text-sm"
      onClick={toggleTheme}
      type="button"
    >
      Switch to {isLight ? "dark" : "light"} mode
    </button>
  );
}
