import * as geoService from '../Services/geoapify.js';

export async function getSuggestions(req, res) {
  const q = (req.query.q || '').trim();
  if (!q) return res.status(400).json({ error: 'Missing query q' });
  try {
    const suggestions = await geoService.fetchSuggestions(q, { limit: 6 });
    return res.json(suggestions);
  } catch (err) {
    console.error('suggestions error', err);
    return res.status(502).json({ error: 'Failed to fetch suggestions' });
  }
}

export async function getPlaces(req, res) {
  const { lat, lon, category, limit = 12 } = req.body;
  if (!lat || !lon || !category) return res.status(400).json({ error: 'lat, lon and category required' });
  try {
    const results = await geoService.fetchPlaces({ lat, lon, category, limit });
    return res.json({ results });
  } catch (err) {
    console.error('places error', err);
    return res.status(502).json({ error: 'Failed to fetch places' });
  }
}