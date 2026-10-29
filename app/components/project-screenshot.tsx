import Image from "next/image";
import type { Project } from "../data/projects";

export default function ProjectScreenshot({
  title,
  screenshot,
  sizes = "(min-width: 1216px) 544px, (min-width: 768px) 45vw, 90vw",
  className = "",
}: {
  title: string;
  screenshot?: Project["screenshot"];
  sizes?: string;
  className?: string;
}) {
  if (screenshot) {
    return (
      <div className={`project-preview project-preview-image ${className}`}>
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes={sizes}
        />
      </div>
    );
  }

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
