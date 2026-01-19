import express from 'express'
import checkJwt from '../Middlewares/auth.js'
import {
  getSuggestions,
  getPlaces
} from '../Controllers/searchController.js'

const searchRoutes = express.Router()

searchRoutes.get('/suggestions',checkJwt, getSuggestions)
searchRoutes.post('/places', checkJwt, getPlaces)

export default searchRoutes
