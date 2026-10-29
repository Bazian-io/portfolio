import Link from "next/link";
import ContactSection from "./components/contact-section";
import SelectedProjects from "./components/selected-projects";
import { profile } from "./data/profile";

export default function Home() {
  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-identity">
          <p className="hero-eyebrow">Business thinking. Practical technology.</p>
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero-introduction">{profile.introduction}</p>
        </div>
        <div className="hero-support">
          <p className="hero-description">{profile.summary}</p>
          <div className="hero-actions">
            <a className="hero-button" href="#projects">
              View Projects
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <Link className="hero-about-link" href="/about">
              About me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <SelectedProjects />
      <ContactSection className="home-contact" />
    </div>
  );
}
