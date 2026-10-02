import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { SITE, waLink } from "@/lib/site";
import { FAQS } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Baneshwari Tour & Travels" },
      { name: "description", content: "Chittorgarh yatra ke liye WhatsApp, phone ya email par baat karein — kuch hi minute mein jawab." },
      { property: "og:title", content: "Contact Baneshwari Tour & Travels" },
      { property: "og:description", content: "WhatsApp, phone ya email — kuch hi minute mein jawab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    { icon: MessageCircle, title: "WhatsApp", body: SITE.phone, href: waLink("राम राम सा! चित्तौड़गढ़ यात्रा plan करनी है।"), cta: "Chat खोलें", external: true },
    { icon: Phone, title: "Call करें", body: SITE.phone, href: SITE.phoneHref, cta: "अभी call करें", external: false },
    { icon: Mail, title: "Email", body: SITE.email, href: `mailto:${SITE.email}`, cta: "Email भेजें", external: false },
  ];
  return (
    <SiteShell>
      <PageHero eyebrow="राम राम सा" title="चलिए, आपकी यात्रा सजाते हैं।">सबसे तेज़ तरीका WhatsApp है — असली travel expert कुछ ही minute में जवाब देते हैं।</PageHero>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {channels.map((c) => (
          <a key={c.title} href={c.href} target={c.external ? "_blank" : undefined} rel="noreferrer"
             className="group border-t-4 border-primary bg-card p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-royal text-primary-foreground">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-navy">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-primary">{c.cta} →</span>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border-l-4 border-gold bg-secondary/40 p-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="font-display text-lg font-semibold text-navy">हमसे मिलिए</div>
              <p className="text-sm text-muted-foreground">{SITE.address}</p>
              <p className="mt-1 text-sm text-muted-foreground">Mon–Sat · 9:30 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">अक्सर पूछे जाने वाले सवाल</h2>
        <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-6 open:bg-secondary/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-navy">
                {f.q}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}