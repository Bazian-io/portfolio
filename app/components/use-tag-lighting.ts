"use client";

import { type RefObject, useEffect } from "react";

export function useTagLighting(
  containerRef: RefObject<HTMLElement | null>,
  groupSelector: string,
  desktopQuery: string,
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !("IntersectionObserver" in window)) return;
    const groups = container.querySelectorAll(groupSelector);
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
      // also light groups that have already passed out of the viewport.
      const top = document.documentElement.scrollHeight;
      const bottom = window.innerHeight * 0.3;
      observer = new IntersectionObserver((entries, source) => {
        if (source !== observer) return;
        for (const entry of entries) {
          // Allow a group to dim on return without animating its initial paint.
          if (entry.isIntersecting) entry.target.setAttribute("data-tags-entered", "");
          entry.target.toggleAttribute("data-lit", entry.isIntersecting);
          entry.target.toggleAttribute("data-lit-past", entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
        }
        container.setAttribute("data-tags-ready", "");
      }, { rootMargin: `${top}px 0px -${bottom}px 0px` });
      for (const group of groups) observer.observe(group);
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
  }, [containerRef, groupSelector, desktopQuery]);
}
