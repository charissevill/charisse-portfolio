import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/content";

const iconMap: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-custom flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.label] ?? Mail;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-fg-muted transition-colors hover:border-accent/60 hover:text-fg"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
        <p className="text-xs text-fg-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
