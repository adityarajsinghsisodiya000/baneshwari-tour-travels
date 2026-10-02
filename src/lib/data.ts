import agra from "@/assets/dest-agra.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import kashmir from "@/assets/pkg-kashmir.jpg";
import ooty from "@/assets/pkg-ooty.jpg";
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
  {
    slug: "chittorgarh-garh-darshan",
    title: "Chittorgarh Garh Darshan",
    destination: "Chittorgarh",
    duration: "1 Day (Same Day)",
    priceFrom: 1999,
    image: rajasthan,
    tagline: "विजय स्तंभ से जौहर कुंड तक — पूरा गढ़, एक दिन में।",
    highlights: ["Vijay Stambh & Kirti Stambh", "Meera Mandir & Kumbha Mahal", "Padmini Mahal & Gaumukhi Kund", "Local Mewadi guide"],
  },
  {
    slug: "sanwaliya-seth-yatra",
    title: "Sanwaliya Seth Teerth Yatra",
    destination: "Chittorgarh · 45 km",
    duration: "1–2 Days",
    priceFrom: 2499,
    image: agra,
    tagline: "श्री सांवलिया सेठ के तीनों मंदिर + शनि मंदिर दर्शन।",
    highlights: ["Teenon mandir darshan", "Shani mandir", "Bhog-prasad vyavastha", "AC vehicle sahit"],
  },
  {
    slug: "mewar-royal-circuit",
    title: "Mewar Royal Circuit",
    destination: "Chittorgarh · Udaipur",
    duration: "3 Nights / 4 Days",
    priceFrom: 14999,
    image: backwaters,
    tagline: "गढ़ का शौर्य, झीलों की नगरी — दोनों एक सफ़र में।",
    highlights: ["Garh darshan with guide", "City Palace & Pichola Lake", "Saheliyon ki Badi", "Fatehsagar boat ride"],
  },
  {
    slug: "shrinathji-teerth-yatra",
    title: "Shrinathji Teerth Yatra",
    destination: "Nathdwara · Rajsamand",
    duration: "2 Nights / 3 Days",
    priceFrom: 8999,
    image: ooty,
    tagline: "श्रीनाथजी, विश्वास स्वरूपम्, एकलिंगजी — मेवाड़ के तीर्थ।",
    highlights: ["Shrinathji mandir", "Vishwas Swaroopam", "Eklingji & Ganesh Tekri", "Rajsamand Lake"],
  },
  {
    slug: "veerta-circuit-haldighati-kumbhalgarh",
    title: "Veerta Circuit",
    destination: "Haldighati · Kumbhalgarh",
    duration: "2 Nights / 3 Days",
    priceFrom: 9499,
    image: kashmir,
    tagline: "हल्दीघाटी की माटी, कुंभलगढ़ की दीवार — वीरों की धरती।",
    highlights: ["Haldighati battlefield", "Kumbhalgarh Fort", "Charbhuja Nath", "Maharana Pratap Gaurav Kendra"],
  },
  {
    slug: "sampoorn-mewar-darshan",
    title: "Sampoorn Mewar Darshan",
    destination: "5 Sheher · 1 Yatra",
    duration: "5 Nights / 6 Days",
    priceFrom: 21999,
    image: rajasthan,
    tagline: "चित्तौड़गढ़, उदयपुर, नाथद्वारा, कुंभलगढ़ — पूरा मेवाड़।",
    highlights: ["Garh + Lakes + Teerth", "Private vehicle throughout", "Heritage haveli stay", "Family-customisable"],
  },
];

export type Destination = { slug: string; name: string; region: string; image: string; packagesCount: number };
export const DESTINATIONS: Destination[] = [
  { slug: "chittorgarh-garh", name: "Chittorgarh Garh", region: "गढ़ों का गढ़", image: rajasthan, packagesCount: 6 },
  { slug: "sanwaliya-seth", name: "Sanwaliya Seth", region: "45 km · Teerth", image: agra, packagesCount: 3 },
  { slug: "nathdwara", name: "Nathdwara", region: "Shrinathji · Vishwas Swaroopam", image: ooty, packagesCount: 4 },
  { slug: "udaipur", name: "Udaipur", region: "झीलों की नगरी", image: backwaters, packagesCount: 5 },
  { slug: "kumbhalgarh-haldighati", name: "Kumbhalgarh · Haldighati", region: "वीरता सर्किट", image: kashmir, packagesCount: 4 },
  { slug: "rajsamand-teerth", name: "Rajsamand · Eklingji", region: "तीर्थ सर्किट", image: agra, packagesCount: 3 },
];

export const FORT_FACTS = [
  { k: "180 मीटर", v: "ऊँचा गढ़" },
  { k: "700 एकड़", v: "में फैला दुर्ग" },
  { k: "7", v: "महाद्वार" },
  { k: "84", v: "कुंड, बावड़ी व तालाब" },
  { k: "130+", v: "मंदिर गढ़ परिसर में" },
];

