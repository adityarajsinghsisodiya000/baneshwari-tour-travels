import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="heritage-panel relative overflow-hidden py-20 text-primary-foreground">
      <div className="heritage-pattern absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="section-kicker border-gold/40 bg-background/10 text-gold">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-primary-foreground/80">{children}</p>
      </div>
    </section>
  );
}