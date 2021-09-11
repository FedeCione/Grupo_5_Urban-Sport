var express = require('express');
var router = express.Router();
let {admin,panelProductos,formAgregar,agregar,formEditar,editar,eliminar} = require("../controllers/adminControllers")

let uploadFile = require('../middelwares/uploadFiles');

let userSession = require('../middelwares/userSession');
/* GET  admin*/
router.get("/",userSession, admin);

router.get("/panelProductos",userSession, panelProductos);

router.get('/agregar',userSession, formAgregar);
router.post('/agregar',uploadFile.single('imagen-producto'),userSession, agregar);

router.get("/editar/:id",userSession, formEditar);
router.put("/editar/:id",userSession, editar);

router.delete("/eliminar/:id",eliminar);


 
module.exports = router;