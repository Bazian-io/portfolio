"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const heroSelector =
    pathname === "/"
      ? "#hero-heading"
      : pathname === "/about"
        ? ".about-header"
        : null;

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    let height = header.offsetHeight;
    let pivot = window.scrollY;
    let frame = 0;
    let anchorTimer = 0;

    const measure = () => {
      height = header.offsetHeight;
      root.style.setProperty("--site-header-height", `${height}px`);
    };

    function finishJump() {
      if (!anchorTimer) return;
      window.clearTimeout(anchorTimer);
      anchorTimer = 0;
      pivot = window.scrollY;
      if (pivot <= 0) root.removeAttribute("data-header-hidden");
    }

    function waitForAnchor() {
      window.clearTimeout(anchorTimer);
      // Also release for same-position jumps and browsers without scrollend.
      anchorTimer = window.setTimeout(finishJump, 180);
    }

    function beginJump() {
      root.setAttribute("data-header-hidden", "");
      waitForAnchor();
    }

    function onLinkClick(event: MouseEvent) {
      if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element && event.target.closest<HTMLAnchorElement>("a[href]");
      if (
        link && link.hash && (link.hash !== "#top" || window.scrollY > 0) &&
        link.origin === location.origin && link.pathname === location.pathname &&
        link.search === location.search
      ) {
        beginJump();
      }
    }

    function onHashChange() {
      if (location.hash && (location.hash !== "#top" || window.scrollY > 0)) beginJump();
    }

    function updateDirection() {
      frame = 0;
      const y = Math.max(0, Math.min(window.scrollY, root.scrollHeight - root.clientHeight));
      if (anchorTimer) waitForAnchor();
      if (y === 0) {
        root.removeAttribute("data-header-hidden");
        pivot = 0;
      } else if (anchorTimer) {
        root.toggleAttribute("data-header-hidden", true);
      } else if (root.hasAttribute("data-header-hidden")) {
        pivot = Math.max(pivot, y);
        if (pivot - y > 8) {
          root.removeAttribute("data-header-hidden");
          pivot = y;
        }
      } else {
        pivot = Math.min(pivot, y);
        if (y - Math.max(pivot, height) > 8) {
          root.setAttribute("data-header-hidden", "");
          pivot = y;
        }
      }
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(updateDirection);
    }

    measure();
    root.toggleAttribute("data-header-hidden", window.scrollY > height + 8);
    if (location.hash && (window.scrollY > 0 || document.querySelector(".case-study-section:target"))) {
      beginJump();
    }
    root.setAttribute("data-header-ready", "");
    const resize = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    resize?.observe(header);
    document.addEventListener("click", onLinkClick, true);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("wheel", finishJump, { passive: true });
    window.addEventListener("touchstart", finishJump, { passive: true });
    window.addEventListener("keydown", finishJump);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", finishJump);
    return () => {
      resize?.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(anchorTimer);
      document.removeEventListener("click", onLinkClick, true);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("wheel", finishJump);
      window.removeEventListener("touchstart", finishJump);
      window.removeEventListener("keydown", finishJump);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", finishJump);
    };
  }, [pathname]);

  useEffect(() => {
    if (!heroSelector) return;

    if (!("IntersectionObserver" in window)) {
      setHeroVisible(false);
      return;
    }

    let intersectionObserver: IntersectionObserver | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let mutationObserver: MutationObserver | undefined;

    const observeHero = () => {
      const hero = document.querySelector(heroSelector);
      const header = headerRef.current;
      if (!hero || !header) return false;

      const updateObserver = () => {
        intersectionObserver?.disconnect();
        const headerHeight = Math.ceil(header.getBoundingClientRect().height);
        const heroBounds = hero.getBoundingClientRect();
        setHeroVisible(
          heroBounds.bottom > headerHeight &&
            heroBounds.top < window.innerHeight,
        );
        intersectionObserver = new IntersectionObserver(
          ([entry]) => setHeroVisible(entry.isIntersecting),
          { rootMargin: `-${headerHeight}px 0px 0px 0px` },
        );
        intersectionObserver.observe(hero);
      };

      updateObserver();
      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(updateObserver);
        resizeObserver.observe(header);
      }
      return true;
    };

    if (!observeHero()) {
      mutationObserver = new MutationObserver(() => {
        if (observeHero()) mutationObserver?.disconnect();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      intersectionObserver?.disconnect();
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [heroSelector]);

  return (
    <header
      ref={headerRef}
      className={`site-header${heroSelector ? " site-header-with-hero" : ""}`}
      data-brand-hidden={heroSelector && heroVisible ? "true" : undefined}
    >
      <div className="container header-inner">
        <Link className="brand" href="/#top" aria-label={`${profile.name} home`}>
          <span className="brand-mark" aria-hidden="true" />
          {profile.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navigation.map(({ href, label }) => {
              const isCurrentPage = pathname === href;
              const isProjectDetail =
                href === "/projects" && pathname.startsWith("/projects/");

              return (
                <li key={href}>
                  <Link
                    className="nav-link"
                    href={href === "/" ? "/#top" : href}
                    aria-current={
                      isCurrentPage
                        ? "page"
                        : isProjectDetail
                          ? "location"
                          : undefined
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
