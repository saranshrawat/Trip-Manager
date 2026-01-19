import axios from 'axios'
const GEO_KEY = process.env.GEOAPIFY_KEY;
const GEO_BASE = process.env.GEOAPIFY_BASE || 'https://api.geoapify.com/v1';




export async function fetchSuggestions(text, { limit = 6 } = {}) {
  const url = `${GEO_BASE}/geocode/search?text=${encodeURIComponent(text)}&limit=${limit}&apiKey=${GEO_KEY}`;
  const r = await axios.get(url, { timeout: 8000 });
  const features = r.data?.features || [];
  return features.map(f => ({
    label: f.properties?.formatted || f.properties?.name || '',
    lat: f.geometry?.coordinates?.[1],
    lon: f.geometry?.coordinates?.[0],
    raw: f.properties
  }));
}



export async function fetchPlaces({ lat, lon, category, limit = 12 }) {
  // Example using Geoapify Places endpoint; adjust path/version per your plan
  const radius = 5000; // meters; adjust as needed
  const url = `${GEO_BASE}/places?categories=${encodeURIComponent(category)}&filter=circle:${lon},${lat},${radius}&limit=${limit}&apiKey=${GEO_KEY}`;
  const r = await axios.get(url, { timeout: 10000 });
  const features = r.data?.features || [];
  return features.map(f => ({
    id: f.properties?.place_id || f.properties?.osm_id || f.id,
    name: f.properties?.name || f.properties?.formatted,
    address: f.properties?.formatted || null,
    lat: f.geometry?.coordinates?.[1],
    lon: f.geometry?.coordinates?.[0],
    distance: f.properties?.distance ?? null,
    imageUrl: f.properties?.photo?.url ?? null,
    raw: f.properties
  }));
}
