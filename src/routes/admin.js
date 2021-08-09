var express = require('express');
var router = express.Router();
let {admin,panelProductos,formAgregar,agregar,formEditar,editar,eliminar} = require("../controllers/adminControllers")

let uploadFile = require('../middelwares/uploadFiles');

/* GET  admin*/
router.get("/",admin);

router.get("/panelProductos",panelProductos);

router.get('/agregar',formAgregar);
router.post('/agregar',uploadFile.single('imagen-producto'),agregar);

router.get("/editar/:id",formEditar);
router.put("/editar/:id",editar);

router.delete("/eliminar/:id",eliminar);


 
module.exports = router;