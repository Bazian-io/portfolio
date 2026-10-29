# Portfolio

A minimal Next.js portfolio using the App Router and TypeScript. The homepage pairs your name and introduction with supporting text and links in two columns on desktop, stacking them on mobile. View Projects scrolls to the responsive Selected Projects grid, and About me opens your background page. Project cards include short purpose labels and link to individual case studies. The Projects page reuses the same showcase. About covers commercial leadership, technical work, professional background, qualifications, languages, and tools. All pages share a navigation bar, footer, and neutral color palette.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Edit `app/page.tsx` to add homepage content, `app/components/site-header.tsx` for navigation, and `app/globals.css` for styling. The shared page shell lives in `app/layout.tsx`.

The shared introductory sentence and homepage summary live in `app/data/profile.ts`. The full About background is in `app/about/page.tsx`. Home and the brand link return to the top of the homepage. In-page scrolling respects the visitor’s reduced-motion preference.

The About page pairs section headings with readable content columns on desktop and stacks them on smaller screens. Career highlights use distinct blocks, while education and languages share a compact qualifications panel. The MIT program is explicitly marked as in progress.

Home and About end with the shared `app/components/contact-section.tsx`, using the email and LinkedIn URL from `app/data/profile.ts`. Email opens the visitor’s mail app; LinkedIn opens in a new tab.

The About tools section uses `app/components/tools-section.tsx`, with tool names and categories in `app/data/tools.ts`. Set a group’s `learning` flag to show “Currently learning”. Tools use equally styled tags without proficiency ratings.

Public identity and contact links live in `app/data/profile.ts`. `app/icon.svg` provides the favicon, and `app/opengraph-image.tsx` generates the social-sharing image using Next.js without external services. Metadata uses the Vercel production hostname when available; set `NEXT_PUBLIC_SITE_URL` to a full URL such as `https://your-domain.com` for another deployment or a custom domain. Local development defaults to `http://localhost:3000`.

Project content lives in `app/data/projects.ts`. The optional `category`, `summary`, `overview`, `businessProblem`, `implementation`, `screenshot`, `liveUrl`, and `githubUrl` fields can be filled in as information becomes available. A screenshot includes a local `src` path and descriptive `alt` text; store its image in `public/projects/`. Missing content, screenshots, and links display clearly labeled placeholders.

`app/projects/[slug]/page.tsx` generates a case-study page for each project using the shared `app/components/project-case-study.tsx` layout. Responsive screenshots and their placeholders are shared through `app/components/project-screenshot.tsx`. Project images are captures of the GCC HealthTech News homepage and the Stock Positioning Tracker investor dashboard. Unknown project URLs return a 404 page.

## Production

```bash
npm run build
npm start
```

Run `npm run typecheck` to check TypeScript types.

## Security

`next.config.ts` applies security headers to every route: CSP, anti-framing protection, `nosniff`, an explicit referrer policy, and disabled camera, microphone, and location permissions. Vercel continues to provide HTTPS and HSTS.

The CSP allows same-origin resources and blocks external scripts, frames, plugins, form submissions, and inline event handlers. It follows the [Next.js CSP approach without nonces](https://nextjs.org/docs/app/guides/content-security-policy#without-nonces) to preserve static generation and CDN caching. Required inline scripts and styles remain allowed, so this is not a strict policy against inline script injection. Production disallows `eval`; development additionally allows `eval` and WebSocket connections for Next.js debugging and hot reload. Review the policy before adding third-party resources, forms, or embedded content.

Direct dependencies are pinned to the versions resolved in `package-lock.json`. Use `npm ci` for reproducible installs. Run `npm run security:check` regularly and before deployment to audit production and development dependencies. Review updates deliberately, then run the audit, type check, build, and browser checks before publishing the updated lockfile.
