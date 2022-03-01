const express = require('express');

const router = express.Router();


const controller = require('../controllers/controller')

router.post('/createNewAuthor', controller.createNewAuthor)
router.post('/createNewBook', controller.createNewBook)
router.get('/bookByChetan', controller.bookByChetan)
router.post('/updatedBookPrice', controller.upadatedBookPrice)
router.get('/authorsName', controller.authorsName)

module.exports = router;