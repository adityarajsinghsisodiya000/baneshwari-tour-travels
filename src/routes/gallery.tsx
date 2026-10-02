import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { PACKAGES, DESTINATIONS } from "@/lib/data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Baneshwari Tour & Travels" },
      { name: "description", content: "Moments and memories from our travellers across India." },
      { property: "og:title", content: "Gallery — Baneshwari Tour & Travels" },
      { property: "og:description", content: "Moments captured on Baneshwari Tour & Travels journeys across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const images = [...PACKAGES.map((p) => ({ src: p.image, alt: p.title })), ...DESTINATIONS.map((d) => ({ src: d.image, alt: d.name }))];
  return (
    <SiteShell>
      <PageHero eyebrow="Rangilo Rajasthan" title="Frames from our travellers">A little peek into the sunrises, feasts and detours our guests come home with.</PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {images.map((img, i) => (
            <motion.img key={i} src={img.src} alt={img.alt} loading="lazy"
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="w-full border-b-4 border-gold shadow-soft" />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}