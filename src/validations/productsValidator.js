const { check } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage("Este campo es obligatorio").bail()
        .isLength({ min: 5 }).withMessage("El nombre del producto debe tener como mínimo 5 caracteres"),

    check('id_marca')
        .notEmpty().withMessage("Debes elegir una marca"),

    check('description')
        .notEmpty().withMessage("Debes poner una descripcion del producto").bail()
        .isLength({ min: 20}).withMessage("La descripcion del producto debe tener como mínimo 20 caracteres"),
   
    check('categoria')
        .notEmpty().withMessage("Debes elegir una categoria"),

    check('id_subcategory')
        .notEmpty().withMessage("Debes elegir una subcategoria"),
    
    check('colour')
        .notEmpty().withMessage("Debes elegir el color del producto"),

    check('id_talle')
        .notEmpty().withMessage("Debes elegir el talle del producto"),

    check('price')
        .notEmpty().withMessage("Debes colocar el precio del producto"),

    check('discount')
        .notEmpty().withMessage("Debes colocar el descuento(Si no tiene, solo poner 0)"),
    
    check('stock')
        .notEmpty().withMessage("Debes colocar el stock(Si no tiene, solo poner 0)")
]
