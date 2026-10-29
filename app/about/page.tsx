import type { Metadata } from "next";
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
          Business leadership.
          <span>Practical technology.</span>
        </h1>
        <p className="page-introduction">{profile.introduction}</p>
        <p className="about-summary">
          My work combines commercial experience with the ability to turn business
          problems into working software.
        </p>
      </header>
      <div className="about-content">
        <section className="about-section" aria-labelledby="commercial-heading">
          <h2 id="commercial-heading">Commercial leadership</h2>
          <ul className="career-highlights about-section-body">
            <li>
              <h3>From founding an agency to acquisition</h3>
              <p>
                I founded a communications agency, grew it to <strong>12 people</strong>,
                and led it through its acquisition.
              </p>
            </li>
            <li>
              <h3>Building Divaco’s sales function</h3>
              <p>
                As Head of Sales at Divaco, a research-based startup, I built the
                sales function <strong>from zero</strong> and made the company profitable and
                ready for investors.
              </p>
            </li>
            <li>
              <h3>Sales incentives and coaching</h3>
              <p>
                I redesigned the incentives and coaching of a sales organization
                with <strong>more than 70 salespeople</strong>.
              </p>
            </li>
          </ul>
        </section>
        <section className="about-section" aria-labelledby="building-heading">
          <h2 id="building-heading">Turning business problems into software</h2>
          <div className="about-section-body">
            <p>
              I build web applications from the front end to the database, using AI
              coding tools.
            </p>
            <p>
              When I identify a business problem, I can build a working first version
              myself and test whether it solves the problem before larger
              investments are made.
            </p>
          </div>
        </section>
        <section className="about-section" aria-labelledby="background-heading">
          <h2 id="background-heading">Background</h2>
          <div className="about-section-body">
            <h3>Trust in high-stakes situations</h3>
            <p>
              Before my business career, I worked as an ER nurse at Helsinki
              University Hospital and as an interpreter for the U.S. military in
              Iraq.
            </p>
            <p>
              Both roles required earning trust quickly. That experience shapes how
              I approach technology: a tool only creates value when people trust it
              and use it.
            </p>
          </div>
        </section>
        <section className="about-section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education and credentials</h2>
          <div className="qualification-panel about-section-body">
            <ul className="qualification-grid">
              <li>
                <h3>Master’s degree</h3>
                <p>
                  International Business &amp; Entrepreneurship, LUT University.
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
                <p>Finnish, Kurdish, and English, with intermediate Arabic.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <ToolsSection />
    </section>
  );
}
