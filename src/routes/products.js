let express = require("express");
let router = express.Router();
let controller = require("../controllers/productsControllers")
router.get("/:carrito",controller.carrito);
router.get("/:productDetail",controller.productDetail)

module.exports = router;