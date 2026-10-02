import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Baneshwari Tour & Travels" },
      { name: "description", content: "A small, obsessive team of trip designers crafting bespoke India journeys since 2008." },
      { property: "og:title", content: "About Baneshwari Tour & Travels" },
      { property: "og:description", content: "Since 2008 — bespoke India journeys, WhatsApp-first, obsessively personal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Hamara safar" title="Travel, planned by people who actually go there.">Since 2008, we've been sending small groups and families across India—one carefully plotted itinerary at a time.</PageHero>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Baneshwari Tour & Travels began as a two-person Bengaluru office with a single ambition — plan trips we would want to take ourselves. Led by Mr. Shivraj Singh Sisodiya, we've grown by keeping one promise: walk every trail before we sell it, and answer every WhatsApp message ourselves.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Everything you see on this site — the packages, the drivers, the guides — has been vetted personally. No black-box tour operators, no last-minute surprises. Just travel, done with care.
        </p>
        <div className="mt-8 border-l-4 border-primary bg-card p-6 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Founder & Owner</div>
          <div className="mt-1 font-display text-2xl font-bold text-navy">Mr. Shivraj Singh Sisodiya</div>
          <p className="mt-2 text-sm text-muted-foreground">Planning India journeys with a personal touch since 2008.</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[
            { icon: HeartHandshake, title: "12,000+ happy travellers", body: "Families, honeymooners, solo backpackers, corporate offsites — all sent home with stories." },
            { icon: Compass, title: "28 states covered", body: "From Ladakh to Kanyakumari, Kutch to Kohima — we know the road less taken." },
            { icon: ShieldCheck, title: "IATA-certified partners", body: "Airlines, hotels and transport partners audited annually for quality and safety." },
            { icon: Award, title: "4.9/5 traveller rating", body: "Reviewed across Google, TripAdvisor and Instagram DMs — the highest bar of all." },
          ].map((f) => (
            <div key={f.title} className="border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-royal text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}