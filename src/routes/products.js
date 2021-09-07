let express = require("express");
let router = express.Router();
let {carrito, productDetail} = require("../controllers/productsControllers")

router.get("/carrito",carrito);

router.get("/productDetail",productDetail)









module.exports = router;