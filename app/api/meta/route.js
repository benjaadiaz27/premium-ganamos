import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const body = await req.json();

    const cookieStore = await cookies();

    const fbp = cookieStore.get("_fbp")?.value;
    const fbc = cookieStore.get("_fbc")?.value;

    console.log("Evento recibido:", body);

    const response = await fetch(
      `https://graph.facebook.com/v23.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              event_name: "Purchase",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: body.url,
              event_id: body.eventId,

custom_data: {
  value: 2000,
  currency: "ARS",
},

              user_data: {
                client_ip_address:
                  req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "",
                client_user_agent:
                  req.headers.get("user-agent") || "",
                fbp,
                fbc,
              },
            },
          ],
        }),
      }
    );

    const result = await response.json();

    console.log("Respuesta de Meta:", result);

    return Response.json(result, {
      status: response.ok ? 200 : response.status,
    });
  } catch (error) {
    console.error("Error enviando evento a Meta:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}