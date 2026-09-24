"use client";

import {
  Award,
  Code2,
  Download,
  FolderGit2,
  ImageIcon,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { nav, profile } from "@/data/content";
import { useActiveSection } from "@/lib/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const navIcons: Record<string, typeof User> = {
  About: User,
  Technologies: Code2,
  Projects: FolderGit2,
  Achievements: Award,
  Gallery: ImageIcon,
  Contact: Mail,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(nav.map((n) => n.href.replace("#", "")));

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-cyan text-xs font-bold text-white">
            {profile.initials}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            const Icon = navIcons[item.label];
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center gap-1.5 pb-1 text-sm transition-colors ${
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {Icon && (
                  <Icon
                    size={14}
                    className={isActive ? "text-accent" : ""}
                  />
                )}
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-accent to-accent-cyan transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Download size={14} />
              Download CV
            </a>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-bg md:hidden">
          <nav className="container-custom flex flex-col gap-4 py-6">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              const Icon = navIcons[item.label];
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {Icon && (
                    <Icon
                      size={14}
                      className={isActive ? "text-accent" : ""}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg"
                >
                  <Download size={14} />
                  Download CV
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
