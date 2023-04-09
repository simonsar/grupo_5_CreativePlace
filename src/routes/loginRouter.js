const express = require('express');
const router = express.Router();
const validations = require('../middlewares/validateRegisterMiddleware');

const path = require('path')

const usuariosController = require('../controllers/userLoginController');

router.get('/login', usuariosController.login);

router.post('/login', usuariosController.loginProcess);

router.get('/register', usuariosController.register);

router.post('/register', validations, usuariosController.registerProcess);

router.get('/perfil', usuariosController.perfil)

router.get('/perfil/editar/:id',  usuariosController.editarUsuario);

router.put('/perfil/editar/:id',  usuariosController.editarUsuarioProcess);

router.delete('/delete/:id', usuariosController.eliminarUsuarioProcess);

module.exports = router;