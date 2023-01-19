const express = require('express');
const router = express.Router();

const path = require('path')

const mainController = require('../controllers/mainController')


router.get('/', mainController.index);

router.get('/', mainController.login);

router.get('/', mainController.register);

router.get('/', mainController.detalle);

router.get('/', mainController.carrito);

module.exports = router;