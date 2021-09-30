let express = require('express');
let router = express.Router();
let {register, processRegister, login, processLogin, logout, olvidecuenta, profile, editProfile, updateProfile} = require("../controllers/usersControllers");

let avatarUpload = require('../middelwares/avatarUpload');
let userSession = require('../middelwares/userSession');

let loginValidator = require('../validations/loginValidation');
let registerValidator = require('../validations/registerValidation');

/* GET users listing. */
/* Para registrar al usuario */
router.get('/register', register);
router.post('/register', avatarUpload.single('avatar'), registerValidator, processRegister);

/* Para que ingrese loguado el usuario */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout); //Para que cierre 

/* Informacion de perfil de usuario */
router.get('/profile', userSession, profile);


router.get('/profile/edit/:id', editProfile)
router.put('/profile/edit/:id', avatarUpload.single('avatar'), updateProfile) 


router.get('/olvidecuenta', olvidecuenta)


module.exports = router;