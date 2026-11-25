"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const targets = "[data-reveal], [data-reveal-stagger] > *";

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const main = document.getElementById("main-content");
    if (!main || !root.classList.contains("reveal-js")) return;

    for (const group of main.querySelectorAll("[data-reveal-stagger]")) {
      Array.from(group.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.setProperty("--motion-index", String(index));
        }
      });
    }

    const elements = main.querySelectorAll(targets);
    let observer: IntersectionObserver;
    let height: number | undefined;

    function reveal(element: Element) {
      element.setAttribute("data-revealed", "");
      observer.unobserve(element);
    }

    function observe() {
      if (height === window.innerHeight) return;
      height = window.innerHeight;
      observer?.disconnect();
      // Percentage root margins use the viewport width, including on the vertical axis.
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            reveal(entry.target);
          }
        }
      }, { rootMargin: `0px 0px -${height * 0.1}px 0px` });

      for (const element of elements) {
        if (!element.hasAttribute("data-revealed")) observer.observe(element);
      }
    }

    function onFocus(event: FocusEvent) {
      const target = event.target instanceof Element && event.target.closest(targets);
      if (target) reveal(target);
    }

    observe();
    root.setAttribute("data-reveal-ready", "");
    main.addEventListener("focusin", onFocus);
    window.addEventListener("resize", observe);
    return () => {
      observer.disconnect();
      main.removeEventListener("focusin", onFocus);
      window.removeEventListener("resize", observe);
    };
  }, [pathname]);

  return null;
}
