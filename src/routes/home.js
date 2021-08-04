let express = require("express")
let router = express.Router();
let {home} = require("../controllers/homeController")

router.get("/",home)

module.exports = router;