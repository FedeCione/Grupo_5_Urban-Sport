const { validationResult } = require("express-validator");
const fs = require("fs");
const db = require("../database/models");
const categoriesValidator = require("../validations/categoriesValidator");

module.exports = {
  subcategories: (req, res) => {
    db.Subcategories.findAll()
      .then((subcategories) => {
        db.Categories.findAll()
          .then((categories) => {
            res.render("admin/subcategories/panelSubcategories", {
              subcategories,
              categories,
              session: req.session,
            });
          });
      });
  },
  subcategoryCreate: (req, res) => {
    db.Categories.findAll().then((categories) => {
      res.render("admin/subcategories/addSubcategorie", {
        categories,
        session: req.session,
      });
    });
  },
  subcategoryStore: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Subcategories.create({
        name: req.body.name,
        categories_id: req.body.categoria,
      }).then((result) => {
        res.redirect("/admin/subcategories");
      });
    } else {
      res.render("admin/subcategories/addSubcategorie", {
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
      });
    }
  },
  subcategoryEdit: (req, res) => {
    db.Subcategories.findByPk(req.params.id).then((subcategory) => {
      db.Categories.findAll().then((categories) => {
        res.render("admin/subcategories/editSubcategorie", {
          categories,
          subcategory,
          session: req.session,
        });
      });
    });
  },
  subcategoryUpdate: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Subcategories.findByPk(req.params.id).then((subcategory) => {
        db.Subcategories.update(
          {
            name: req.body.name,
            categories_id: req.body.categoria,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        ).then((result) => {
          res.redirect("/admin/subcategories");
        });
      });
    } else {
      db.Subcategories.findByPk(req.params.id).then((subcategory) => {
        res.render("admin/subcategories/editSubcategorie", {
          subcategory,
          errors: errors.mapped(),
          old: req.body,
          session: req.session,
        });
      });
    }
  },
  subcategoryDestroy: (req, res) => {
    db.Products.destroy({
      where: {
        id_subcategory: req.params.id,
      },
    }).then((result) => {
      db.Subcategories.destroy({
        where: {
          id: req.params.id,
        },
      }).then((result) => {
        return res.redirect("/admin/subcategories");
      });
    });
  },
};
