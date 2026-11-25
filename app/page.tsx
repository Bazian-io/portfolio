import Link from "next/link";
import ContactSection from "./components/contact-section";
import SelectedProjects from "./components/selected-projects";
import { profile } from "./data/profile";

export default function Home() {
  return (
    <div className="home">
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-identity">
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero-introduction">
            I lead sales and business development, and I build my own tools <em>with AI</em>.
          </p>
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
        <div className="hero-support">
          <p className="hero-description">
            I’ve built sales from zero, rebuilt the incentives of a 70+ person sales organization, and founded and sold a communications agency.
          </p>
          <p className="hero-description">
            I also build my own software with AI, from market monitoring to investor research tools. Building it myself shows me how AI products are made, what buyers really need from them, and how to test an idea before a bigger investment is made.
          </p>
        </div>
      </section>
      <div className="band--light">
        <ul className="hero-proof-points">
          <li>Built sales from zero</li>
          <li>Rebuilt incentives for a 70+ person sales organization</li>
          <li>Founded and sold an agency</li>
        </ul>
      </div>
      <SelectedProjects />
      <ContactSection />
    </div>
  );
}
