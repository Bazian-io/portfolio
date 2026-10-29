# Portfolio

A minimal Next.js portfolio using the App Router and TypeScript. The homepage features an introduction and a responsive Selected Projects grid. View Projects scrolls to that showcase. The Projects page reuses the same showcase, with cards linking to individual case studies. About introduces the business background and interests behind the portfolio, with a placeholder for further personal details. All pages share a navigation bar, footer, and neutral color palette.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit `app/page.tsx` to add homepage content, `app/components/site-header.tsx` for navigation, and `app/globals.css` for styling. The shared page shell lives in `app/layout.tsx`.

The About introduction is in `app/about/page.tsx`. Home and the brand link return to the top of the homepage. In-page scrolling respects the visitor’s reduced-motion preference.

Project content lives in `app/data/projects.ts`. The optional `summary`, `overview`, `businessProblem`, `implementation`, `liveUrl`, and `githubUrl` fields can be filled in as information becomes available. Missing content and links display clearly labeled placeholders.

`app/projects/[slug]/page.tsx` generates a case-study page for each project using the shared `app/components/project-case-study.tsx` layout. Screenshot placeholders are shared through `app/components/project-screenshot.tsx`. Unknown project URLs return a 404 page.

## Production

```bash
npm run build
npm start
```

Run `npm run typecheck` to check TypeScript types.
