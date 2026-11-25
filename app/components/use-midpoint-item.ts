"use client";

import { type RefObject, useEffect, useState } from "react";

/** Track the direct child at the viewport midpoint while the layout is active. */
export function useMidpointItem(
  containerRef: RefObject<HTMLElement | null>,
  mediaQuery: string,
  { ignoreItemTranslate = false }: { ignoreItemTranslate?: boolean } = {},
) {
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
      const bounds = items.map((item) => {
        const rect = item.getBoundingClientRect();
        if (!ignoreItemTranslate) return rect;

        // A rise-in can still be moving when the reader stops at the midpoint.
        const [, y = "0"] = getComputedStyle(item).translate.split(" ");
        const offset = Number.parseFloat(y) || 0;
        return { top: rect.top - offset, bottom: rect.bottom - offset };
      });
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
  }, [containerRef, mediaQuery, ignoreItemTranslate]);

  return active;
}
