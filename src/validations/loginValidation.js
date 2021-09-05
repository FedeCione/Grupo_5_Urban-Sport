let { check, body } = require('express-validator');
const { users } = require('../data/dataBase');
const bcryptjs = require('bcryptjs');

module.exports = [
    check('email')
        .isEmail().withMessage('Debes ingresar un email valido'),

    body('email').custom(value => {
        let user = users.find( user => user.email === value)
        if( user !== undefined){
            return true
        } else {
            return false
        }
    }).withMessage('No se encuentra el email')
    ,
    
    check('password')
        .notEmpty().withMessage('Escribe tu contraseña'),
    
    body('password').custom((value, {req})=>{
        
            let user = users.find( user => user.email === req.body.email)
            return bcryptjs.compareSync(value , user.pass)
        
    }).withMessage('Contraseña invalida')   
]