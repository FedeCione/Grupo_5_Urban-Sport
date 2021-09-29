let express = require("express");
let router = express.Router();
let { home, search } = require("../controllers/homeController");
//let cookieCheck = require("../middelwares/cookieCheck")
router.get("/",/*cookieCheck,*/home);


router.get('/search', search);



module.exports = router;
