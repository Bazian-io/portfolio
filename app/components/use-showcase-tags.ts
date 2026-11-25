"use client";

import { type RefObject, useEffect } from "react";

export function useShowcaseTags(containerRef: RefObject<HTMLElement | null>, desktopQuery: string) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !("IntersectionObserver" in window)) return;
    const rows = container.querySelectorAll(".showcase-story .project-technology-row");
    const desktop = window.matchMedia(desktopQuery);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;

    const observe = () => {
      observer?.disconnect();
      observer = undefined;
      if (desktop.matches || reduced.matches) {
        container.removeAttribute("data-tags-ready");
        return;
      }

      // Include the full page above the line, so jumps and scroll restoration
      // also light rows that have already passed out of the viewport.
      const top = document.documentElement.scrollHeight;
      const bottom = window.innerHeight * 0.3;
      observer = new IntersectionObserver((entries, source) => {
        if (source !== observer) return;
        for (const entry of entries) {
          entry.target.toggleAttribute("data-lit", entry.isIntersecting);
        }
        container.setAttribute("data-tags-ready", "");
      }, { rootMargin: `${top}px 0px -${bottom}px 0px` });
      for (const row of rows) observer.observe(row);
    };

    observe();
    window.addEventListener("resize", observe);
    window.addEventListener("pageshow", observe);
    desktop.addEventListener("change", observe);
    reduced.addEventListener("change", observe);
    return () => {
      observer?.disconnect();
      observer = undefined;
      container.removeAttribute("data-tags-ready");
      window.removeEventListener("resize", observe);
      window.removeEventListener("pageshow", observe);
      desktop.removeEventListener("change", observe);
      reduced.removeEventListener("change", observe);
    };
  }, [containerRef, desktopQuery]);
}
