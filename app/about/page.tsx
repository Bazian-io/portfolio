import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import CommercialLeadership from "./commercial-leadership";
import ContactSection from "../components/contact-section";
import ToolsSection from "../components/tools-section";
import { profile } from "../data/profile";

import "./about-motion.css";

const backgroundQuote = "Listen first, and truly understand what the other person needs.";
const quoteWords = backgroundQuote.split(" ");

export const metadata: Metadata = {
  title: "About",
  description:
    "Bazian Prudens’s background in sales, entrepreneurship, healthcare, and AI-assisted software development, with education and professional credentials.",
};

export default function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <header className="about-header container">
        <p className="hero-eyebrow" data-opening="0">About {profile.name}</p>
        <h1 className="about-title" id="about-heading" data-opening="1">
          Sales leadership.
          <span>Practical AI.</span>
        </h1>
        <p className="page-introduction" data-opening="2">
          I’m a sales and business development leader who also builds software with AI. Knowing both sides helps me understand what customers need, where a product gets stuck, and what is worth selling.
        </p>
      </header>
      <div className="about-content">
        <CommercialLeadership />
        <section className="about-section about-building container" aria-labelledby="building-heading">
          <h2 id="building-heading" data-reveal>Building with AI</h2>
          <div className="about-section-body">
            <ul className="building-principles" data-reveal-stagger>
              <li>
                <h3 className="building-label">What I build</h3>
                <ul className="building-list" role="list">
                  <li>Web applications</li>
                  <li>Databases</li>
                  <li>AI integrations</li>
                  <li>Data automation</li>
                  <li>Analytics and dashboards</li>
                  <li>Business prototypes</li>
                </ul>
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
                  I make sure the result can be trusted: correct calculations and clean data.
                </p>
              </li>
            </ul>
            <Link href="/projects" className="building-case-link" data-reveal>
              See the case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
        <section className="about-section band--light" aria-labelledby="background-heading">
          <h2 id="background-heading" data-reveal>Background</h2>
          <div className="about-section-body">
            <blockquote
              className="background-quote"
              style={{ "--word-count": quoteWords.length } as CSSProperties}
            >
              <span className="quote-transcript">{backgroundQuote}</span>
              <span className="quote-words" aria-hidden="true">
                {quoteWords.map((word, index) => (
                  <span key={index} style={{ "--word-index": index } as CSSProperties}>
                    {word}{index < quoteWords.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            </blockquote>
            <p data-reveal>
              Before my business career, I worked as an acute care nurse at Helsinki University Hospital and as an interpreter for the U.S. military in Iraq. Both roles taught me to earn trust fast, and that is still how I sell. It also shapes how I see AI: a tool only creates value when people trust it and use it.
            </p>
          </div>
        </section>
        <ToolsSection />
        <section className="about-section container" aria-labelledby="education-heading">
          <h2 id="education-heading" data-reveal>Education and credentials</h2>
          <div className="qualification-panel about-section-body">
            <ul className="qualification-grid" data-reveal-stagger>
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
        <ContactSection />
      </div>
    </section>
  );
}
