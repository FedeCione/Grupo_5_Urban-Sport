let { check } = require('express-validator');

module.exports = [
    check('email')
        .isEmail().withMessage('Debes ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Escribe tu contraseña')
]