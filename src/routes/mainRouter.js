const express = require('express');
const router = express.Router();

const path = require('path')

const mainController = require('../controllers/mainController');


router.get('/', mainController.index);

router.get('/detalle/:id', mainController.detalle);

router.get('/carrito', mainController.carrito);

router.get('/productos/editar/:id', mainController.edit); //Edicion de productos

router.put('/productos/editar/:id', mainController.editProcess);


//Sprint 4

router.get('/products', mainController.products); //Listado productos

router.get('/search', mainController.search);

router.get('/products/create', mainController.create); //Form creacion productos

router.post('/products/create', mainController.createProcess); //Accion de creacion (donde se envia form)


module.exports = router;