import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-gold bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="rounded-sm bg-background p-3"><BrandLogo compact /></div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              गढ़ में गढ़ चित्तौड़गढ़ — गढ़ दर्शन और संपूर्ण मेवाड़ यात्रा, 2008 से। WhatsApp-first, घर-जैसी सेवा।
            </p>
            <p className="mt-2 text-sm text-gold">Owner: {SITE.owner}</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/packages" className="hover:text-gold">Yatra Packages</Link></li>
              <li><Link to="/destinations" className="hover:text-gold">Mewar Circuit</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>Garh Darshan Packages</li>
              <li>Teerth Yatra (Sanwaliya Seth, Nathdwara)</li>
              <li>Taxi & Station/Airport Pickup</li>
              <li>Sedan · SUV · Tempo Traveller</li>
              <li>Custom Family Yatra</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{SITE.address}</li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Baneshwari Tour & Travels. All rights reserved.</p>
          <p>Handcrafted with care for Mewar yatris.</p>
        </div>
      </div>
    </footer>
  );
}