"use client";

import { type ReactNode, useLayoutEffect, useRef } from "react";
import { useMidpointItem } from "./use-midpoint-item";
import { useTagLighting } from "./use-tag-lighting";
import "./project-showcase.css";

const pinnedLayout = "(min-width: 900px) and (min-height: 640px)";

type ShowcaseItem = {
  slug: string;
  screenshot: ReactNode;
  stack: ReactNode;
  text: ReactNode;
  action: ReactNode;
};

export default function ProjectShowcase({ items }: { items: ShowcaseItem[] }) {
  const storiesRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previewHasFocus = useRef(false);
  const active = useMidpointItem(storiesRef, pinnedLayout) ?? 0;
  useTagLighting(storiesRef, ".showcase-story .project-technology-row", pinnedLayout);

  // A keyboard user can scroll while the preview link is focused.
  useLayoutEffect(() => {
    if (previewHasFocus.current) {
      panelRef.current?.querySelector<HTMLAnchorElement>("[data-active] a")?.focus({ preventScroll: true });
    }
  }, [active]);

  return (
    <div className="project-showcase">
      <div
        className="showcase-panel"
        data-reveal
        ref={panelRef}
        onFocus={() => { previewHasFocus.current = true; }}
        onBlur={(event) => {
          if (!event.target.closest("[inert]")) previewHasFocus.current = false;
        }}
      >
        {items.map((item, index) => (
          <div
            className="showcase-slide"
            key={item.slug}
            data-active={index === active ? "" : undefined}
            inert={index !== active}
            aria-hidden={index !== active}
          >
            {item.screenshot}
            {item.stack}
          </div>
        ))}
      </div>
      <div className="showcase-stories" ref={storiesRef}>
        {items.map((item, index) => (
          <article
            className="project-card showcase-story reveal-settle"
            data-reveal
            key={item.slug}
            aria-labelledby={`${item.slug}-heading`}
            data-active={index === active ? "" : undefined}
          >
            {item.screenshot}
            {item.text}
            {item.stack}
            {item.action}
          </article>
        ))}
      </div>
    </div>
  );
}
