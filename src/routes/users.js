var express = require('express');
var router = express.Router();
let controller = require("../controllers/usersControllers")
/* GET users listing. */
router.get('/login',controller.login)
router.get('/olvidecuenta',controller.olvidecuenta)
router.get("/registro",controller.registro)

module.exports = router;