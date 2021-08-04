var express = require('express');
var router = express.Router();
let controller = require("../controllers/adminControllers")

/* GET  admin*/
router.get('/agregar',controller.agregar);
router.get("/editar",controller.editar);
router.get("/eliminar",controller.eliminar);
router.get("/loginAdministrador",controller.loginAdministrador);
router.get("/panel",controller.panel);

module.exports = router;