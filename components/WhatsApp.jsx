import { getWhatsAppLink } from "../lib/config";

export default function WhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
    >
      💬
    </a>
  );
}