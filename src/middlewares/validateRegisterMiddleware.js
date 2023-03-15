const { body } = require('express-validator');


module.exports = [
    body('firstName').notEmpty().withMessage('El campo de Nombre es obligatorio.'),
    body('lastName').notEmpty().withMessage('El campo de Apellido es obligatorio.'),
    body('country').notEmpty().withMessage('Debes elegir un país de residencia.'),
    body('email').isEmail().withMessage('El mail elegido debe ser válido.'),
    body('password').notEmpty().isLength({ min: 8 }).withMessage('La contraseña debe tener un minimo de 8.')
]

