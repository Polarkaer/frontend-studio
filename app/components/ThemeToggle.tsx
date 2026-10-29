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
      className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-foreground hover:text-foreground cursor-pointer"
      onClick={toggleTheme}
      type="button"
    >
      {isLight ? (
        <MoonIcon
          aria-hidden="true"
          className="h-4 w-4"
        />
      ) : (
        <SunIcon
          aria-hidden="true"
          className="h-4 w-4"
        />
      )}
      <span className="sr-only">Switch to {isLight ? "dark" : "light"} mode</span>
    </button>
  );
}
