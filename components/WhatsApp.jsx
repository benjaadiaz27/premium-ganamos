import { getWhatsAppLink } from "../lib/config";

export default function WhatsApp() {

  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
      onClick={handleClick}
    >
      💬
    </a>
  );
}