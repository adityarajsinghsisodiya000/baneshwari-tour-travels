import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Compass, HeartHandshake, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { SiteShell } from "@/components/site/SiteShell";
import { DESTINATIONS, FORT_FACTS, FORT_POINTS, KAHAVAT, PACKAGES, REVIEWS, heroImage } from "@/lib/data";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "गढ़ में गढ़ चित्तौड़गढ़ — Baneshwari Tour & Travels" },
      { name: "description", content: "Chittorgarh Fort darshan — 180 मीटर ऊँचा गढ़, 7 दरवाज़े, 84 कुंड-बावड़ी, 130+ मंदिर। Mewar yatra packages, local guide aur taxi — WhatsApp पर बुक करें।" },
      { property: "og:title", content: "गढ़ में गढ़ चित्तौड़गढ़ — Baneshwari Tour & Travels" },
      { property: "og:description", content: "Chittorgarh Garh darshan aur sampoorn Mewar yatra — personal Mewadi hospitality ke saath." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } };

function Index() {
  const featured = PACKAGES.slice(0, 6);
  const circuit = DESTINATIONS.slice(0, 6);
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-4 border-gold bg-navy">
        <img src={heroImage} alt="Chittorgarh Fort — Gaumukhi Kund aur Vijay Stambh" className="absolute inset-0 h-full w-full object-cover object-[center_30%]" width={1080} height={1440} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="bandhani-dots absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-primary-foreground">
            <div className="mb-7 w-fit rounded-sm bg-background p-3 shadow-elevated"><BrandLogo /></div>
            <span className="section-kicker border-gold/50 bg-background/10 text-gold"><Sparkles className="mr-2 h-3.5 w-3.5" /> गढ़ में गढ़ चित्तौड़गढ़</span>
            <h1 className="mt-6 font-hindi text-5xl leading-[1.15] sm:text-6xl lg:text-7xl">पधारो <span className="text-gold">चित्तौड़गढ़</span></h1>
            <p className="font-display mt-3 text-xl text-primary-foreground/90 sm:text-2xl">बाकी सब गढ़ैया</p>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">180 मीटर ऊँचा गढ़, 700 एकड़ में फैला दुर्ग, 7 महाद्वार, 84 कुंड-बावड़ी-तालाब और 130 से ज़्यादा मंदिर — एक बार पधारिए, हमें सेवा का अवसर दीजिए।</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={waLink("राम राम सा! मुझे चित्तौड़गढ़ गढ़ दर्शन की यात्रा plan करनी है।")} target="_blank" rel="noreferrer" className="royal-button px-7 py-3.5"><MessageCircle className="h-5 w-5" /> गढ़ दर्शन बुक करें</a>
              <Link to="/packages" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-background/10 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/20">यात्रा packages <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
          <div className="hidden h-[34rem] items-end justify-end lg:flex">
            <div className="w-72 border-4 border-gold/50 bg-navy/90 p-6 text-primary-foreground shadow-elevated">
              <p className="font-hindi text-2xl text-gold">मेवाड़ की धरती</p>
              <p className="mt-2 text-sm text-primary-foreground/75">स्थानीय मेवाड़ी गाइड, verified drivers और घर-जैसी मेहमाननवाज़ी।</p>
            </div>
          </div>
        </div>
        <div className="heritage-stripe" aria-hidden="true" />
      </section>

      <section className="heritage-panel relative overflow-hidden py-14 text-primary-foreground">
        <div className="bandhani-dots absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">चित्तौड़ की कहावत</p>
          {KAHAVAT.map((line) => (
            <p key={line} className="font-hindi mt-4 text-2xl leading-relaxed text-primary-foreground sm:text-3xl">{line}</p>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
          {FORT_FACTS.map((s) => (
            <div key={s.v} className="border-r border-border px-4 py-7 text-center last:border-r-0"><div className="font-hindi text-2xl text-primary sm:text-3xl">{s.k}</div><div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.v}</div></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center"><span className="section-kicker border-primary/25 bg-secondary text-primary">गढ़ दर्शन</span><h2 className="mt-5 text-4xl font-bold text-navy sm:text-5xl">किले के <span className="font-hindi text-primary">प्रमुख पॉइंट</span></h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">विजय स्तंभ से सूरजपोल तक — और भी छोटे-मोटे पॉइंट देखने के लिए हैं।</p></div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FORT_POINTS.map((f, i) => (
            <motion.article key={f.name} {...reveal} transition={{ duration: 0.55, delay: (i % 3) * 0.06 }} className="group border-t-4 border-primary bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3"><span className="font-hindi flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg text-primary">{i + 1}</span><h3 className="font-hindi text-xl text-navy">{f.name}</h3></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.article>
          ))}
          <motion.a href={waLink("राम राम सा! गढ़ के सभी पॉइंट की पूरी list और दर्शन plan चाहिए।")} target="_blank" rel="noreferrer" {...reveal} className="flex flex-col items-start justify-center border-4 border-dashed border-gold bg-secondary/40 p-6 transition hover:bg-secondary/70">
            <p className="font-hindi text-xl text-navy">और भी छोटे-मोटे पॉइंट…</p><p className="mt-2 text-sm text-muted-foreground">पूरी list WhatsApp पर पाइए।</p><span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">पूरी list मंगवाएँ <ArrowRight className="h-4 w-4" /></span>
          </motion.a>
        </div>
      </section>

      <section className="bg-secondary/55 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><span className="section-kicker border-primary/25 bg-background text-primary">यात्रा packages</span><h2 className="mt-5 text-4xl font-bold text-navy sm:text-5xl">गढ़ से <span className="font-hindi text-primary">संपूर्ण मेवाड़</span> तक</h2></div><Link to="/packages" className="inline-flex items-center gap-2 font-semibold text-primary">सभी देखें <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <motion.article key={p.slug} {...reveal} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} className="group overflow-hidden border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute right-3 top-3 bg-card px-3 py-1 text-xs font-semibold text-navy shadow-soft">₹{p.priceFrom.toLocaleString("en-IN")} से</div></div>
                <div className="p-6"><div className="flex gap-3 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{p.destination}</span><span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.duration}</span></div><h3 className="mt-3 text-xl font-bold text-navy">{p.title}</h3><p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p><a href={waLink(`राम राम सा! मुझे ${p.title} package की details चाहिए।`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp पर पूछें</a></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center"><span className="section-kicker border-primary/25 bg-secondary text-primary">मेवाड़ सर्किट</span><h2 className="mt-5 text-4xl font-bold text-navy sm:text-5xl">गढ़ के आसपास <span className="font-hindi text-primary">तीर्थ और शहर</span></h2></div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {circuit.map((d) => <Link key={d.slug} to="/destinations" className="group mehrab relative aspect-[3/4] overflow-hidden border-b-4 border-gold shadow-soft"><img src={d.image} alt={d.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground"><h3 className="font-hindi text-lg">{d.name}</h3><p className="text-xs text-primary-foreground/70">{d.region}</p></div></Link>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-3">
          {[{ icon: HeartHandshake, title: "सीधी WhatsApp planning", body: "लंबे फॉर्म नहीं — travel expert से सीधी बात, हर detail आपकी मर्ज़ी से।" }, { icon: Compass, title: "स्थानीय मेवाड़ी ज्ञान", body: "गढ़ के हर दरवाज़े, हर कुंड और हर कहानी को जानने वाले verified गाइड और ड्राइवर।" }, { icon: Award, title: "परिवार जैसा माहौल", body: "ठहराव, गति, गाड़ी और दर्शन-क्रम — बुजुर्गों से बच्चों तक, सबके हिसाब से।" }].map((f, i) => (
            <motion.div key={f.title} {...reveal} transition={{ duration: 0.55, delay: i * 0.06 }} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><f.icon className="h-6 w-6" /></div>
              <div><h3 className="text-lg font-bold text-navy">{f.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="heritage-panel relative mt-24 overflow-hidden py-24 text-primary-foreground"><div className="bandhani-dots absolute inset-0 opacity-15" aria-hidden="true" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center"><span className="section-kicker border-gold/40 bg-background/10 text-gold">यात्री बोले</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">साथ लाई <span className="font-hindi text-gold">यादें</span></h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{REVIEWS.map((r) => <article key={r.name} className="border border-gold/25 bg-background/10 p-6 backdrop-blur"><div className="flex gap-1">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div><p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">“{r.text}”</p><p className="mt-5 font-semibold">{r.name}</p><p className="text-xs text-primary-foreground/60">{r.city}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"><div className="relative overflow-hidden border-4 border-gold bg-primary p-10 text-primary-foreground shadow-elevated sm:p-16"><div className="bandhani-dots absolute inset-0 opacity-15" aria-hidden="true" /><div className="relative grid gap-8 md:grid-cols-2 md:items-center"><div><h2 className="font-hindi text-4xl sm:text-5xl">एक बार पधारिए, सेवा का अवसर दीजिए।</h2><p className="mt-4 max-w-lg text-primary-foreground/85">अपनी तारीख और पसंद बताइए — गढ़ दर्शन से संपूर्ण मेवाड़ तक, सफ़र हम सजाएँगे।</p></div><div className="flex flex-wrap gap-3 md:justify-end"><a href={waLink("राम राम सा! चित्तौड़गढ़ यात्रा plan करनी है।")} target="_blank" rel="noreferrer" className="royal-button px-7 py-3.5"><MessageCircle className="h-5 w-5" /> WhatsApp पर बात करें</a><Link to="/contact" className="inline-flex items-center rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold">संपर्क करें</Link></div></div></div></section>
    </SiteShell>
  );
}
