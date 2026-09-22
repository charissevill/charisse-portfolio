import {
  BarChart3,
  Box,
  Cloud,
  Code2,
  CreditCard,
  Layers,
  Route,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  SiCss,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiMaterialdesign,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
} from "react-icons/si";
import { technologyGroups } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Mix of brand logos (react-icons/si) and generic fallbacks (lucide-react)
// for tools that don't have a Simple Icons entry.
const techIcons: Record<string, ComponentType<{ size?: number }>> = {
  Dart: SiDart,
  JavaScript: SiJavascript,
  Python: SiPython,
  PHP: SiPhp,
  HTML: SiHtml5,
  CSS: SiCss,
  Flutter: SiFlutter,
  React: SiReact,
  "Material Design": SiMaterialdesign,
  Provider: Layers,
  go_router: Route,
  fl_chart: BarChart3,
  Firebase: SiFirebase,
  "Node.js": SiNodedotjs,
  "Google Maps Platform": SiGooglemaps,
  OpenAI: Sparkles,
  Groq: Zap,
  "Meshy 3D": Box,
  "Azure AI": Cloud,
  PayMongo: CreditCard,
  Lalamove: Truck,
  Git: SiGit,
  GitHub: SiGithub,
  "GitHub Actions": SiGithubactions,
};

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
              <div className="rounded-2xl border border-border/60 bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                <h3 className="mb-4 font-mono text-sm text-accent">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = techIcons[item];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1 text-sm text-fg-muted transition-colors hover:border-accent/60 hover:bg-accent/5 hover:text-fg"
                      >
                        {Icon && <Icon size={14} />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
