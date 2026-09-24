"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 animate-blob rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute top-32 right-1/4 h-72 w-72 animate-blob rounded-full bg-accent-cyan/20 blur-3xl [animation-delay:4s]" />

      <div className="container-custom relative py-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        {profile.role && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-2xl font-semibold tracking-tight text-fg-muted sm:text-4xl"
          >
            <span className="text-gradient">{profile.role}</span>
          </motion.h2>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-fg-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            View My Work
            <ArrowRight size={14} />
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium transition-colors hover:border-accent/60"
            >
              <Download size={14} />
              Download CV
            </a>
          )}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-fg-muted sm:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
