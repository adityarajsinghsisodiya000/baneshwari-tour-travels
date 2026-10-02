export const SITE = {
  name: "Baneshwari Tour & Travels",
  tagline: "गढ़ में गढ़ चित्तौड़गढ़ — मेवाड़ दर्शन स्पेशलिस्ट",
  phone: "+91 82092 73233",
  phoneHref: "tel:+918209273233",
  whatsappNumber: "918209273233",
  email: "hello@baneshwaritravels.com",
  address: "Chittorgarh, Rajasthan, India",
  owner: "Mr. Shivraj Singh Sisodiya",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}