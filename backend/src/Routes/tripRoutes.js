import express from 'express';
import Trip from '../models/Trip.js';

const router = express.Router();

// GET all trips for a user from trip document
router.get('/', async (req, res) => {
  const { sub } = req.auth.payload;
  const trips = await Trip.find({ userId: sub });
  res.json(trips);
});


// POST new trip
router.post('/', async (req, res) => {
  const { sub } = req.auth.payload;
  const newTrip = new Trip({ ...req.body, userId: sub });
  await newTrip.save();
  res.status(201).json(newTrip);
});
export default router;