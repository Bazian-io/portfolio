import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "./components/site-header";
import { profile } from "./data/profile";
import "./globals.css";

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Applied AI & Automation`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  authors: [{ name: profile.name, url: profile.linkedinUrl }],
  openGraph: {
    type: "website",
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main className="container main-content" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-identity">
              <p>© {new Date().getFullYear()} {profile.name}</p>
              <p>{profile.focus}</p>
            </div>
            <nav aria-label="Contact links">
              <ul className="footer-links">
                <li>
                  <a href={`mailto:${profile.email}`}>Email</a>
                </li>
                <li>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${profile.name} on LinkedIn (opens in a new tab)`}
                  >
                    LinkedIn <span aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href={profile.githubUrl}>GitHub</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
