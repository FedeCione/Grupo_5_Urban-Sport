var express = require('express');
var router = express.Router();
let {agregar,editar,eliminar,admin,panel} = require("../controllers/adminControllers")

/* GET  admin*/
router.get('/agregar',agregar);
router.get("/editar",editar);
router.get("/eliminar",eliminar);
router.get("/",admin);
router.get("/panel",panel);

module.exports = router;