import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/destinations", label: "Destinations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-background/90 backdrop-blur-xl">
      <div className="heritage-stripe" aria-hidden="true" />
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Baneshwari Tour & Travels home">
          <BrandLogo compact />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a href={waLink("Hi Baneshwari Tour & Travels, I'd like to plan a trip.")} target="_blank" rel="noreferrer"
               className="royal-button px-5 py-2.5 text-sm">
            Book on WhatsApp
          </a>
        </div>
        <button className="rounded-full border border-border p-2 text-navy lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-secondary">
                {n.label}
              </Link>
            ))}
            <a href={waLink("Hi Baneshwari Tour & Travels, I'd like to plan a trip.")} target="_blank" rel="noreferrer"
               className="royal-button mt-2 px-5 py-3 text-center text-sm">
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}