// backend/routes/trips.js
import express from 'express';
import {
  createTrip,
  listTrips,
  getTrip,
  updateTrip,
  deleteTrip
} from '../Controllers/tripController.js';
import checkJwt from '../Middlewares/auth.js'

const router = express.Router();

// All trip routes require authentication
router.post('/', checkJwt, createTrip);        // POST /api/trips
router.get('/', checkJwt, listTrips);          // GET /api/trips
router.get('/:id', checkJwt, getTrip);         // GET /api/trips/:id
router.put('/:id', checkJwt, updateTrip);      // PUT /api/trips/:id
router.delete('/:id', checkJwt, deleteTrip);   // DELETE /api/trips/:id

export default router;