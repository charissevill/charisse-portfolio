import { Github, Mail } from "lucide-react";
import { profile } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const github = profile.socials.find((s) => s.label === "GitHub");

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-custom relative">
        <Reveal>
          <SectionHeading index="06." title="Contact" icon={Mail} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border/60 bg-bg-card p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Let&apos;s build something together.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-fg-muted">
              I&apos;m open to internships, junior roles, and collaborative
              projects. Feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-cyan px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium transition-colors hover:border-accent/60"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
