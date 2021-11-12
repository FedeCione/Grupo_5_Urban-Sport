let express = require('express');
let router = express.Router();
let {allProducts, allCategories, oneCategory} = require('../controllers/api/apiController');
let userSession = require('../middelwares/userSession');

router.get('/categories', allCategories);
router.get('/categories/:id', oneCategory);
router.get('/products', allProducts)

module.exports = router;