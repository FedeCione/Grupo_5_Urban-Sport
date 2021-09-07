let express = require("express");
let router = express.Router();
let { home, search } = require("../controllers/homeController");

router.get("/", home);


router.get('/search', search);



module.exports = router;
