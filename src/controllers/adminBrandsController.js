const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
    brands: (req, res) => {
        db.Brands.findAll().then((brands) => {
            res.render("admin/brands/panelBrands", {
                brands,
                session: req.session,
            });
        });
    },
    brandCreate: (req, res) => {
        res.render("admin/brands/addBrand", {
            session: req.session,
        });
    },
    brandStore: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Brands.create({
                name: req.body.name,
            }).then((result) => {
                res.redirect("/admin/brands");
            }).catch(error => console.log(error))
        }
    },
    brandEdit: (req, res) => {
        db.Brands.findByPk(req.params.id).then((brand) => {
            res.render("admin/brands/editBrand", {
                brand,
                session: req.session,
            });
        });
    },
    brandUpdate: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
                db.Brands.update(
                    {
                        name: req.body.name,
                    },
                    {
                        where: {
                            id: req.params.id,
                        },
                    }
                ).then((result) => {
                    res.redirect("/admin/brands");
                });
        } else {
            db.Brands.findByPk(req.params.id).then((brand) => {
                res.render("admin/brands/editBrand", {
                    brand,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                });
            });
        }
    },
    brandDestroy: (req, res) => {
        db.Products.destroy({
            where: {
                id_marca: req.params.id
            }
        }).then((result) => {
            db.Brands.destroy({
                where: {
                    id: req.params.id,
                },
            }).then((result) => {
                return res.redirect("/admin/brands");
            });
        });
    },
};
