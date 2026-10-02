import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Compass, HeartHandshake, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { SiteShell } from "@/components/site/SiteShell";
import { DESTINATIONS, PACKAGES, REVIEWS, heroImage } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajasthan Tours — Baneshwari Tour & Travels" },
      { name: "description", content: "Royal Rajasthan and India tours, taxis and custom journeys by Baneshwari Tour & Travels. Book directly on WhatsApp." },
      { property: "og:title", content: "Rajasthan Tours — Baneshwari Tour & Travels" },
      { property: "og:description", content: "Discover royal Rajasthan and handcrafted India journeys with personal service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } };

function Index() {
  const featured = PACKAGES.slice(0, 6);
  const destinations = DESTINATIONS.slice(0, 6);
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-4 border-gold bg-navy">
        <img src={heroImage} alt="Royal Rajasthan palace and heritage architecture" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1200} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="heritage-pattern absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-primary-foreground">
            <div className="mb-7 w-fit rounded-sm bg-background p-3 shadow-elevated"><BrandLogo /></div>
            <span className="section-kicker border-gold/50 bg-background/10 text-gold"><Sparkles className="mr-2 h-3.5 w-3.5" /> Rajasthan se, dil se</span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">Experience the <span className="text-gold">soul</span> of Rajasthan</h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">शाही किलों, सुनहरे धोरों और रंगीन परंपराओं से सजी यादगार यात्राएँ—आपके लिए व्यक्तिगत रूप से तैयार।</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={waLink("Namaste, I'd like to plan a royal Rajasthan journey.")} target="_blank" rel="noreferrer" className="royal-button px-7 py-3.5"><MessageCircle className="h-5 w-5" /> Book your royal tour</a>
              <Link to="/packages" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-background/10 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/20">Explore packages <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
          <div className="hidden h-[34rem] items-end justify-end lg:flex">
            <div className="w-72 border-4 border-gold/50 bg-navy/90 p-6 text-primary-foreground shadow-elevated">
              <p className="font-display text-2xl font-bold text-gold">17+ years</p>
              <p className="mt-2 text-sm text-primary-foreground/75">Trusted journeys, local knowledge and warm Rajasthani hospitality.</p>
            </div>
          </div>
        </div>
        <div className="heritage-stripe" aria-hidden="true" />
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[{ k: "17+", v: "Years of trust" }, { k: "12K+", v: "Happy travellers" }, { k: "120", v: "Curated tours" }, { k: "4.9★", v: "Traveller rating" }].map((s) => (
            <div key={s.v} className="border-r border-border px-4 py-7 text-center last:border-r-0"><div className="font-display text-2xl font-bold text-primary">{s.k}</div><div className="mt-1 text-xs font-semibold uppercase text-muted-foreground">{s.v}</div></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center"><span className="section-kicker border-primary/25 bg-secondary text-primary">Padharo mhare des</span><h2 className="mt-5 text-4xl font-bold text-navy sm:text-5xl">Hospitality with a royal heart</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Real people, trusted local partners and journeys shaped around your family.</p></div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[{ icon: HeartHandshake, title: "Personal WhatsApp planning", body: "Talk directly to a travel expert and shape every detail without lengthy forms." }, { icon: Compass, title: "Local Rajasthan knowledge", body: "Verified drivers and guides who know the forts, food, folk culture and hidden routes." }, { icon: Award, title: "Made for your family", body: "Change stays, pace, vehicles and experiences until the journey feels completely yours." }].map((f, i) => (
            <motion.article key={f.title} {...reveal} transition={{ duration: 0.55, delay: i * 0.06 }} className="group border-t-4 border-primary bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary"><f.icon className="h-6 w-6" /></div><h3 className="mt-6 text-xl font-bold text-navy">{f.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/55 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><span className="section-kicker border-primary/25 bg-background text-primary">Popular journeys</span><h2 className="mt-5 text-4xl font-bold text-navy sm:text-5xl">Handpicked royal escapes</h2></div><Link to="/packages" className="inline-flex items-center gap-2 font-semibold text-primary">View all <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <motion.article key={p.slug} {...reveal} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} className="group overflow-hidden border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute right-3 top-3 bg-card px-3 py-1 text-xs font-semibold text-navy shadow-soft">From ₹{p.priceFrom.toLocaleString("en-IN")}</div></div>
                <div className="p-6"><div className="flex gap-3 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{p.destination}</span><span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.duration}</span></div><h3 className="mt-3 text-xl font-bold text-navy">{p.title}</h3><p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p><a href={waLink(`Hi, I'd like details for the ${p.title} package.`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"><MessageCircle className="h-4 w-4" /> Enquire now</a></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center"><span className="section-kicker border-primary/25 bg-secondary text-primary">Choose your India</span><h2 className="mt-5 text-4xl font-bold text-navy sm:text-5xl">Destinations worth a story</h2></div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {destinations.map((d) => <Link key={d.slug} to="/destinations" className="group relative aspect-[3/4] overflow-hidden border-b-4 border-gold shadow-soft"><img src={d.image} alt={d.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground"><h3 className="text-lg font-bold">{d.name}</h3><p className="text-xs text-primary-foreground/70">{d.packagesCount} packages</p></div></Link>)}
        </div>
      </section>

      <section className="heritage-panel relative overflow-hidden py-24 text-primary-foreground"><div className="heritage-pattern absolute inset-0 opacity-10" aria-hidden="true" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center"><span className="section-kicker border-gold/40 bg-background/10 text-gold">Traveller stories</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Memories carried home</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{REVIEWS.map((r) => <article key={r.name} className="border border-gold/25 bg-background/10 p-6 backdrop-blur"><div className="flex gap-1">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div><p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">“{r.text}”</p><p className="mt-5 font-semibold">{r.name}</p><p className="text-xs text-primary-foreground/60">{r.city}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"><div className="relative overflow-hidden border-4 border-gold bg-primary p-10 text-primary-foreground shadow-elevated sm:p-16"><div className="heritage-pattern absolute inset-0 opacity-10" aria-hidden="true" /><div className="relative grid gap-8 md:grid-cols-2 md:items-center"><div><h2 className="text-4xl font-bold sm:text-5xl">Your royal journey awaits.</h2><p className="mt-4 max-w-lg text-primary-foreground/85">अपनी तारीख और पसंद बताइए—हम आपके लिए यादगार सफर तैयार करेंगे।</p></div><div className="flex flex-wrap gap-3 md:justify-end"><a href={waLink("Namaste, I'd like to plan a trip.")} target="_blank" rel="noreferrer" className="royal-button px-7 py-3.5"><MessageCircle className="h-5 w-5" /> Start on WhatsApp</a><Link to="/contact" className="inline-flex items-center rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold">Contact us</Link></div></div></div></section>
    </SiteShell>
  );
}