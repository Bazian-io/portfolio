"use client";

import { type ReactNode, useRef } from "react";
import { useTagLighting } from "./use-tag-lighting";

export default function TagGroups({
  className,
  staggerReveals,
  children,
}: {
  className: string;
  staggerReveals?: boolean;
  children: ReactNode;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  useTagLighting(gridRef, ":scope > *", "(min-width: 900px)");

  return (
    <div
      className={className}
      data-stagger-tags
      data-reveal-stagger={staggerReveals || undefined}
      ref={gridRef}
    >
      {children}
    </div>
  );
}
