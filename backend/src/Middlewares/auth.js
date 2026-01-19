// src/middleware/auth.js
import { auth } from "express-oauth2-jwt-bearer";

// ✅ Middleware to check JWT issued by Auth0
const checkJwt = auth({
  audience:"https://dev-hy7kuutzbmm0h8vm.us.auth0.com/api/v2" ,   // API Identifier from Auth0
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`, // Your Auth0 domain
});

export default checkJwt;