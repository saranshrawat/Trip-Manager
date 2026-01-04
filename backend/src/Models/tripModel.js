const tripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  placeName: { type: String, required: true },
  description: { type: String },
  weather: { type: String }, // e.g., "Sunny, 25°C"
  latitude: { type: Number },
  longitude: { type: Number },
  imageUrl: { type: String }, // optional image from API
  favourite: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Trip', tripSchema);