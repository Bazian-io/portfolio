"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { Project } from "../data/projects";

export default function ScreenshotViewer({
  title,
  screenshot,
}: {
  title: string;
  screenshot: NonNullable<Project["screenshot"]>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();
  const headingId = useId();
  const [zoomed, setZoomed] = useState(false);

  return (
    <figure className="screenshot-viewer">
      <button
        className="screenshot-trigger"
        type="button"
        aria-label={`Enlarge screenshot of ${title}`}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        onClick={() => {
          setZoomed(false);
          imageRef.current?.scrollTo(0, 0);
          dialogRef.current?.showModal();
        }}
      >
        <span className="project-preview project-preview-image case-study-screenshot">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="(min-width: 1216px) 1120px, 90vw"
          />
        </span>
        <span className="screenshot-enlarge-label">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
          </svg>
          Enlarge screenshot
        </span>
      </button>
      <dialog
        className="screenshot-dialog"
        id={dialogId}
        ref={dialogRef}
        aria-labelledby={headingId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="screenshot-dialog-content">
          <div className="screenshot-dialog-toolbar">
            <h2 id={headingId}>{title}</h2>
            <div className="screenshot-dialog-actions">
              <button
                className="screenshot-control"
                type="button"
                aria-pressed={zoomed}
                onClick={() => setZoomed(!zoomed)}
              >
                {zoomed ? "Fit to screen" : "Zoom in"}
              </button>
              <button
                className="screenshot-control"
                type="button"
                autoFocus
                onClick={() => dialogRef.current?.close()}
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div
            className="screenshot-dialog-image"
            ref={imageRef}
            tabIndex={0}
            role="region"
            aria-label="Project screenshot. When zoomed, scroll to inspect the image."
          >
            <Image
              className={
                zoomed ? "screenshot-full screenshot-full-zoomed" : "screenshot-full"
              }
              src={screenshot.src}
              alt={screenshot.alt}
              width={1440}
              height={900}
              sizes={zoomed ? "1440px" : "96vw"}
            />
          </div>
        </div>
      </dialog>
    </figure>
  );
}
