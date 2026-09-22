"use client";

import { ArrowUpRight, FolderGit2, X } from "lucide-react";
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

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                {project.image && (
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({ src: project.image!, title: project.title })
                    }
                    className="aspect-video w-full cursor-zoom-in overflow-hidden bg-bg-soft"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <FolderGit2 size={18} />
                    </span>
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="text-fg-muted transition-colors hover:text-accent"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1 font-mono text-xs text-fg-muted">
                    {project.date}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-bg-soft px-3 py-1 text-xs text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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
