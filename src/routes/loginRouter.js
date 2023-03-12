const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const validateCreateForm = [
    body('firstName').notEmpty().withMessage('El campo de Nombre es obligatorio.'),
    body('lastName').notEmpty().withMessage('El campo de Apellido es obligatorio.'),
    body('country').notEmpty().withMessage('Debes elegir un país de residencia.'),
    body('email').isEmail().withMessage('El mail elegido debe ser válido.'),
    body('password').notEmpty().isLength({ min: 8 }).withMessage('La contraseña debe tener un minimo de 8.')
]

const path = require('path')

const usuariosController = require('../controllers/userLoginController');

router.get('/login', usuariosController.login);

router.post('/login', usuariosController.loginProcess);

router.get('/register', usuariosController.register);

router.post('/register', validateCreateForm, usuariosController.registerProcess);


module.exports = router;