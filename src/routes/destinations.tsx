import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { DESTINATIONS } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Baneshwari Tour & Travels" },
      { name: "description", content: "Explore top Indian destinations — Kerala, Kashmir, Rajasthan, Goa, Himachal, Andaman and more." },
      { property: "og:title", content: "Destinations across India — Baneshwari Tour & Travels" },
      { property: "og:description", content: "Handpicked destinations from mountains to backwaters, beaches to deserts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Padharo mhare des" title="Destinations we love">From misty Nilgiris to Kashmir's meadows, from Thar dunes to Andaman lagoons—pick a corner and we'll build the trip.</PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <motion.a key={d.slug} href={waLink(`Hi, I'd like package options for ${d.name}.`)} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
              className="group relative block overflow-hidden border-b-4 border-gold shadow-soft">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.image} alt={d.name} loading="lazy" width={1200} height={1500}
                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <div className="inline-flex items-center gap-1 rounded-full bg-background/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur">
                  <MapPin className="h-3 w-3" /> {d.region}
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold">{d.name}</h3>
                <p className="text-sm text-primary-foreground/80">{d.packagesCount} curated packages</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}