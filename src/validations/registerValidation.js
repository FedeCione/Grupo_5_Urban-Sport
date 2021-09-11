let { check, body } = require('express-validator');
const { users } = require('../data/dataBase');


module.exports = [
    check('name')
        .notEmpty().withMessage('El nombres es requerido'),
    
    check('last_name')
        .notEmpty().withMessage('El apellido es requerido'),

    check('email')
        .isEmail().withMessage('Debes ingresar un email valido'),

     
        
    check('password')
        .notEmpty().withMessage('Escribe tu contraseña').isLength({min:6, max: 12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

   body('password').custom((value,{req}) => value != req.body.password2 ? false : true).withMessage('Las contraseñas no coinciden'),

    check('terms')
        .isString('on').withMessage('Debes aceptar las bases y condiciones')
    
]