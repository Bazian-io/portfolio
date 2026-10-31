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
    let frame: number | null = null;

    function updateActiveSection() {
      frame = null;
      const offset = (navRef.current?.offsetHeight ?? 64) + 24;
      navRef.current?.closest("article")?.style.setProperty(
        "--case-study-scroll-offset",
        `${offset}px`,
      );
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= offset + 1) {
          current = section.id;
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1
      ) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection(current);
    }

    function scheduleUpdate() {
      if (frame === null) frame = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
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
      <ul>
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
