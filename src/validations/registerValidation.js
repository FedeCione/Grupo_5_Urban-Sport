let { check, body } = require('express-validator');
const db = require("../database/models")


module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({ min: 3 }).withMessage("El nombre del usuario debe tener como mínimo 3 caracteres"),
    
    check('last_name')
        .notEmpty().withMessage('El apellido es requerido').bail()
        .isLength({ min: 3 }).withMessage("El apellido del usuario debe tener como mínimo 3 caracteres"),

    check('email')
        .isEmail().withMessage('Debes ingresar un email valido'),
    
        body('email').custom(value => {
              return db.Users.findOne({
                  where : {
                      email : value
                  }
              })
              .then(user => {
                  if(user){
                      return Promise.reject('Este email ya está registrado')
                  }
              })
          }),

     
        
    check('password')
        .notEmpty().withMessage('Escribe tu contraseña').isLength({min:6, max: 12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

   body('password').custom((value,{req}) => value != req.body.password2 ? false : true).withMessage('Las contraseñas no coinciden'),

    check('terms')
        .isString('on').withMessage('Debes aceptar las bases y condiciones')
]