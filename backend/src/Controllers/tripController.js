// backend/controllers/tripController.js
import Trip from '../Models/tripModel.js';
import mongoose from 'mongoose';

function getUserIdFromReq(req) {
  // support different auth middleware shapes
  return req.user?.sub || req.user?.id || req.auth?.payload?.sub || null;
}

export async function createTrip(req, res) {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { placeName, description, latitude, longitude, imageUrl, weather, favourite } = req.body;
    if (!placeName) return res.status(400).json({ error: 'placeName is required' });

    const newTrip = new Trip({
      userId,
      placeName,
      description,
      latitude,
      longitude,
      imageUrl,
      weather,
      favourite: !!favourite
    });

    const saved = await newTrip.save();
    return res.status(201).json({ trip: saved });
  } catch (err) {
    console.error('createTrip error', err);
    return res.status(500).json({ error: 'Failed to save trip' });
  }
}

export async function listTrips(req, res) {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { favourite, limit = 100, page = 1 } = req.query;
    const query = { userId };
    if (favourite !== undefined) query.favourite = favourite === 'true';

    const perPage = Math.min(parseInt(limit, 10) || 100, 500);
    const skip = (Math.max(parseInt(page, 10) || 1, 1) - 1) * perPage;

    const trips = await Trip.find(query).sort({ createdAt: -1 }).skip(skip).limit(perPage);
    const total = await Trip.countDocuments(query);

    return res.json({ trips, meta: { total, page: parseInt(page, 10) || 1, limit: perPage } });
  } catch (err) {
    console.error('listTrips error', err);
    return res.status(500).json({ error: 'Failed to list trips' });
  }
}

export async function getTrip(req, res) {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });

    const trip = await Trip.findById(id);
    if (!trip) return res.status(404).json({ error: 'Not found' });
    if (trip.userId.toString() !== userId) return res.status(403).json({ error: 'Forbidden' });

    return res.json({ trip });
  } catch (err) {
    console.error('getTrip error', err);
    return res.status(500).json({ error: 'Failed to fetch trip' });
  }
}

export async function updateTrip(req, res) {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });

    const trip = await Trip.findById(id);
    if (!trip) return res.status(404).json({ error: 'Not found' });
    if (trip.userId.toString() !== userId) return res.status(403).json({ error: 'Forbidden' });

    const updates = req.body;
    Object.assign(trip, updates);
    const saved = await trip.save();
    return res.json({ trip: saved });
  } catch (err) {
    console.error('updateTrip error', err);
    return res.status(500).json({ error: 'Failed to update trip' });
  }
}

export async function deleteTrip(req, res) {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });

    const trip = await Trip.findById(id);
    if (!trip) return res.status(404).json({ error: 'Not found' });
    if (trip.userId.toString() !== userId) return res.status(403).json({ error: 'Forbidden' });

    await trip.remove();
    return res.json({ success: true });
  } catch (err) {
    console.error('deleteTrip error', err);
    return res.status(500).json({ error: 'Failed to delete trip' });
  }
}