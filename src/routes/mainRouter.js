const express = require('express');
const router = express.Router();

const path = require('path')

const mainController = require('../controllers/mainController')


router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/detalle/:id', mainController.detalle);

router.get('/carrito', mainController.carrito);

router.get('/editar', mainController.edit);

module.exports = router;