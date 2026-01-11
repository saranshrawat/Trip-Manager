// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { auth } from "express-oauth2-jwt-bearer";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
 
// Connect DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));


app.use("/api/places", checkJwt, placeRoutes);
app.use("/api/trips", checkJwt, tripRoutes);
app.use("/api/user", checkJwt, userRoutes);


app.listen(8000, () => console.log("Server running on port 8000"));


