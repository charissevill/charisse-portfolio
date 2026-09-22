"use client";

import { BadgeCheck, X } from "lucide-react";
import { useState } from "react";
import { achievements } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Certificate = {
  src: string;
  title: string;
  date: string;
  year: string;
};

const certificates: Certificate[] = achievements.flatMap((item) =>
  (item.images ?? []).map((src) => ({
    src,
    title: item.title,
    date: item.date,
    year: item.year,
  }))
);

export default function Certifications() {
  const [active, setActive] = useState<Certificate | null>(null);

  if (certificates.length === 0) return null;

  return (
    <section id="certifications" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            index="05."
            title="Certifications"
            icon={BadgeCheck}
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {certificates.map((cert, i) => (
            <Reveal key={cert.src} delay={Math.min(i * 0.06, 0.4)}>
              <button
                type="button"
                onClick={() => setActive(cert)}
                className="group relative flex aspect-square w-full cursor-zoom-in overflow-hidden rounded-xl border border-border/60 bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-semibold text-white">
                    {cert.title}
                  </p>
                  <p className="text-[11px] text-white/70">
                    {cert.date}, {cert.year}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-black/80 p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 text-white/80 hover:text-white"
            onClick={() => setActive(null)}
          >
            <X size={24} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.title}
            className="max-h-[75vh] max-w-full rounded-lg object-contain"
          />
          <p className="text-center text-sm text-white/80">
            {active.title} — {active.date}, {active.year}
          </p>
        </div>
      )}
    </section>
  );
}
