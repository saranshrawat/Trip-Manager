// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
 
// Connect DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));




  
// Routes are here
// app.use("/api/search", searchRoutes);
// app.use("/api/visited", visitedRoutes);

app.listen(5000, () => console.log("Server running on port 8000"));


