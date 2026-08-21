# MEAL Bridge Website

The redesigned website for **MEAL Bridge Consulting LLC**. The project uses a shared responsive design system across the Home, Solutions, Academy, About, and Contact pages.

## Technology

- Next.js / React
- TypeScript
- Shared CSS in `app/globals.css`
- Vinext and Vite for the Cloudflare-compatible production build

Page markup is written in `.tsx` files under `app/`. These components render the final HTML in the browser.

## Main pages

| Page | Source file |
| --- | --- |
| Home | `app/page.tsx` |
| Solutions | `app/services/page.tsx` |
| Academy | `app/academy/page.tsx` |
| About | `app/about/page.tsx` |
| Contact | `app/contact/page.tsx` |

Shared navigation, footer, headings, icons, and forms are in `app/components/`.

## Manual image replacement

The simplest method is to replace an image in `public/assets/` with a new file using the **same filename and extension**. No code changes are then required.

| Website placement | Replace this file | Recommended format |
| --- | --- | --- |
| Home hero and Solutions integrated-system section | `public/assets/evidence-to-impact.webp` | Landscape WebP, about 1600 × 900 px |
| Home evidence-to-impact diagram | `public/assets/meal-ecosystem.webp` | Landscape WebP, about 1600 × 1067 px |
| About founder portrait | `public/assets/humam-alherk.webp` | Portrait WebP, about 1200 × 1440 px |
| Header logo | `public/assets/meal-bridge-logo.png` | Transparent PNG |
| Social sharing preview | `public/og.png` | PNG, exactly 1200 × 630 px |

Keep the subject comfortably inside the frame because responsive layouts crop images differently on phones and large screens. Optimize images before uploading; WebP is preferred for photography.

If a filename or extension changes, update its matching reference in the relevant page file. Current image references can be found by searching the project for `/assets/`.

## Run locally

Requirements:

- Node.js 22.13 or newer
- npm

Install dependencies and start the local development server:

```bash
npm ci
npm run dev
```

Create a production build:

```bash
npm run build
```

## Upload to GitHub

Upload the contents of this project folder to the root of a GitHub repository. Keep `package.json`, `package-lock.json`, `app/`, `public/`, `build/`, `scripts/`, and the configuration files together.

Do not upload generated folders such as `node_modules/`, `dist/`, `.next/`, `.wrangler/`, or `.sites-runtime/`; they are excluded by `.gitignore`.

This source project targets a Cloudflare-compatible runtime. GitHub can store and version the source, but GitHub Pages does not run a Next.js/Worker project directly without a separate static-export setup.

## Contact form

The Contact page currently sends submissions to the existing Formspree endpoint configured in `app/components/ContactForm.tsx`. Test that endpoint after connecting the final domain.

## Site structure

```text
app/                 Pages, shared components, metadata, and CSS
public/              Images, logo, favicon, and social preview
build/               Build integration
scripts/             Install and production-build helpers
tests/               Rendered metadata checks
worker/              Cloudflare Worker entry point
package.json         Dependencies and project commands
vite.config.ts       Vite/Vinext build configuration
```
