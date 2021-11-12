let express = require("express");
let router = express.Router();
let {carrito,productDetail} = require("../controllers/productsControllers")

let userSession = require('../middlewares/userSession');

router.get("/carrito", userSession, carrito);
router.get("/productDetail",productDetail)

module.exports = router;