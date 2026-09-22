"use client";

import { ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { gallery, type GalleryItem } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="05." title="Gallery" icon={ImageIcon} />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal key={item.id} delay={Math.min(i * 0.04, 0.4)}>
              <button
                type="button"
                disabled={!item.src}
                onClick={() => item.src && setActive(item)}
                className={`group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-bg-card ${
                  item.src ? "cursor-zoom-in" : "cursor-default"
                }`}
              >
                {item.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-fg-muted">
                    <ImageIcon size={22} />
                    <span className="px-2 text-center text-xs">
                      {item.caption}
                    </span>
                  </div>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
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
            alt={active.caption}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}
