// src/middleware/auth.js
import { auth } from "express-oauth2-jwt-bearer";

// ✅ Middleware to check JWT issued by Auth0
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,   // API Identifier from Auth0
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`, // Your Auth0 domain
});

// ✅ Export middleware
export default checkJwt;