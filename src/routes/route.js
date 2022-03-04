const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller')
const middle = require('../middleware/middleware')

// router.get('/one', middle.myMiddleware, Controller.myOne)
// router.get('/two', middle.myMiddleware, Controller.myTwo)

router.get('/one', Controller.myOne)
router.get('/two', Controller.myTwo)

module.exports = router;