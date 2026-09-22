import { Mail } from "lucide-react";
import { profile } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="06." title="Contact" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-2xl rounded-2xl border border-border/60 bg-bg-card p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Let&apos;s build something together.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-fg-muted">
              I&apos;m open to internships, junior roles, and collaborative
              projects. Feel free to reach out.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
