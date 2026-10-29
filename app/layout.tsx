import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "A professional portfolio of applied AI, automation, and business solutions.",
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
            <p>© {new Date().getFullYear()} Portfolio</p>
            <p>Applied AI · Automation · Business solutions</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
