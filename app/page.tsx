import SelectedProjects from "./components/selected-projects";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <p className="hero-eyebrow">Business thinking. Practical technology.</p>
        <h1 id="hero-heading">Bazian Prudens</h1>
        <p className="hero-introduction">
          Applying AI, automation, and technology to real-world business problems.
        </p>
        <p className="hero-description">
          My business background shapes how I approach technical projects:
          starting with the problem, understanding the process, and working toward
          a practical solution.
        </p>
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
      </section>
      <SelectedProjects />
    </>
  );
}
