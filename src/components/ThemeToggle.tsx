"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false;
}

function setIsLight(isLight: boolean) {
  document.documentElement.classList.toggle("light", isLight);
  try {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  } catch {
    // localStorage unavailable — theme just won't persist
  }
  listeners.forEach((notify) => notify());
}

export default function ThemeToggle() {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setIsLight(!isLight)}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-fg-muted transition-colors hover:border-accent/60 hover:text-fg"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
