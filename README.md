# Portfolio

A minimal Next.js portfolio using the App Router and TypeScript. The homepage features an introduction and a responsive Selected Projects grid. View Projects scrolls to that showcase. The Projects page reuses the same showcase, with cards linking to individual case studies. About covers commercial leadership, technical work, professional background, qualifications, languages, and tools. All pages share a navigation bar, footer, and neutral color palette.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit `app/page.tsx` to add homepage content, `app/components/site-header.tsx` for navigation, and `app/globals.css` for styling. The shared page shell lives in `app/layout.tsx`.

The shared introductory sentence and homepage summary live in `app/data/profile.ts`. The full About background is in `app/about/page.tsx`. Home and the brand link return to the top of the homepage. In-page scrolling respects the visitor’s reduced-motion preference.

The About page pairs section headings with readable content columns on desktop and stacks them on smaller screens. Career highlights use distinct blocks, while education and languages share a compact qualifications panel. The MIT program is explicitly marked as in progress.

The About page ends with a Get in touch section using the email and LinkedIn URL from `app/data/profile.ts`. Email opens the visitor’s mail app; LinkedIn opens in a new tab.

The About tools section uses `app/components/tools-section.tsx`, with tool names and categories in `app/data/tools.ts`. Set a group’s `learning` flag to show “Currently learning”. Tools use equally styled tags without proficiency ratings.

Public identity and contact links live in `app/data/profile.ts`. `app/icon.svg` provides the favicon, and `app/opengraph-image.tsx` generates the social-sharing image using Next.js without external services. Metadata uses the Vercel production hostname when available; set `NEXT_PUBLIC_SITE_URL` to a full URL such as `https://your-domain.com` for another deployment or a custom domain. Local development defaults to `http://localhost:3000`.

Project content lives in `app/data/projects.ts`. The optional `summary`, `overview`, `businessProblem`, `implementation`, `screenshot`, `liveUrl`, and `githubUrl` fields can be filled in as information becomes available. A screenshot includes a local `src` path and descriptive `alt` text; store its image in `public/projects/`. Missing content, screenshots, and links display clearly labeled placeholders.

`app/projects/[slug]/page.tsx` generates a case-study page for each project using the shared `app/components/project-case-study.tsx` layout. Responsive screenshots and their placeholders are shared through `app/components/project-screenshot.tsx`. Project images are captures of the GCC HealthTech News homepage and the Stock Positioning Tracker investor dashboard. Unknown project URLs return a 404 page.

## Production

```bash
npm run build
npm start
```

Run `npm run typecheck` to check TypeScript types.
