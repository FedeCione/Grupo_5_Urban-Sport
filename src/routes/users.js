var express = require('express');
var router = express.Router();
var {register, processRegister, login, loginRegister, logout, olvidecuenta} = require("../controllers/usersControllers");

var avatarUpload = require('../middelwares/avatarUpload')

let loginValidator = require('../validations/loginValidation');
let registerValidator = require('../validations/registerValidation')

/* GET users listing. */
/* Para registrar al usuario */
router.get('/register', register);
router.post('/register', avatarUpload.single('avatar'), registerValidator, processRegister);

/* Para que ingrese loguado el usuario */
router.get('/login',login);
router.post('/login', loginRegister)
router.get('/logout', logout); //Para que cierre 


router.get('/olvidecuenta',olvidecuenta)


module.exports = router;