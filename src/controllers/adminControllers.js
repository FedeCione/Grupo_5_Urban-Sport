const fs = require('fs')
const { validationResult } = require('express-validator');
const db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    admin: (req, res) => {
        res.render('admin',{
            session:req.session
        })
    },
    
    panelProductos: (req, res) => {
        db.Products.findAll()
        .then(products => {
            res.render('panelProductos', {
                products,
                session: req.session
            })
        })
    }, 
    formAgregar:(req,res)=>{
       res.render("agregar",{
           session:req.session
       })
    },
    agregar: (req, res) =>{ 
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let arrayImages = []
            if(req.files){
                req.files.forEach(image => {
                    arrayImages.push(image.filename)
                })
            }
            let { nombre, marca, descripcion, cateogoria, subcategoria, color, talle, precio, discontinuo, imagen,visible,stock} = req.body
            db.Products.create( {
                nombre,
                 marca,
                  descripcion,
                   cateogoria,
                    subcategoria,
                     color,
                      talle,
                       precio,
                        discontinuo,
                         visible,
                         stock
            })
            .then(product => {
                if(arrayImages.length > 0){
                    let images = arrayImages.map(image => {
                        return {
                            name: image,
                            product_id: product.id
                        }
                    })
                    db.Image.bulkCreate(images)
                    .then(()=> res.redirect('/admin/panelProductos'))
                    .catch(err => console.log(err))                    
                }else {
                    db.Image.create({
                        name: "default-image.png",
                        product_id: product.id
                    })
                    .then(()=> res.redirect('/admin/panelProductos'))
                    .catch(err => console.log(err))
                }
            })
            .catch(error => {
                res.send(error)
            })
            
            
        } else {
            res.render('agregar', {
                title: "agregar",
                errors : errors.mapped(),
                old : req.body,
                session: req.session ? req.session : ""
            })
        } 
    }, 
     
 
    formEditar: (req, res) => {
        db.Products.findByPk(req.params.id)
        .then(product => {
            res.render('editar', {
                //categories, 
                //subcategories,
                product,
                session: req.session
            })
        })
    },
    editar: (req, res) => {
        let errors = validationResult(req);
        let images;
        if (errors.isEmpty()) {
              db.Images.destroy({
                  where: {
                    id: +req.params.id,
                  },
                })
                .then((result) => {
                    let { nombre, marca, descripcion, cateogoria, subcategoria, color, talle, precio, discontinuo, imagen,visible,stock } = req.body; 
                    db.Products
                    .update(
                      {
                        name : nombre,
                        description : descripcion,
                        price : precio,
                        discount :discontinuo,
                        id_marca : marca,
                        visible: visible,
                        stock : stock,
                        id_talle : talle,
                        id_color : color 
                      },
                      {
                        where: {
                          id: +req.params.id,
                        },
                      }
                    )
                    .then((productUpdated) => {
                      if (req.files.length > 0) {
                        let images = [];
                        let nameImages = req.files.map((image) => image.filename);
                        nameImages.forEach((img) => {
                          let newImage = {
                            id_product: +req.params.id,
                            name: img
                          };
                          images.push(newImage);
                        });
                        db.Images
                          .bulkCreate(images)
                          .then((result) => {
                            res.redirect(`/adminProductos/panelProductos`);
                          });
                      } else {
                        db.Images.findAll({
                            where: {
                              id_product: req.params.id,
                            },
                          })
                          .then((images) => {
                            if (images == 0) {
                              db.Images.create({
                                id_product: req.params.id,
                                name: "default-image.png",
                              });
                            }
                            res.redirect(`/admin/panelProductos`);
                          });
                      }
                    });
                });
            }else {
          db.products
            .findByPk(req.params.id, {
              include: [
                { association: "category" },
                { association: "images" },
              ],
            })
            .then((product) => {
              res.render("productEdit", {
                errors: errors.mapped(),
                old: req.body,
                product,
              });
            });
        }
    },
    eliminar: (req, res) => {
        db.Products.destroy({
            where:+req.params.id
        })
        res.redirect("/admin/panelProductos")
    }
}