"use client";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  FolderGit2,
  Github,
  ImageIcon,
  X,
} from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [gallery, setGallery] = useState<{
    images: string[];
    title: string;
    index: number;
  } | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="03." title="Projects" icon={FolderGit2} />
        </Reveal>

        <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-bg-card">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <div className="flex flex-col gap-4 p-5 sm:flex-row">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-white p-3">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={`${project.title} icon`}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-accent">
                      <FolderGit2 size={24} />
                    </span>
                  )}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="shrink-0 font-mono text-xs text-fg-muted">
                      {project.date}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                      >
                        <ArrowUpRight size={12} />
                        Link
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                      >
                        <Github size={12} />
                        Code
                      </a>
                    )}
                    {project.downloadUrl && (
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                      >
                        <Download size={12} />
                        Download App
                      </a>
                    )}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          setGallery({
                            images: project.screenshots!,
                            title: project.title,
                            index: 0,
                          })
                        }
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                      >
                        <ImageIcon size={12} />
                        Preview
                      </button>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/30 px-3 py-1 text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {gallery && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-black/80 p-6"
          onClick={() => setGallery(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 text-white/80 hover:text-white"
            onClick={() => setGallery(null)}
          >
            <X size={24} />
          </button>

          {gallery.images.length > 1 && (
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={(e) => {
                e.stopPropagation();
                setGallery((g) =>
                  g
                    ? {
                        ...g,
                        index: (g.index - 1 + g.images.length) % g.images.length,
                      }
                    : g,
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white sm:left-8"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery.images[gallery.index]}
            alt={`${gallery.title} screenshot ${gallery.index + 1}`}
            className="max-h-[75vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {gallery.images.length > 1 && (
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={(e) => {
                e.stopPropagation();
                setGallery((g) =>
                  g ? { ...g, index: (g.index + 1) % g.images.length } : g,
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white sm:right-8"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <p className="text-center text-sm text-white/80">
            {gallery.title}
            {gallery.images.length > 1 &&
              ` — ${gallery.index + 1}/${gallery.images.length}`}
          </p>
        </div>
      )}
    </section>
  );
}
