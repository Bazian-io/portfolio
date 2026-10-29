import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <header>
        <p className="hero-eyebrow">About</p>
        <h1 className="page-title" id="about-heading">
          About Bazian Prudens
        </h1>
        <p className="page-introduction">
          I bring a business perspective to projects in applied AI, automation,
          and technology.
        </p>
      </header>
      <div className="about-copy">
        <p>
          My business background shapes my interest in practical technology:
          understanding a real-world problem, looking at the people and processes
          involved, and exploring how a technical solution could help.
        </p>
        <p>
          I’m interested in using applied AI and automation to simplify workflows
          and make information more useful for business decisions. This portfolio
          is a place to share those interests through my technical projects.
        </p>
        <p className="about-placeholder">
          Further background details, including professional roles and education,
          will be added here.
        </p>
      </div>
    </section>
  );
}
