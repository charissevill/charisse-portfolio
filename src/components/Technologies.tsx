import { Code2 } from "lucide-react";
import { technologyGroups } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Technologies() {
  return (
    <section id="technologies" className="py-24">
      <div className="container-custom">
        <Reveal>
          <SectionHeading index="02." title="Technologies" icon={Code2} />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="rounded-2xl border border-border/60 bg-bg-card p-6">
                <h3 className="mb-4 font-mono text-sm text-accent">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 px-3 py-1 text-sm text-fg-muted transition-colors hover:border-accent/60 hover:text-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
