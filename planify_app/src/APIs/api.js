// Funktion för att hämta rekommendationer i närheten (restauranger, barer, landmärken) med OSM
export async function getNearbyPOIs(lat, lon, radius = 1000) {
    const query = `
    [out:json];
    (
      node["amenity"~"restaurant|cafe|bar"](around:${radius},${lat},${lon});
      node["tourism"="attraction"](around:${radius},${lat},${lon});
    );
    out center;
  `;

    const url = `https://overpass-api.de/api/interpreter?data=${(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    return (data.elements || []).slice(0, 7);
}


