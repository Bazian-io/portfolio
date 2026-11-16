import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "../components/contact-section";
import ToolsSection from "../components/tools-section";
import { profile } from "../data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bazian Prudens’s background in sales, entrepreneurship, healthcare, and AI-assisted software development, with education and professional credentials.",
};

export default function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <header className="about-header">
        <p className="hero-eyebrow">About {profile.name}</p>
        <h1 className="about-title" id="about-heading">
          Sales leadership.
          <span>Practical AI.</span>
        </h1>
        <p className="page-introduction">
          I’m a sales and business development leader who also builds software with AI. Knowing both sides helps me understand what customers need, where a product gets stuck, and what is worth selling.
        </p>
      </header>
      <div className="about-content">
        <section className="about-section about-commercial" aria-labelledby="commercial-heading">
          <h2 id="commercial-heading">Commercial leadership</h2>
          <ul className="career-highlights about-section-body">
            <li>
              <p className="career-figure">12 people</p>
              <h3>From founding an agency to acquisition</h3>
              <p>
                I founded a communications agency, grew it to 12 people,
                and led it through its acquisition.
              </p>
            </li>
            <li>
              <p className="career-figure">From zero</p>
              <h3>Building Divaco’s sales function</h3>
              <p>
                As Head of Sales at Divaco, a research-based startup, I built the
                sales function from zero and made the company profitable and
                ready for investors.
              </p>
            </li>
            <li>
              <p className="career-figure">€40k → €400k</p>
              <h3>Opening a new market on a small budget</h3>
              <p>
                I designed a partnership between Divaco, a mental performance consultancy and seven university researchers that turned €40k in cash into a project worth an estimated €400k. In the UAE, more than 100 companies took a free pilot and more than 10 became paying customers.
              </p>
            </li>
            <li>
              <p className="career-figure">70+ salespeople</p>
              <h3>Sales incentives and coaching</h3>
              <p>
                I redesigned the incentives and coaching of a sales organization
                with more than 70 salespeople.
              </p>
            </li>
          </ul>
        </section>
        <section className="about-section about-building" aria-labelledby="building-heading">
          <h2 id="building-heading">Building with AI</h2>
          <div className="about-section-body">
            <ul className="building-principles">
              <li>
                <h3 className="building-label">What I build</h3>
                <p>
                  I build web applications, databases and AI integrations using Cursor, Claude Code and Codex.
                </p>
              </li>
              <li>
                <h3 className="building-label">How I work</h3>
                <p>
                  When I see a business problem, I build a working first version myself and test whether it solves the problem before larger investments are made.
                </p>
              </li>
              <li>
                <h3 className="building-label">Quality</h3>
                <p>
                  I make sure the result can be trusted: correct calculations, clean data, and pages that work on any screen.
                </p>
              </li>
            </ul>
            <Link href="/projects" className="building-case-link">
              See the case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
        <section className="about-section" aria-labelledby="background-heading">
          <h2 id="background-heading">Background</h2>
          <div className="about-section-body">
            <blockquote className="background-quote">
              Listen first, and truly understand what the other person needs.
            </blockquote>
            <p>
              Before my business career, I worked as an ER nurse at Helsinki University Hospital and as an interpreter for the U.S. military in Iraq. Both roles taught me to earn trust fast, and that is still how I sell. It also shapes how I see AI: a tool only creates value when people trust it and use it.
            </p>
          </div>
        </section>
        <ToolsSection />
        <section className="about-section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education and credentials</h2>
          <div className="qualification-panel about-section-body">
            <ul className="qualification-grid">
              <li>
                <h3>Master’s degree</h3>
                <p>
                  Master of Science in Economics and Business Administration, International Business &amp; Entrepreneurship, LUT University.
                </p>
              </li>
              <li>
                <h3>PMP certification</h3>
                <p>Project Management Professional.</p>
              </li>
              <li>
                <div className="qualification-heading">
                  <h3>MIT Professional Education</h3>
                  <span className="qualification-status">In progress</span>
                </div>
                <p>
                  Currently completing the No Code and Agentic AI program.
                </p>
              </li>
              <li>
                <h3>Languages</h3>
                <p>Finnish and Kurdish (native), English (fluent), Arabic (intermediate).</p>
              </li>
            </ul>
          </div>
        </section>
        <ContactSection className="about-contact" />
      </div>
    </section>
  );
}
