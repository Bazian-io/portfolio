"use client";

import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    figure: "12 people",
    title: "From founding an agency to acquisition",
    description: "I founded a communications agency, grew it to 12 people, and led it through its acquisition.",
  },
  {
    figure: "From zero",
    title: "Building Divaco’s sales function",
    description: "As Head of Sales at Divaco, a research-based startup, I built the sales function from zero and made the company profitable and ready for investors.",
  },
  {
    figure: "€40k → €400k",
    title: "Winning first customers in a new market",
    description: "I designed a partnership between Divaco, a mental performance consultancy and seven university researchers that turned €40k in cash into a project worth an estimated €400k. In the UAE, more than 100 companies took a free pilot and more than 10 became paying customers.",
  },
  {
    figure: "70+ salespeople",
    title: "Sales incentives and coaching",
    description: "I redesigned the incentives and coaching of a sales organization with more than 70 salespeople.",
  },
];

export default function CommercialLeadership() {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const cards = Array.from(list.children);
    const desktop = window.matchMedia("(min-width: 900px)");
    let frame = 0;

    function measure() {
      frame = 0;
      const middle = window.innerHeight / 2;
      const bounds = cards.map((card) => card.getBoundingClientRect());
      const next = bounds.findIndex((card) => card.bottom >= middle);
      if (next === -1) {
        setActive(cards.length - 1);
      } else if (next === 0 || bounds[next].top <= middle) {
        setActive(next);
      } else {
        // In a gap, keep whichever card the reader just left in either direction.
        setActive((previous) => previous ?? next - 1);
      }
    }

    function schedule() {
      if (desktop.matches && !frame) frame = requestAnimationFrame(measure);
    }

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, []);

  return (
    <section
      className="about-section about-commercial band--light"
      aria-labelledby="commercial-heading"
      data-tracking={active !== null ? "" : undefined}
    >
      <div className="commercial-heading">
        <h2 id="commercial-heading" data-reveal>Commercial leadership</h2>
        <span className="commercial-counter" aria-hidden="true">
          {String((active ?? 0) + 1).padStart(2, "0")} / {String(highlights.length).padStart(2, "0")}
        </span>
      </div>
      <ul className="career-highlights about-section-body" ref={listRef} data-reveal-stagger>
        {highlights.map(({ figure, title, description }, index) => (
          <li key={title} data-active={index === active ? "" : undefined}>
            <p className="career-figure">{figure}</p>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
