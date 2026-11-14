"use client";

import { useEffect } from "react";

function overflowAncestor(el: Element) {
  let node: Element | null = el.parentElement;
  while (node) {
    const style = window.getComputedStyle(node);
    const clipped =
      style.overflow === "hidden" ||
      style.overflowY === "hidden" ||
      style.overflowX === "hidden";
    if (clipped) {
      const rect = node.getBoundingClientRect();
      return {
        tag: node.tagName,
        className: node.className,
        overflow: style.overflow,
        width: rect.width,
        height: rect.height,
      };
    }
    node = node.parentElement;
  }
  return null;
}

export default function DebugCodexVisibility() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("li, p, span, h1, h2, h3")).filter(
      (el) => (el.textContent ?? "").trim() === "Codex" || (el.textContent ?? "").includes("Codex"),
    );
    const details = nodes.map((el) => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        className: el.className,
        text: (el.textContent ?? "").slice(0, 80),
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        color: style.color,
        inViewport: rect.bottom > 0 && rect.top < window.innerHeight && rect.width > 0 && rect.height > 0,
        overflowParent: overflowAncestor(el),
      };
    });
    // #region agent log
    fetch("http://127.0.0.1:7502/ingest/4aebd9e1-8e57-4953-bc90-28d248b381c2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "bd92ce",
      },
      body: JSON.stringify({
        sessionId: "bd92ce",
        runId: "pre-fix",
        hypothesisId: "C",
        location: "debug-codex-visibility.tsx:useEffect",
        message: "Codex DOM visibility",
        data: {
          path: window.location.pathname,
          matchCount: nodes.length,
          details,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  return null;
}
