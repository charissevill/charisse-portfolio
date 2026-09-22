import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="03." title="Projects" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-border/60 bg-bg-card p-6 transition-colors hover:border-accent/60">
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
