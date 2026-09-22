import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
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
    </section>
  );
}
