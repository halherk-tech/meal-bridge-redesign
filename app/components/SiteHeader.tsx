"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Solutions" },
  { href: "/academy", label: "Academy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("nav-open", open);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="MEAL Bridge home">
          <img src="/assets/meal-bridge-logo.png" alt="MEAL Bridge Consulting LLC" />
        </Link>

        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <div className="mobile-nav-label">
            <span>Navigate</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation">
              <Icon name="x" />
            </button>
          </div>
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? "active" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
          <Link className="button button-primary mobile-nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Start a conversation <Icon name="arrow" />
          </Link>
        </nav>

        <div className="header-actions">
          <Link className="button button-primary header-cta" href="/contact">
            Start a conversation <Icon name="arrow" />
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>
      {open && <button className="nav-scrim" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </header>
  );
}
