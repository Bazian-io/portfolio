export default function ProjectScreenshot({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`project-preview ${className}`}
      role="img"
      aria-label={`Screenshot placeholder for ${title}`}
    >
      <div className="project-preview-placeholder">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8" cy="8" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span>Screenshot coming soon</span>
      </div>
    </div>
  );
}
