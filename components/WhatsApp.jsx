"use client";

import { getWhatsAppLink } from "../lib/config";

export default function WhatsApp() {
  const handleClick = async (e) => {
    e.preventDefault();

    const eventId = crypto.randomUUID();

    if (window.fbq) {
      window.fbq("track", "Purchase", {}, { eventID: eventId });
    }

    await fetch("/api/meta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId,
        url: window.location.href,
      }),
    });

    window.location.href = getWhatsAppLink();
  };

  return (
    <a
      href={getWhatsAppLink()}
      className="whatsapp"
      onClick={handleClick}
    >
      💬
    </a>
  );
}