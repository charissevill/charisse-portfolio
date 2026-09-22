"use client";

import { Award, ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { achievements } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="04." title="Achievements" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-border/60 bg-bg-card p-5 transition-colors hover:border-accent/60">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award size={18} />
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-fg-muted">
                    {item.date}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-sm text-fg-muted">
                      {item.description}
                    </p>
                  )}

                  {item.images && item.images.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.images.map((src, idx) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setPreview(src)}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1 text-xs text-fg-muted transition-colors hover:border-accent/60 hover:text-fg"
                        >
                          <ImageIcon size={12} />
                          View Certificate
                          {item.images!.length > 1 ? ` ${idx + 1}` : ""}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 text-white/80 hover:text-white"
            onClick={() => setPreview(null)}
          >
            <X size={24} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Certificate"
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}
