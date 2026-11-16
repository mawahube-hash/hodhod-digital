export async function getWhopProducts() {
  const apiKey = process.env.WHOP_API_KEY;
  if (!apiKey) return [];
  try {
    const res = await fetch("https://api.whop.com/api/v1/products", {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error("Error fetching Whop products:", err);
    return [];
  }
}
