import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";
import DebugCodexVisibility from "./components/debug-codex-visibility";
import SiteHeader from "./components/site-header";
import { profile } from "./data/profile";
import theme from "./data/theme.json";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-source-serif",
});

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Sales leadership. Practical AI.`,
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
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable}`}
      style={theme as CSSProperties}
    >
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <DebugCodexVisibility />
        <main className="main-content" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-identity">
              <p>© {new Date().getFullYear()} {profile.name}</p>
              <p>Sales · Business development · Applied AI</p>
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
