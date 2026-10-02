import himalayas from "@/assets/dest-himalayas.jpg";
import agra from "@/assets/dest-agra.jpg";
import goa from "@/assets/dest-goa.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ooty from "@/assets/pkg-ooty.jpg";
import kashmir from "@/assets/pkg-kashmir.jpg";
import andaman from "@/assets/pkg-andaman.jpg";
import backwaters from "@/assets/hero-backwaters.jpg";

export type Package = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  priceFrom: number;
  image: string;
  tagline: string;
  highlights: string[];
};

export const PACKAGES: Package[] = [
  { slug: "kerala-backwaters", title: "Kerala Backwaters Escape", destination: "Kerala", duration: "5 Nights / 6 Days", priceFrom: 24999, image: backwaters, tagline: "Houseboats, spice hills & Arabian sunsets.", highlights: ["Alleppey houseboat", "Munnar tea trails", "Kochi heritage walk", "Kathakali evening"] },
  { slug: "kashmir-paradise", title: "Kashmir Paradise", destination: "Jammu & Kashmir", duration: "6 Nights / 7 Days", priceFrom: 32999, image: kashmir, tagline: "Shikaras on Dal Lake and Gulmarg gondolas.", highlights: ["Dal Lake shikara", "Gulmarg gondola", "Pahalgam meadows", "Sonmarg glacier"] },
  { slug: "rajasthan-royals", title: "Royal Rajasthan", destination: "Rajasthan", duration: "7 Nights / 8 Days", priceFrom: 29999, image: rajasthan, tagline: "Palaces, dunes and pink-city bazaars.", highlights: ["Jaipur City Palace", "Jaisalmer camel safari", "Udaipur lake stay", "Jodhpur blue city"] },
  { slug: "himalayan-retreat", title: "Himalayan Retreat", destination: "Himachal Pradesh", duration: "5 Nights / 6 Days", priceFrom: 21999, image: himalayas, tagline: "Snow peaks, pine forests, mountain cafés.", highlights: ["Shimla mall road", "Manali adventure", "Solang Valley", "Rohtang pass"] },
  { slug: "goa-getaway", title: "Goa Beach Getaway", destination: "Goa", duration: "3 Nights / 4 Days", priceFrom: 14999, image: goa, tagline: "Sun, sea, sundowners — repeat.", highlights: ["North Goa beaches", "Cruise dinner", "Old Goa churches", "Spice plantation"] },
  { slug: "ooty-hills", title: "Nilgiri Blue Hills", destination: "Tamil Nadu", duration: "4 Nights / 5 Days", priceFrom: 17999, image: ooty, tagline: "Toy trains through emerald tea estates.", highlights: ["Nilgiri toy train", "Coonoor viewpoints", "Tea factory tour", "Doddabetta peak"] },
  { slug: "taj-golden-triangle", title: "Golden Triangle Classic", destination: "Delhi · Agra · Jaipur", duration: "5 Nights / 6 Days", priceFrom: 22999, image: agra, tagline: "Three iconic cities in one grand loop.", highlights: ["Taj Mahal sunrise", "Amber Fort", "Qutub Minar", "Fatehpur Sikri"] },
  { slug: "andaman-islands", title: "Andaman Island Bliss", destination: "Andaman & Nicobar", duration: "5 Nights / 6 Days", priceFrom: 34999, image: andaman, tagline: "Turquoise lagoons, coral reefs, silent shores.", highlights: ["Radhanagar beach", "Havelock island", "Scuba diving", "Ross Island tour"] },
];

export type Destination = { slug: string; name: string; region: string; image: string; packagesCount: number };
export const DESTINATIONS: Destination[] = [
  { slug: "kerala", name: "Kerala", region: "South India", image: backwaters, packagesCount: 12 },
  { slug: "kashmir", name: "Kashmir", region: "North India", image: kashmir, packagesCount: 8 },
  { slug: "rajasthan", name: "Rajasthan", region: "West India", image: rajasthan, packagesCount: 14 },
  { slug: "himachal", name: "Himachal", region: "North India", image: himalayas, packagesCount: 10 },
  { slug: "goa", name: "Goa", region: "West Coast", image: goa, packagesCount: 9 },
  { slug: "ooty", name: "Nilgiris", region: "South India", image: ooty, packagesCount: 6 },
  { slug: "agra", name: "Agra", region: "North India", image: agra, packagesCount: 7 },
  { slug: "andaman", name: "Andaman", region: "Islands", image: andaman, packagesCount: 5 },
];

export const REVIEWS = [
  { name: "Ananya Sharma", city: "Bengaluru", rating: 5, text: "Our Kashmir trip was flawless—the houseboat, the driver, every detail. Baneshwari's team booked it all over WhatsApp in a day." },
  { name: "Rahul Mehta", city: "Mumbai", rating: 5, text: "Booked the Golden Triangle for my parents. They still talk about the sunrise at Taj Mahal. Impeccable service." },
  { name: "Fatima Khan", city: "Hyderabad", rating: 5, text: "Custom Kerala backwaters package with our toddler. Everything from car seats to baby food was arranged." },
  { name: "Vikram Iyer", city: "Chennai", rating: 5, text: "Ooty in the monsoon with Baneshwari was magical. Their local guides know every viewpoint the crowd doesn’t." },
];

export const FAQS = [
  { q: "How do I book a tour?", a: "Tap any WhatsApp button on the site. Our travel desk replies within minutes with a customised itinerary and quote." },
  { q: "Are the prices per person?", a: "Yes, ‘from’ prices are per person on twin-sharing basis. Solo, group and family rates are shared over WhatsApp." },
  { q: "Can packages be customised?", a: "Absolutely — every itinerary is a starting point. Extend nights, add destinations, upgrade hotels or design one from scratch." },
  { q: "What about taxis and airport transfers?", a: "We offer sedan, SUV and tempo traveller rentals with verified drivers across all major Indian cities." },
  { q: "Do you cover international travel?", a: "Currently we specialise in domestic India tours. Selected neighbouring countries like Nepal, Bhutan and Sri Lanka are available on request." },
];

export const heroImage = rajasthan;