const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
  categories: (req, res) => {
    db.Categories.findAll().then((categories) => {
      res.render("admin/categories/panelCategories", {
        categories,
        session: req.session,
      });
    });
  },
  categoryCreate: (req, res) => {
    res.render("admin/categories/addCategorie", {
      session: req.session,
    });
  },
  categoryStore: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Categories.create({
        name: req.body.name,
      }).then((result) => {
        res.redirect("/admin/categories");
      }).catch(error => console.log(error))
    }
  },
  categoryEdit: (req, res) => {
    db.Categories.findByPk(req.params.id).then((category) => {
      res.render("admin/categories/editCategorie", {
        category,
        session: req.session,
      });
    });
  },
  categoryUpdate: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Categories.findByPk(req.params.id).then((category) => {
        db.Categories.update(
          {
            name: req.body.name,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        ).then((result) => {
          res.redirect("/admin/categories");
        });
      });
    } else {
      db.Categories.findByPk(req.params.id).then((category) => {
        res.render("admin/categories/editCategorie", {
          category,
          errors: errors.mapped(),
          old: req.body,
          session: req.session,
        });
      });
    }
  },
  categoryDestroy: (req, res) => {
    db.Subcategories.destroy({
      where: {
        categoryId: req.params.id,
      },
    }).then((result) => {
        db.Categories.destroy({
          where: {
            id: req.params.id,
          },
        }).then((result) => {
          return res.redirect("/admin/categories");
        });
    });
  },
};
