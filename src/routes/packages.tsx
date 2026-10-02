import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Star } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { PACKAGES } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Yatra Packages — Baneshwari Tour & Travels" },
      { name: "description", content: "Chittorgarh Garh Darshan, Sanwaliya Seth, Nathdwara, Udaipur, Kumbhalgarh-Haldighati aur Sampoorn Mewar packages. WhatsApp पर बुक करें।" },
      { property: "og:title", content: "Yatra Packages — Baneshwari Tour & Travels" },
      { property: "og:description", content: "Garh darshan se sampoorn Mewar tak — haath se bane yatra packages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="मेवाड़ यात्रा" title="गढ़ से संपूर्ण मेवाड़ तक">हर itinerary एक शुरुआत है — रातें बढ़ाइए, होटल अपग्रेड कीजिए या दो सर्किट जोड़िए। WhatsApp पर बात करके अपना बनाइए।</PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
              className="group overflow-hidden border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" width={1200} height={900}
                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute right-3 top-3 bg-card/95 px-3 py-1 text-xs font-semibold text-navy shadow-soft">
                  ₹{p.priceFrom.toLocaleString("en-IN")} से
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{p.destination}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.duration}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">{h}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <a href={waLink(`राम राम सा! मुझे ${p.title} package की details चाहिए।`)} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                    <MessageCircle className="h-4 w-4" /> WhatsApp पर बुक करें
                  </a>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" /> 4.9
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 border-4 border-gold bg-secondary/40 p-10 text-center">
          <h3 className="font-display text-2xl font-semibold text-navy">मन में कोई और यात्रा है?</h3>
          <p className="mt-2 text-muted-foreground">हम 100% custom itinerary बनाते हैं — तारीख, बजट और मर्ज़ी बताइए।</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-royal px-6 py-3 font-semibold text-primary-foreground">
            अपनी यात्रा बनवाएँ
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}