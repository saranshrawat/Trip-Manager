// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import searchRoutes from './src/Routes/searchRoutes.js';
import tripsRoutes from './src/Routes/tripRoutes.js';
// import userRoutes from './src/Routes/userRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: 'http://localhost:5173', // frontend dev server
  credentials: true
}));

app.use(express.json());
 

app.use('/api/search', searchRoutes);
app.use('/api/trips', tripsRoutes);


//   app.use("/api/search", checkJwt, placeRoutes);
//  app.use("/api/trips", checkJwt, tripsRoutes);
// app.use("/api/user", checkJwt, searchRoutes);
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));


// Connect DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));
app.listen(PORT, () =>console.log(`Server running on port ${process.env.PORT}`));



