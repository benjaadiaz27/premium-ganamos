const handleClick = async (e) => {
  e.preventDefault();

  try {
    const eventId = crypto.randomUUID();

    console.log("Click");

    if (window.fbq) {
      window.fbq("track", "Lead", {}, { eventID: eventId });
    }

    const response = await fetch("/api/meta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId,
        url: window.location.href,
      }),
    });

    console.log("Status:", response.status);

    const data = await response.json();
    console.log("Respuesta:", data);

  } catch (err) {
    console.error("Error:", err);
  }

  window.location.href = getWhatsAppLink();
};