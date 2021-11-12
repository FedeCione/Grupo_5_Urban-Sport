var express = require('express');
var router = express.Router();
let {admin,panelProductos,formAgregar,agregar,formEditar,editar,eliminar, searchProducts} = require("../controllers/adminControllers")

let upload = require('../middlewares/uploadFiles');
let userSession = require('../middlewares/userSession');
let adminCheckValidator = require('../middlewares/userAdminCheck');

/* GET  admin*/
router.get("/",userSession, adminCheckValidator, admin);

router.get("/panelProductos",userSession, adminCheckValidator, panelProductos);

router.get('/agregar',userSession, adminCheckValidator, formAgregar);
router.post('/agregar',upload.array('image'),userSession, adminCheckValidator, agregar);

router.get("/editar/:id",userSession, adminCheckValidator, formEditar);
router.put("/editar/:id",userSession, adminCheckValidator, editar);

router.delete("/eliminar/:id", userSession, adminCheckValidator, eliminar);

router.get('/search', searchProducts);
 
module.exports = router;