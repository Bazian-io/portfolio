import type { Project } from "../data/projects";

export default function TechnicalFlow({
  steps,
  note,
}: {
  steps: NonNullable<Project["technicalFlow"]>;
  note?: string;
}) {
  return (
    <figure className="technical-flow" aria-labelledby="technical-flow-heading">
      <figcaption id="technical-flow-heading">How the application works</figcaption>
      <ol className="technical-flow-steps">
        {steps.map(({ label, technologies }, index) => (
          <li key={label}>
            <span className="technical-flow-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{label}</h3>
            <p>{technologies}</p>
            {index < steps.length - 1 && (
              <svg
                className="technical-flow-arrow"
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
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            )}
          </li>
        ))}
      </ol>
      {note && <p className="technical-flow-note">{note}</p>}
    </figure>
  );
}
