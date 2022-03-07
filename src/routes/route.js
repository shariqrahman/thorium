const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const Middlewares = require('../middleware/middleware');
const orderController = require('../controllers/orderController')

router.post('/createProduct', productController.createProduct)

router.post('/createUser', Middlewares.validation, userController.createUser)

router.post('/createOrders', Middlewares.validation, orderController.creatOrder);

module.exports = router;