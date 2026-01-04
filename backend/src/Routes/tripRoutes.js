import express from 'express';
import Trip from '../models/Trip.js';

const router = express.Router();

// GET all trips for a user from trip document
router.get('/', async (req, res) => {
  const trips = await Trip.find({ userId: req.user._id });
  res.json(trips);
});

// POST new trip
router.post('/', async (req, res) => {
  const newTrip = new Trip({ ...req.body, userId: req.user._id });
  await newTrip.save();
  res.status(201).json(newTrip);
});

export default router;