"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/#top" aria-label="Portfolio home">
          <span className="brand-mark" aria-hidden="true" />
          Portfolio
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
