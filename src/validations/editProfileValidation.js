let { check } = require('express-validator');


module.exports = [
    check('name')
        .notEmpty().withMessage('El nombres es requerido'),
    
    check('last_name')
        .notEmpty().withMessage('El apellido es requerido'),

    check('email')
        .isEmail().withMessage('Debes ingresar un email valido'),
    
]