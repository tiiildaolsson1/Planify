// api.js
export async function getEventsNearby(lat, lon, keyword = "") {
  const apiKey = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&latlong=${lat},${lon}&radius=50&keyword=${keyword}&locale=*`;
  const response = await fetch(url);
  const data = await response.json();

  return data._embedded?.events || [];
}
