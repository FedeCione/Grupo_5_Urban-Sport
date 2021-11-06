var express = require('express');
var router = express.Router();
let {admin,panelProductos,formAgregar,agregar,formEditar,editar,eliminar, searchProducts} = require("../controllers/adminControllers");
let {categories, categoryCreate, categoryStore, categoryEdit, categoryUpdate, categoryDestroy} = require('../controllers/adminCategoriesController');
let categoriesValidator = require('../validations/categoriesValidator');
let {subcategories, subcategoryCreate, subcategoryStore, subcategoryEdit, subcategoryUpdate, subcategoryDestroy} = require('../controllers/adminSubcategoriesController');
let subcategoriesValidator = require('../validations/subcategoriesValidator');
let upload = require('../middelwares/uploadFiles');
let userSession = require('../middelwares/userSession');
let adminCheckValidator = require('../middelwares/userAdminCheck');
let {brands, brandCreate, brandStore, brandEdit, brandUpdate, brandDestroy} = require('../controllers/adminBrandsController');
let {colours, colourCreate, colourStore, colourEdit, colourUpdate, colourDestroy} = require('../controllers/adminColoursController');
let {talles, talleCreate, talleStore, talleEdit, talleUpdate, talleDestroy} = require('../controllers/adminTallesController');

/* ADMIN */
router.get("/",userSession, adminCheckValidator, admin);

/******************/
/* CRUD PRODUCTS */
/******************/
/* GET - All products*/
router.get("/panelProductos",userSession, adminCheckValidator, panelProductos);

/* Create Product */
router.get('/agregar',userSession, adminCheckValidator, formAgregar);
router.post('/agregar',upload.array('image'),userSession, adminCheckValidator, agregar);

/* Edit Product*/
router.get("/editar/:id",userSession, adminCheckValidator, formEditar);
router.put("/editar/:id",userSession, adminCheckValidator, editar);

/* Delete Product*/
router.delete("/eliminar/:id", userSession, adminCheckValidator, eliminar);

/* Search products - Admin */
router.get('/search', searchProducts);

/******************/
/* CRUD CATEGORIES */
/******************/

/* All categories */
router.get('/categories', userSession, adminCheckValidator,categories);

/* Create Category */
router.get('/categories/create', userSession, adminCheckValidator,categoryCreate);
router.post('/categories/create', categoriesValidator, categoryStore);

/* Edit Category */
router.get('/categories/edit/:id', userSession, adminCheckValidator,categoryEdit);
router.put('/categories/edit/:id', categoriesValidator, categoryUpdate);

/* Delete Category */
router.delete('/categories/delete/:id', userSession, adminCheckValidator, categoryDestroy);

/******************/
/* CRUD SUBCATEGORIES */
/******************/

/* All subcategories */
router.get('/subcategories', userSession, adminCheckValidator,subcategories);

/* Create subcategory */
router.get('/subcategories/create', userSession, adminCheckValidator,subcategoryCreate);
router.post('/subcategories/create', subcategoriesValidator, subcategoryStore);

/* Edit subcategory */
router.get('/subcategories/edit/:id', userSession, adminCheckValidator,subcategoryEdit);
router.put('/subcategories/edit/:id', subcategoriesValidator, subcategoryUpdate);

/* Delete subcategory */
router.delete('/subcategories/delete/:id', userSession, adminCheckValidator, subcategoryDestroy);

/******************/
/* CRUD BRANDS */
/******************/

/* All brands */
router.get('/brands', userSession, adminCheckValidator, brands);

/* Create brand */
router.get('/brands/create', userSession, adminCheckValidator, brandCreate);
router.post('/brands/create', userSession, adminCheckValidator, brandStore);

/* Edit brand */
router.get('/brands/edit/:id', userSession, adminCheckValidator, brandEdit);
router.put('/brands/edit/:id', userSession, adminCheckValidator, brandUpdate);

/* Delete brand */
router.delete('/brands/delete/:id', userSession, adminCheckValidator, brandDestroy);

/******************/
/* CRUD COLOURS */
/******************/

/* All colours */
router.get('/colours', userSession, adminCheckValidator, colours);

/* Create colour */
router.get('/colours/create', userSession, adminCheckValidator, colourCreate);
router.post('/colours/create', userSession, adminCheckValidator, colourStore);

/* Edit colour */
router.get('/colours/edit/:id', userSession, adminCheckValidator, colourEdit);
router.put('/colours/edit/:id', userSession, adminCheckValidator, colourUpdate);

/* Delete colour */
router.delete('/colours/delete/:id', userSession, adminCheckValidator, colourDestroy);

/******************/
/* CRUD BRANDS */
/******************/

/* All brands */
router.get('/brands', userSession, adminCheckValidator, brands);

/* Create brand */
router.get('/brands/create', userSession, adminCheckValidator, brandCreate);
router.post('/brands/create', userSession, adminCheckValidator, brandStore);

/* Edit brand */
router.get('/brands/edit/:id', userSession, adminCheckValidator, brandEdit);
router.put('/brands/edit/:id', userSession, adminCheckValidator, brandUpdate);

/* Delete brand */
router.delete('/brands/delete/:id', userSession, adminCheckValidator, brandDestroy);

/******************/
/* CRUD TALLES */
/******************/

/* All talles */
router.get('/talles', userSession, adminCheckValidator, talles);

/* Create talle */
router.get('/talles/create', userSession, adminCheckValidator, talleCreate);
router.post('/talles/create', userSession, adminCheckValidator, talleStore);

/* Edit talle */
router.get('/talles/edit/:id', userSession, adminCheckValidator, talleEdit);
router.put('/talles/edit/:id', userSession, adminCheckValidator, talleUpdate);

/* Delete talle */
router.delete('/talles/delete/:id', userSession, adminCheckValidator, talleDestroy);
 
module.exports = router;