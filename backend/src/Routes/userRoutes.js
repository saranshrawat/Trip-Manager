import express from 'express';
import Trip from '../models/Trip.js';
import User from '../Models/userModel.js'

const router = express.Router();

router.get('/me', async (req, res) => {
  const { sub, name, email } = req.auth.payload;
  let user = await User.findOne({ auth0Id: sub });
  if (!user) {
    user = new User({ auth0Id: sub, name, email });
    await user.save();
  }
  res.json(user);
});


