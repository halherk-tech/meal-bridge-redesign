import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children, aside }: { eyebrow: string; title: ReactNode; children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div>
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          <h1>{title}</h1>
          <div className="page-hero-copy">{children}</div>
        </div>
        {aside && <div className="page-hero-aside">{aside}</div>}
      </div>
    </section>
  );
}
