import { about } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="01." title="About" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
