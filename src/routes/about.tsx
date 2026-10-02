import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Baneshwari Tour & Travels" },
      { name: "description", content: "Mewar ki dharti ke log — Chittorgarh Garh darshan aur sampoorn Mewar yatra, 2008 se personal seva ke saath." },
      { property: "og:title", content: "About Baneshwari Tour & Travels" },
      { property: "og:description", content: "2008 se — Mewar yatra, WhatsApp-first, ghar-jaisi mehmaannawazi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="हमारो परिचय" title="गढ़ की धरती के लोग, यात्रा के साथी।">2008 से हम परिवारों को चित्तौड़गढ़ गढ़ और संपूर्ण मेवाड़ घुमा रहे हैं — एक-एक itinerary दिल से बनाकर।</PageHero>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Baneshwari Tour & Travels की शुरुआत एक ही इरादे से हुई — ऐसी यात्रा करवाना, जैसी हम अपने परिवार को करवाएँ। Shri Shivraj Singh Sisodiya के नेतृत्व में हमने एक वादा निभाया है: हर रास्ता खुद चलकर देखो, और हर WhatsApp संदेश का जवाब खुद दो।
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          गढ़ का हर दरवाज़ा, हर कुंड, हर मंदिर — हमारे ड्राइवर और गाइड इन्हें नाम से जानते हैं। कोई बिचौलिया नहीं, कोई आखिरी-पल का झंझट नहीं। बस सच्ची मेवाड़ी मेहमाननवाज़ी।
        </p>
        <div className="mt-8 border-l-4 border-primary bg-card p-6 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Founder & Owner</div>
          <div className="mt-1 font-display text-2xl font-bold text-navy">Mr. Shivraj Singh Sisodiya</div>
          <p className="mt-2 text-sm text-muted-foreground">2008 से मेवाड़ यात्रा — personal touch के साथ।</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[
            { icon: HeartHandshake, title: "12,000+ खुश यात्री", body: "परिवार, बुजुर्ग, युवा समूह — सब घर कहानियाँ लेकर लौटे।" },
            { icon: Compass, title: "सिर्फ मेवाड़, पूरा मेवाड़", body: "चित्तौड़गढ़, उदयपुर, नाथद्वारा, कुंभलगढ़, हल्दीघाटी, राजसमंद — गली-गली की जानकारी।" },
            { icon: ShieldCheck, title: "Verified गाड़ी व गाइड", body: "सेडान, SUV, टेम्पो ट्रैवलर — अनुभवी ड्राइवर और स्थानीय गाइड, हर साल जाँचे हुए।" },
            { icon: Award, title: "4.9/5 यात्री rating", body: "Google, TripAdvisor और WhatsApp reviews — सबसे ऊँचा पैमाना।" },
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