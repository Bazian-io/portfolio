"use client";

import { type ReactNode, useEffect, useRef } from "react";

export default function ProofPoints({ children, as: List = "ul" }: {
  children: ReactNode;
  as?: "ul" | "ol";
}) {
  const listRef = useRef<HTMLUListElement | HTMLOListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !("IntersectionObserver" in window)) return;

    const points = Array.from(list.children);
    const mobileMotion = window.matchMedia("(width < 900px) and (prefers-reduced-motion: no-preference)");
    let observer: IntersectionObserver | undefined;

    const clearStates = () => {
      list.removeAttribute("data-proof-ready");
      for (const point of points) point.removeAttribute("data-lit");
    };

    const observe = () => {
      observer?.disconnect();
      observer = undefined;
      if (!mobileMotion.matches) {
        clearStates();
        return;
      }

      const viewportHeight = window.innerHeight;
      const lightAt = viewportHeight * 0.6;
      // Extend the root above the viewport so points that scroll past the
      // top stay lit and large jumps still produce the correct state.
      const aboveViewport = document.documentElement.scrollHeight;
      observer = new IntersectionObserver((entries, source) => {
        if (source !== observer) return;
        for (const entry of entries) {
          const line = entry.rootBounds?.bottom ?? lightAt;
          entry.target.toggleAttribute("data-lit", entry.boundingClientRect.top <= line);
        }
      }, { rootMargin: `${aboveViewport}px 0px ${lightAt - viewportHeight}px 0px` });

      for (const point of points) {
        point.toggleAttribute("data-lit", point.getBoundingClientRect().top <= lightAt);
        observer.observe(point);
      }
      list.setAttribute("data-proof-ready", "");
    };

    observe();
    mobileMotion.addEventListener("change", observe);
    window.addEventListener("resize", observe);
    window.addEventListener("pageshow", observe);
    return () => {
      observer?.disconnect();
      observer = undefined;
      clearStates();
      mobileMotion.removeEventListener("change", observe);
      window.removeEventListener("resize", observe);
      window.removeEventListener("pageshow", observe);
    };
  }, []);

  return (
    <List
      className={List === "ol" ? "case-study-overview-list" : "hero-proof-points"}
      role={List === "ol" ? "list" : undefined}
      ref={(list) => { listRef.current = list; }}
    >
      {children}
    </List>
  );
}
