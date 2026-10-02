export const SITE = {
  name: "Baneshwari Tour & Travels",
  tagline: "Curated journeys across incredible India",
  phone: "+91 82092 73233",
  phoneHref: "tel:+918209273233",
  whatsappNumber: "918209273233",
  email: "hello@baneshwaritravels.com",
  address: "MG Road, Bengaluru, Karnataka 560001, India",
  owner: "Mr. Shivraj Singh Sisodiya",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}