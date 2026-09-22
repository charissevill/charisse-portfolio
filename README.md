# Charisse Villarama — Portfolio

A personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything text-based — your name, title, bio, tech stack, projects,
achievements, and gallery captions — lives in one file:

```
src/data/content.ts
```

Edit the values there; no other files need to change for content updates.

### Adding your resume

Drop your PDF into `public/cv/` and name it `Charisse-Villarama-CV.pdf`
(or update `resumeUrl` in `src/data/content.ts` to match your filename).
The "Download CV" buttons in the navbar and hero section will pick it up
automatically.

### Adding gallery photos

Drop images into `public/gallery/`, then set the `src` field on the
matching entry in the `gallery` array in `src/data/content.ts`
(e.g. `"/gallery/1.jpg"`). Entries without a `src` render as placeholder
tiles so the section still looks intentional until you add real photos.

### Adding project/social links

Update `link` on each project, and `socials` / `email` in the `profile`
object, in `src/data/content.ts`.

## Project structure

```
src/
  app/            Root layout, global styles, page composition
  components/     One component per section (Hero, About, Projects, ...)
  data/content.ts All editable site content
  lib/             Small client-side hooks (active-section tracking)
public/
  cv/             Your resume PDF goes here
  gallery/        Your gallery images go here
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and
   click "New Project".
3. Select this repository — Vercel auto-detects Next.js, so the default
   build settings work as-is.
4. Click Deploy. You'll get a live URL (e.g. `charisse-portfolio.vercel.app`)
   that updates automatically on every push to your main branch.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
- [lucide-react](https://lucide.dev/) for icons
