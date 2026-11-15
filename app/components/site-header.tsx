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
  const [heroHeadingVisible, setHeroHeadingVisible] = useState(true);
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isHomepage) return;

    if (!("IntersectionObserver" in window)) {
      setHeroHeadingVisible(false);
      return;
    }

    let intersectionObserver: IntersectionObserver | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let mutationObserver: MutationObserver | undefined;

    const observeHeading = () => {
      const heading = document.getElementById("hero-heading");
      const header = headerRef.current;
      if (!heading || !header) return false;

      const updateObserver = () => {
        intersectionObserver?.disconnect();
        const headerHeight = Math.ceil(header.getBoundingClientRect().height);
        const headingBounds = heading.getBoundingClientRect();
        setHeroHeadingVisible(
          headingBounds.bottom > headerHeight &&
            headingBounds.top < window.innerHeight,
        );
        intersectionObserver = new IntersectionObserver(
          ([entry]) => setHeroHeadingVisible(entry.isIntersecting),
          { rootMargin: `-${headerHeight}px 0px 0px 0px` },
        );
        intersectionObserver.observe(heading);
      };

      updateObserver();
      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(updateObserver);
        resizeObserver.observe(header);
      }
      return true;
    };

    if (!observeHeading()) {
      mutationObserver = new MutationObserver(() => {
        if (observeHeading()) mutationObserver?.disconnect();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      intersectionObserver?.disconnect();
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [isHomepage]);

  return (
    <header
      ref={headerRef}
      className={`site-header${isHomepage ? " site-header-home" : ""}`}
      data-brand-hidden={isHomepage && heroHeadingVisible ? "true" : undefined}
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
