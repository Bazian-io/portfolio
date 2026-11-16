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
