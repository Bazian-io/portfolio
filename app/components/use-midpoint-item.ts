"use client";

import { type RefObject, useEffect, useState } from "react";

/** Track the direct child at the viewport midpoint while the layout is active. */
export function useMidpointItem(containerRef: RefObject<HTMLElement | null>, mediaQuery: string) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !container.children.length) return;
    const items = Array.from(container.children);
    const layout = window.matchMedia(mediaQuery);
    let frame = 0;

    function measure() {
      frame = 0;
      if (!layout.matches) return;
      const middle = window.innerHeight / 2;
      const bounds = items.map((item) => item.getBoundingClientRect());
      const next = bounds.findIndex((item) => item.bottom >= middle);
      if (next === -1) {
        setActive(items.length - 1);
      } else if (next === 0 || bounds[next].top <= middle) {
        setActive(next);
      } else {
        // In a gap, retain the last active item in either scroll direction.
        setActive((previous) => previous ?? next - 1);
      }
    }

    function schedule() {
      if (layout.matches && !frame) frame = requestAnimationFrame(measure);
    }

    measure();
    layout.addEventListener("change", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pageshow", schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    return () => {
      cancelAnimationFrame(frame);
      layout.removeEventListener("change", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pageshow", schedule);
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [containerRef, mediaQuery]);

  return active;
}
