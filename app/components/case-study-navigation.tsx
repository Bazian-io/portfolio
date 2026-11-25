"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "business-problem", label: "Business problem" },
  { id: "technical-implementation", label: "Implementation" },
];

export default function CaseStudyNavigation() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const menu = navRef.current;
    if (!menu) return;
    const intro = menu.previousElementSibling;
    const article = menu.closest("article");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | null = null;

    const updateActiveSection = () => {
      frame = null;
      const offset = menu.offsetHeight + 24;
      const menuStyle = getComputedStyle(menu);
      const stickyTop = parseFloat(menuStyle.top);
      let current = sections[0].id;

      for (const section of sections) {
        const bounds = document.getElementById(section.id)?.getBoundingClientRect();
        if (!bounds) continue;
        if (bounds.top <= stickyTop + offset + 1) {
          current = section.id;
        }

        if (section.id === "technical-implementation" && intro) {
          // The intro stays in normal flow, even after the menu sticks.
          // With reduced motion the header stays above the menu for the whole read.
          const start = intro.getBoundingClientRect().bottom
            + parseFloat(menuStyle.marginTop) - (reducedMotion.matches ? stickyTop : 0);
          const end = bounds.bottom - window.innerHeight;
          const progress = Math.max(0, Math.min(1, -start / Math.max(1, end - start)));
          menu.style.setProperty("--reading-progress", String(progress));
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1
      ) {
        current = sections[sections.length - 1].id;
      }

      article?.style.setProperty("--case-study-scroll-offset", `${offset}px`);
      setActiveSection(current);
    };

    function scheduleUpdate() {
      if (frame === null) frame = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    menu.addEventListener("transitionend", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      menu.removeEventListener("transitionend", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      className="case-study-navigation"
      aria-label="Case study sections"
      ref={navRef}
    >
      <ul className="container">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
