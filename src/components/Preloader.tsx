"use client";

import { Lottie } from "lottie-react";
import { useEffect, useState } from "react";
import loadingAnimation from "@/assets/loading-animation.json";
import { profile } from "@/data/content";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 600));
    const pageLoad =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) =>
            window.addEventListener("load", () => resolve(), { once: true }),
          );

    Promise.all([minDelay, pageLoad]).then(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 500);
    });
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-cyan text-lg font-bold text-white">
          {profile.initials}
        </span>
        <Lottie src={loadingAnimation} autoplay loop className="h-20 w-36" />
      </div>
    </div>
  );
}
