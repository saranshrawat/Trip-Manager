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


// const checkJwt = auth({
//   audience: process.env.AUTH0_AUDIENCE,
//   issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
// });

// app.get('/api/protected', checkJwt, (req, res) => {
//   res.json({ message: "Protected route", user: req.auth.payload });
// });



// Routes are here
// app.use("/api/search", searchRoutes);
// app.use("/api/visited", visitedRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));


