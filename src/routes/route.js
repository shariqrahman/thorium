const express = require('express');
const router = express.Router();
const cowinController = require('../controllers/cowinController')
const weatherController = require('../controllers/weatherController')
const memesController = require('../controllers/memesController')

router.get("/states", cowinController.getStates)
router.get("/districtsInState/:stateId", cowinController.getDistricts)
router.get("/getByPin", cowinController.getByPin)

// Cowin
router.post('/getOtp', cowinController.getOtp )
router.get('/sessionsByDistrict', cowinController.getByDistrict)

// Weather
router.get('/getWeather', weatherController.getWeather)
router.get('/tempOfLondon', weatherController.londonTemprature)
router.get('/tempOfCities', weatherController.citiesTemprature)

// Memes
router.get('/getMemes', memesController.getMemes )
router.post('/createMemes', memesController.createMemes)

module.exports = router;