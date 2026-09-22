import type { LucideIcon } from "lucide-react";

export default function SectionHeading({
  index,
  title,
  icon: Icon,
}: {
  index: string;
  title: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="mb-10 flex items-center gap-3">
      {Icon && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon size={16} />
        </span>
      )}
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-border/60" />
    </div>
  );
}
