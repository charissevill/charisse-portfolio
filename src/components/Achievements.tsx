"use client";

import { Award, ChevronDown, Maximize2, X } from "lucide-react";
import { useState } from "react";
import { achievements } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  const [preview, setPreview] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const groups: { year: string; items: typeof achievements }[] = [];
  for (const item of achievements) {
    const group = groups.find((g) => g.year === item.year);
    if (group) {
      group.items.push(item);
    } else {
      groups.push({ year: item.year, items: [item] });
    }
  }

  const years = groups.map((g) => g.year);
  const yearRange =
    years.length > 1 ? `${years[years.length - 1]} – ${years[0]}` : years[0];

  return (
    <section id="achievements" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="04." title="Achievements" icon={Award} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border/60 bg-bg-card">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-bg-soft"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award size={24} />
              </span>
              <span className="min-w-0 flex-1">
                <h3 className="font-semibold">Dean&apos;s List Award</h3>
                <p className="mt-0.5 text-sm text-fg-muted">
                  {achievements.length} honors · {yearRange}
                </p>
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-fg-muted transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {expanded && (
              <div className="border-t border-border/60">
                {groups.map((group) => (
                  <div key={group.year}>
                    <h4 className="px-5 pt-4 font-mono text-xs text-fg-muted">
                      {group.year}
                    </h4>
                    <div className="divide-y divide-border/60">
                      {group.items.map((item) => {
                        const thumb = item.images?.[0];
                        return (
                          <button
                            key={item.id}
                            type="button"
                            disabled={!thumb}
                            onClick={() => thumb && setPreview(thumb)}
                            className={`flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-bg-soft ${
                              thumb ? "cursor-zoom-in" : "cursor-default"
                            }`}
                          >
                            <span className="group/thumb relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-bg-soft">
                              {thumb ? (
                                <>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={thumb}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                                  />
                                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/thumb:bg-black/30 group-hover/thumb:opacity-100">
                                    <Maximize2 size={14} className="text-white" />
                                  </span>
                                </>
                              ) : (
                                <span className="flex h-full w-full items-center justify-center text-accent">
                                  <Award size={16} />
                                </span>
                              )}
                            </span>

                            <span className="min-w-0 flex-1">
                              <h5 className="text-sm font-semibold">
                                {item.title}
                              </h5>
                              {item.description && (
                                <p className="mt-1 text-sm text-fg-muted">
                                  {item.description}
                                </p>
                              )}
                            </span>

                            <span className="shrink-0 font-mono text-xs text-fg-muted">
                              {item.date}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
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
