let express = require('express');
let router = express.Router();
let {allCategories, oneCategory} = require('../controllers/api/apiController');
let userSession = require('../middelwares/userSession');

router.get('/categories', allCategories);
router.get('/categories/:id', oneCategory);

module.exports = router;