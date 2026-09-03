export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PIXEL_ID = "1005558342509298";
  const ACCESS_TOKEN = EAAN9RKdwK10BSUMBGAo1Fu4Oues1BM4n5EIGdhZBCWZCtMLDGqZAZBvRkQ4T1Bv9sDo5117B0vcqrExlasc0evWWWseQy3Ssjw3iCvWMw78nhpTR1SxS7vZBHAWqgFRmcX94B7EWdY0Js0d16sRK2JhVZCXvHrXyZBVurbmm2wEodIgteCoeVoYkIFBxunZCNdMutAZDZD;

  try {
    const response = await fetch(
      `https://graph.facebook.com/v24.0/${PIXEL_ID}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [{
            event_name: "PageView",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website"
          }],
          access_token: ACCESS_TOKEN
        })
      }
    );

    const result = await response.json();
    return res.status(response.status).json(result);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
