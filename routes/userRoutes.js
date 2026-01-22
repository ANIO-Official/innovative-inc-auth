const express = require('express')
const router = express.Router()
require("dotenv").config();
const userController = require('../controllers/userController')

router.post('/users/register', userController.registerUser)

router.post('/users/login', userController.loginUser)


module.exports = router