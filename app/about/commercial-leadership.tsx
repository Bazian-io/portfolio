"use client";

import { useRef } from "react";
import { useMidpointItem } from "../components/use-midpoint-item";

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
  const active = useMidpointItem(
    listRef,
    "(min-width: 900px), (prefers-reduced-motion: no-preference)",
    { ignoreItemTranslate: true },
  );

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
