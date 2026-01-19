import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  placeName: { type: String, required: true },
  description: { type: String },

  // Geoapify / geocoding details
  formattedAddress: { type: String },     // full formatted address from Geoapify
  country: { type: String },
  countryCode: { type: String },
  state: { type: String },
  county: { type: String },
  city: { type: String },
  postcode: { type: String },
  neighbourhood: { type: String },


  // optional metadata from Geoapify
  placeId: { type: String },              // provider place id
  categories: { type: [String] },         // categories/tags if provided
  
  // weather and image
  weather: { type: String },              // e.g., "Sunny, 25°C"
  imageUrl: { type: String },             // optional image from API or other source
  favourite: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// indexes for common queries
tripSchema.index({ userId: 1, createdAt: -1 });
tripSchema.index({ placeId: 1 });

export default mongoose.model('Trip', tripSchema);