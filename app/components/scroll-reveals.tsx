"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const targets = "[data-reveal], [data-reveal-mobile], [data-reveal-stagger] > *";
const aboutMobileTargets =
  ".about :is(.career-highlights, .building-principles, .tools-grid, .qualification-grid)[data-reveal-stagger] > *";

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const touch = window.matchMedia("(width < 900px) and (hover: none)");
    // Safari needs a touchstart listener before it applies :active on touch.
    const enableActive = () => {};
    const sync = () => {
      if (touch.matches) document.addEventListener("touchstart", enableActive, { passive: true });
      else document.removeEventListener("touchstart", enableActive);
    };
    sync();
    touch.addEventListener("change", sync);
    return () => {
      touch.removeEventListener("change", sync);
      document.removeEventListener("touchstart", enableActive);
    };
  }, []);

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
    const individualItems = new Set(main.querySelectorAll(aboutMobileTargets));
    const mobile = window.matchMedia("(width < 900px)");
    let observer: IntersectionObserver;
    let individualObserver: IntersectionObserver | undefined;
    let height: number | undefined;
    let individual = false;

    function reveal(element: Element) {
      element.setAttribute("data-revealed", "");
      observer.unobserve(element);
      individualObserver?.unobserve(element);
    }

    function revealIndividual(entries: IntersectionObserverEntry[], source: IntersectionObserver) {
      if (source !== individualObserver) return;

      const nextIndex = new Map<Element, number>();
      for (const { target, isIntersecting, boundingClientRect } of entries) {
        if (!isIntersecting || target.hasAttribute("data-revealed")) continue;

        if (boundingClientRect.bottom <= 0) {
          target.setAttribute("data-reveal-past", "");
        } else if (target instanceof HTMLElement && target.parentElement) {
          // Only siblings newly entering in this frame share a stagger.
          const group = target.parentElement;
          const index = nextIndex.get(group) ?? 0;
          target.style.setProperty("--about-item-index", String(index));
          nextIndex.set(group, index + 1);
        }
        reveal(target);
      }
    }

    function observe() {
      const nextIndividual = individualItems.size > 0 && mobile.matches;
      if (height === window.innerHeight && individual === nextIndividual) return;
      height = window.innerHeight;
      individual = nextIndividual;
      observer?.disconnect();
      individualObserver?.disconnect();
      individualObserver = undefined;
      // Percentage root margins use the viewport width, including on the vertical axis.
      const bottom = height * -0.1;
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            reveal(entry.target);
          }
        }
      }, { rootMargin: `0px 0px ${bottom}px 0px` });

      if (individual) {
        // Include the page above the line so jumps and restored scroll still
        // distinguish past items from items that have yet to enter.
        const top = document.documentElement.scrollHeight;
        individualObserver = new IntersectionObserver(revealIndividual, {
          rootMargin: `${top}px 0px ${bottom}px 0px`,
        });
      }

      for (const element of elements) {
        if (element.hasAttribute("data-revealed")) continue;
        const itemObserver = individualItems.has(element) ? individualObserver ?? observer : observer;
        itemObserver.observe(element);
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
    mobile.addEventListener("change", observe);
    return () => {
      observer.disconnect();
      individualObserver?.disconnect();
      individualObserver = undefined;
      main.removeEventListener("focusin", onFocus);
      window.removeEventListener("resize", observe);
      mobile.removeEventListener("change", observe);
    };
  }, [pathname]);

  return null;
}
