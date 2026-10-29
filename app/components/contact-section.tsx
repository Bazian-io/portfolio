import { profile } from "../data/profile";

export default function ContactSection({ className = "" }: { className?: string }) {
  return (
    <section
      className={`contact-section ${className}`}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Get in touch</h2>
      <div className="contact-section-body">
        <p>Have a project in mind or a question about my work? Let’s connect.</p>
        <ul className="contact-links" aria-label="Get in touch">
          <li>
            <a
              className="contact-link contact-link-primary"
              href={`mailto:${profile.email}`}
            >
              Email me
            </a>
          </li>
          <li>
            <a
              className="contact-link"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with ${profile.name} on LinkedIn (opens in a new tab)`}
            >
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
