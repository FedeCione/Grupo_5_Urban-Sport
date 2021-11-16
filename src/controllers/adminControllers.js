const db = require("../database/models");
const { Op } = require('sequelize');
const fs = require("fs");
const { validationResult } = require("express-validator");

module.exports = {
  admin: (req, res) => {
    res.render("admin/admin", {
      session: req.session,
    });
  },

  panelProductos: (req, res) => {
    db.Products.findAll()
      .then((products) => {
        db.Colours.findAll({
          include: [{
            association: 'products',
            include: [{
              association: 'colours',
            }]
          }]
        })
          .then(colours => {
            db.Brands.findAll({
              include: [{
                association: 'products',
              }]
            })
              .then(brands => {
                db.Images.findAll({
                  include: [{
                    association: 'product'
                  }]
                })
                  .then(images => {
                    db.Colour_products.findAll()
                      .then(colour_products => {
                        db.Talle_products.findAll()
                          .then(talle_products => {
                            db.Subcategories.findAll({
                              include: [{
                                association: 'products',
                                association: 'category'
                              }]
                            })
                              .then(subcategories => {
                                db.Categories.findAll({
                                  include: [{
                                    association: 'subcategories'
                                  }]
                                })
                                  .then(categories => {
                                    db.Talles.findAll({
                                      include: [{
                                        association: 'products'
                                      }]
                                    })
                                      .then(talles => {
                                        res.render("admin/products/panelProducts", {
                                          session: req.session,
                                          products,
                                          colours,
                                          brands,
                                          images,
                                          colour_products,
                                          talle_products,
                                          subcategories,
                                          categories,
                                          talles
                                        })
                                      })
                                      .catch(err => console.log(err))
                                  })
                                  .catch(err => console.log(err))
                              })
                              .catch(err => console.log(err))
                          })
                          .catch(err => console.log(err))
                      })
                      .catch(err => console.log(err))
                  })
                  .catch(err => console.log(err))
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  },
  formAgregar: (req, res) => {
    db.Colours.findAll({
      include: [{
        association: 'products',
        include: [{
          association: 'colours'
        }]
      }]
    })
      .then(colours => {
        db.Brands.findAll({
          include: [{
            association: 'products'
          }]
        })
          .then(brands => {
            db.Categories.findAll({
              include: [{
                association: 'subcategories'
              }]
            })
              .then(categories => {
                db.Subcategories.findAll({
                  include: [{
                    association: 'products',
                    association: 'category'
                  }]
                })
                  .then(subcategories => {
                    db.Talles.findAll({
                      include: [{
                        association: 'products'
                      }]
                    })
                      .then(talles => {
                        res.render("admin/products/addProduct", {
                          session: req.session,
                          colours,
                          brands,
                          categories,
                          subcategories,
                          talles
                        })
                      })
                      .catch(err => console.log(err))
                  })
                  .catch(err => console.log(err))
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  },
  agregar: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }

    if (errors.isEmpty()) {
      let arrayImages = [];
      if (req.files) {
        req.files.forEach((image) => {
          arrayImages.push(image.filename);
        });
      }
      let {
        name,
        id_marca,
        description,
        id_subcategory,
        colour,
        id_talle,
        price,
        discount,
        visible,
        stock,
      } = req.body;

      db.Products.create({
        name,
        description,
        id_subcategory,
        price,
        discount,
        visible,
        stock,
        id_marca
      })
        .then(product => {
          db.Colour_products.create({
            id_colour: colour,
            id_product: product.id
          })
            .then(result => {
              db.Talle_products.create({
                id_talle: id_talle,
                id_product: product.id
              })
                .then(result => {
                  if (arrayImages.length > 0) {
                    let images = arrayImages.map((image) => {
                      return {
                        name: image,
                        productId: product.id,
                      };
                    });
                    db.Images.bulkCreate(images)
                      .then(() => res.redirect("/admin/panelProductos"))
                      .catch((err) => console.log(err));
                  } else {
                    db.Images.create({
                      name: "default.png",
                      productId: product.id,
                    })
                      .then(() => res.redirect("/admin/panelProductos"))
                      .catch(err => console.log(err));
                  }
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

    } else {
      db.Colours.findAll({
        include: [{
          association: 'products',
          include: [{
            association: 'colours'
          }]
        }]
      })
        .then(colours => {
          db.Brands.findAll({
            include: [{
              association: 'products'
            }]
          })
            .then(brands => {
              db.Categories.findAll({
                include: [{
                  association: 'subcategories'
                }]
              })
                .then(categories => {
                  db.Subcategories.findAll({
                    include: [{
                      association: 'products',
                      association: 'category'
                    }]
                  })
                    .then(subcategories => {
                      db.Talles.findAll({
                        include: [{
                          association: 'products'
                        }]
                      })
                        .then(talles => {
                          res.render("admin/products/addProduct", {
                            colours,
                            brands,
                            categories,
                            subcategories,
                            talles,
                            errors: errors.mapped(),
                            old: req.body,
                            session: req.session,
                          })
                        })
                        .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  },
  formEditar: (req, res) => {
    db.Products.findByPk(req.params.id)
      .then(product => {
        db.Colours.findAll({
          include: [{
            association: 'products',
            include: [{
              association: 'colours'
            }]
          }]
        })
          .then(colours => {
            db.Brands.findAll({
              include: [{
                association: 'products'
              }]
            })
              .then(brands => {
                db.Categories.findAll({
                  include: [{
                    association: 'subcategories'
                  }]
                })
                  .then(categories => {
                    db.Subcategories.findAll({
                      include: [{
                        association: 'products',
                        association: 'category'
                      }]
                    })
                      .then(subcategories => {
                        db.Talles.findAll({
                          include: [{
                            association: 'products'
                          }]
                        })
                          .then(talles => {
                            db.Talle_products.findOne({
                              where: {
                                id_product: product.id
                              }
                            })
                              .then(talle_product => {
                                db.Colour_products.findOne({
                                  where: {
                                    id_product: product.id
                                  }
                                })
                                  .then(colour_product => {
                                    let productSubcategory = subcategories.find(subcategory => subcategory.id == product.id_subcategory);
                                    let productCategory = categories.find(category => category.id == productSubcategory.categories_id);
                                    let productSubcategories = subcategories.filter(subcategory => subcategory.categories_id == productCategory.id);
                                    res.render("admin/products/editProduct", {
                                      productSubcategories,
                                      productSubcategory,
                                      productCategory,
                                      product,
                                      session: req.session,
                                      colours,
                                      brands,
                                      categories,
                                      subcategories,
                                      talles,
                                      talle_product,
                                      colour_product
                                    })
                                  })
                              })
                              .catch(err => console.log(err))
                          })
                          .catch(err => console.log(err))
                      })
                      .catch(err => console.log(err))
                  })
                  .catch(err => console.log(err))
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
  },

  editar: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }
    if (errors.isEmpty()) {
      let { name, id_marca, description, id_subcategory, categoria, colour, id_talle, price, discount, visible, stock } =
        req.body;

      let arrayImages = [];
      if (req.files) {
        req.files.forEach((image) => {
          arrayImages.push(image.filename);
        });
      }
      db.Products.update(
        {
          name,
          id_marca,
          description,
          id_subcategory,
          price,
          discount,
          visible,
          stock
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then((result) => {
          if (result) {
            if (arrayImages.length > 0) {
              let images = arrayImages.map((image) => {
                return {
                  name: image,
                  productId: req.params.id,
                };
              });
              db.Images.findAll({
                where: {
                  productId: req.params.id,
                },
              }).then((result) => {
                result.forEach((image) => {
                  fs.existsSync("./public/images/admin/productos/", image.name)
                    ? fs.unlinkSync("./public/images/admin/productos/" + image.name)
                    : console.log("-- No se encontró");
                });
                db.Images.destroy({
                  where: {
                    productId: req.params.id,
                  },
                }).then(() => {
                  db.Images.bulkCreate(images)
                    .then(() => {
                      db.Colour_products.update({
                        id_colour: colour
                      },
                        {
                          where: {
                            id_product: req.params.id
                          }
                        })
                        .then(() => {
                          db.Talle_products.update({
                            id_talle: id_talle,
                          },
                            {
                              where: {
                                id_product: req.params.id
                              }
                            })
                            .then(() => {
                              res.redirect("/admin/panelProductos");
                            });
                        });
                    });
                });
              });
            } else {
              db.Colour_products.update({
                id_colour: colour
              },
                {
                  where: {
                    id_product: req.params.id
                  }
                })
                .then(() => {
                  db.Talle_products.update({
                    id_talle: id_talle,
                  },
                    {
                      where: {
                        id_product: req.params.id
                      }
                    })
                    .then(() => {
                      res.redirect("/admin/panelProductos");
                    });
                });
            }
          }
        });
    } else {
      db.Products.findByPk(req.params.id)
        .then(product => {
          res.render("admin/products/editProduct", {
            product,
            errors: errors.mapped(),
            old: req.body,
            session: req.session,
          });
        })
    }
  },

  eliminar: (req, res) => {
    db.Images.destroy({
      where: {
        productId: req.params.id,
      }
    })
      .then(result => {
        db.Products.destroy({
          where: {
            id: +req.params.id,
          },
        })
          .then(() => {
            res.redirect("/admin/panelProductos");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },
  searchProducts: (req, res) => {
    let search = req.query.keywords
    db.Products.findAll({
      where: { name: { [Op.substring]: search } }
    })
      .then(products => {

        res.render('/admin/adminProductSearch', {
          product: products,
          search,
          session: req.session
        })
      })
  }
};
