import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../lib/config";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I would like to schedule a consultation with SAS Law Associates."
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.contact.phonesRaw[0]}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
