let express = require('express');
let router = express.Router();
let {register, processRegister, login, loginRegister, logout, olvidecuenta, perfil} = require("../controllers/usersControllers");

let avatarUpload = require('../middelwares/avatarUpload');
let userSession = require('../middelwares/userSession');

let loginValidator = require('../validations/loginValidation');
let registerValidator = require('../validations/registerValidation')

/* GET users listing. */
/* Para registrar al usuario */
router.get('/register', register);
router.post('/register', avatarUpload.single('avatar'), registerValidator, processRegister);

/* Para que ingrese loguado el usuario */
router.get('/login', login);
router.post('/login', loginValidator, loginRegister);
router.get('/logout', logout); //Para que cierre 

/* Informacion de perfil de usuario */
router.get('/perfil', userSession, perfil);


router.get('/olvidecuenta', olvidecuenta)


module.exports = router;