const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

// Sign-in
router.post('/signin', UserController.signin)
// Sign-up
router.post('/signup', UserController.signup)

module.exports = router