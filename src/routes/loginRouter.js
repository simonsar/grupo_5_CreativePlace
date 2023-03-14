const express = require('express');
const router = express.Router();
const validations = require('../middlewares/validateRegisterMiddleware');



const path = require('path')

const usuariosController = require('../controllers/userLoginController');

router.get('/login', usuariosController.login);

router.post('/login', usuariosController.loginProcess);

router.get('/register', usuariosController.register);

router.post('/register', validations , usuariosController.registerProcess);


module.exports = router;