export const FORT_POINTS = [
  { name: "विजय स्तंभ", desc: "महाराणा कुंभा की विजय का प्रतीक — 9 मंज़िला स्तंभ" },
  { name: "कीर्ति स्तंभ", desc: "जैन तीर्थंकरों को समर्पित प्राचीन स्तंभ" },
  { name: "मीरा मंदिर", desc: "भक्ति की अमर गाथा — मीरा बाई का मंदिर" },
  { name: "कुंभा महल", desc: "महाराणा कुंभा का ऐतिहासिक महल" },
  { name: "तोप खाना", desc: "गढ़ की रक्षा का प्राचीन तोपख़ाना" },
  { name: "जौहर कुंड", desc: "वीरांगनाओं के बलिदान की अमर स्मृति" },
  { name: "त्रिदेव मंदिर", desc: "ब्रह्मा-विष्णु-महेश का संयुक्त मंदिर" },
  { name: "गौमुखी कुंड", desc: "गढ़ का पवित्र जल स्रोत" },
  { name: "कालिका माता मंदिर", desc: "गढ़ की अधिष्ठात्री देवी" },
  { name: "पद्मिनी महल", desc: "महारानी पद्मिनी की गाथा का महल" },
  { name: "सूरजपोल", desc: "गढ़ का प्रमुख महाद्वार" },
];

export const KAHAVAT = [
  "झरना झरे, गोमुख झरे, निर्भय नाथ रि ठोर,",
  "करोड़ों वर्ष तपस्या करें, तब जन्म मिले चित्तौड़ धरा पर।",
];

export const REVIEWS = [
  { name: "Kalpana Rathore", city: "Jaipur", rating: 5, text: "गढ़ दर्शन एक ही दिन में पूरा — विजय स्तंभ, मीरा मंदिर, जौहर कुंड। गाइड ने हर कहानी सुनाई, बच्चों तक ने ध्यान से सुना।" },
  { name: "Mohan Joshi", city: "Indore", rating: 5, text: "सांवलिया सेठ के तीनों मंदिर और शनि मंदिर — सुबह से शाम तक पूरा प्रबंध। भोग-प्रसाद तक की व्यवस्था कर दी थी।" },
  { name: "Pooja & Suresh Jain", city: "Ahmedabad", rating: 5, text: "चित्तौड़गढ़ + उदयपुर 4 दिन — पिछोला की नाव, सिटी पैलेस, सहेलियों की बाड़ी। WhatsApp पर ही पूरा प्लान बन गया।" },
  { name: "Ramesh Patel", city: "Surat", rating: 5, text: "पूरे परिवार के साथ संपूर्ण मेवाड़ — नाथद्वारा, हल्दीघाटी, कुंभलगढ़। गाड़ी, होटल, दर्शन — सब समय पर।" },
];

export const FAQS = [
  { q: "चित्तौड़गढ़ घूमने का सबसे अच्छा समय कौन-सा है?", a: "अक्टूबर से मार्च — मौसम सुहावना रहता है और गढ़ पैदल घूमने में आनंद आता है। सुबह जल्दी पहुँचें तो सूरजपोल से नज़ारा सबसे सुंदर दिखता है।" },
  { q: "क्या गढ़ एक दिन में पूरा देखा जा सकता है?", a: "हाँ — हमारा Garh Darshan पैकेज सुबह से शाम तक विजय स्तंभ, कीर्ति स्तंभ, मीरा मंदिर, कुंभा महल, पद्मिनी महल, गौमुखी कुंड और जौहर कुंड कवर करता है।" },
  { q: "क्या गाइड और गाड़ी शामिल है?", a: "हाँ — हर पैकेज में स्थानीय मेवाड़ी गाइड और AC गाड़ी (सेडान, SUV या टेम्पो ट्रैवलर) शामिल है। ड्राइवर सभी रास्तों और दर्शन-समय से परिचित हैं।" },
  { q: "स्टेशन/एयरपोर्ट से पिकअप मिलता है?", a: "चित्तौड़गढ़ जंक्शन और उदयपुर (हवाई अड्डा/स्टेशन) — दोनों जगह से पिकअप और ड्रॉप की सुविधा है। बस WhatsApp पर अपनी ट्रेन/फ्लाइट बताइए।" },
  { q: "क्या यात्रा family के हिसाब से customise होगी?", a: "बिल्कुल — बुजुर्गों के लिए धीमी गति, बच्चों के साथ ठहराव, होटल अपग्रेड या दर्शन-क्रम — सब आपकी सुविधा से तय होता है।" },
];

export const heroImage = rajasthan;
