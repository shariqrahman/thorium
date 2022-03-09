const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midware= require("../middleware/auth")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId",midware.authenticate,midware.authorise, userController.getUserData)

router.put("/users/:userId",midware.authenticate,midware.authorise, userController.updateUser)

router.post("/users/:userId/posts",midware.authorise, userController.postMessage)

router.delete('/users/:userId',midware.authenticate,midware.authorise, userController.deleteUser)

module.exports = router;






