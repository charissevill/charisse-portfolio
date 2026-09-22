import { Award } from "lucide-react";
import { achievements } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="04." title="Achievements" />
        </Reveal>

        <div className="max-w-3xl space-y-4">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-border/60 bg-bg-card p-5 transition-colors hover:border-accent/60">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-fg-muted">
                    {item.date}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-sm text-fg-muted">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
