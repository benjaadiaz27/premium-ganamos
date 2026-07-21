export async function POST(req) {
  try {
    const body = await req.json();

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
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: body.url,
              event_id: body.eventId,

              user_data: {
                client_ip_address:
                  req.headers.get("x-forwarded-for") || "",
                client_user_agent:
                  req.headers.get("user-agent") || "",
              },
            },
          ],
        }),
      }
    );

    const result = await response.json();

    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}