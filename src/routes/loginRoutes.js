const express = require('express');
const router = express.Router();

const path = require('path')

const userLoginController = require('../controllers/userLoginController');

router.get('/login', userLoginController.login);

router.post('/login', userLoginController.loginProcess);

router.get('/register', userLoginController.register);

module.exports = router;