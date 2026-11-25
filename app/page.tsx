import Image from "next/image";
import Link from "next/link";
import ContactSection from "./components/contact-section";
import SelectedProjects from "./components/selected-projects";
import { profile } from "./data/profile";

export default function Home() {
  return (
    <div className="home">
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-opening">
          <div className="hero-identity">
            <h1 id="hero-heading"><span data-opening="0">{profile.name}</span></h1>
            <p className="hero-introduction" data-opening="1">
              I lead sales and business development, and I build my own tools <em>with AI</em>.
            </p>
          </div>
          <div className="hero-portrait">
            <div className="hero-portrait-settle">
              <Image
                src="/projects/bazian-prudens-portrait.jpg"
                alt="Portrait of Bazian Prudens"
                width={1288}
                height={1610}
                sizes="(min-width: 900px) min(503px, 65svh, calc(48.72vw - 47px)), (min-width: 56rem) calc(116vw - 56px), calc(116vw - 37px)"
                priority
              />
            </div>
          </div>
        </div>
        <div className="hero-support">
          <p className="hero-description" data-opening="2">
            Building my own software with AI helps me understand how AI products are developed, what problems they solve, and what buyers actually need from them. It also allows me to explore and test ideas before committing to a larger investment.
          </p>
          <div className="hero-actions" data-opening="3">
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
      <div className="band--light">
        <ul className="hero-proof-points">
          <li data-opening="4">Built sales from zero</li>
          <li data-opening="5">Rebuilt incentives for a 70+ person sales organization</li>
          <li data-opening="6">Founded and sold an agency</li>
        </ul>
      </div>
      <SelectedProjects />
      <ContactSection />
    </div>
  );
}
