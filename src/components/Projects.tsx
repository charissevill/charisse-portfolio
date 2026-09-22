"use client";

import { ArrowUpRight, FolderGit2, Maximize2, X } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [preview, setPreview] = useState<{
    src: string;
    title: string;
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
                <button
                  type="button"
                  disabled={!project.image}
                  onClick={() =>
                    project.image &&
                    setPreview({ src: project.image, title: project.title })
                  }
                  className={`group/thumb relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-bg-soft ${
                    project.image ? "cursor-zoom-in" : "cursor-default"
                  }`}
                >
                  {project.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/thumb:bg-black/30 group-hover/thumb:opacity-100">
                        <Maximize2 size={16} className="text-white" />
                      </span>
                    </>
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-accent">
                      <FolderGit2 size={20} />
                    </span>
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="shrink-0 font-mono text-xs text-fg-muted">
                      {project.date}
                    </span>
                  </div>

                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                    >
                      <ArrowUpRight size={12} />
                      Link
                    </a>
                  )}

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

      {preview && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-black/80 p-6"
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
            src={preview.src}
            alt={preview.title}
            className="max-h-[80vh] max-w-full rounded-lg object-contain"
          />
          <p className="text-center text-sm text-white/80">{preview.title}</p>
        </div>
      )}
    </section>
  );
}
