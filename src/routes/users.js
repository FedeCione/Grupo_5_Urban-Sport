var express = require('express');
var router = express.Router();
let {login,olvidecuenta,registro} = require("../controllers/usersControllers")
/* GET users listing. */
router.get('/login',login)
router.get('/olvidecuenta',olvidecuenta)
router.get("/registro",registro)

module.exports = router;