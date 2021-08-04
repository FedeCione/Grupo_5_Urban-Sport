let express = require("express")
let router = express.Router();
let controller = require("../controllers/homeController")

router.get("/", controller.home)

module.exports = router;