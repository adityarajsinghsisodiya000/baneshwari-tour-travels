import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFab({ message = "राम राम सा! चित्तौड़गढ़ यात्रा plan करनी है।" }: { message?: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 font-semibold text-primary-foreground shadow-elevated transition-transform duration-300 hover:-translate-y-1"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}