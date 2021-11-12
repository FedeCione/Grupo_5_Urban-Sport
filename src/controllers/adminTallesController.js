const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
    talles: (req, res) => {
        db.Talles.findAll().then((talles) => {
            res.render("admin/talles/panelTalles", {
                talles,
                session: req.session,
            });
        });
    },
    talleCreate: (req, res) => {
        res.render("admin/talles/addTalle", {
            session: req.session,
        });
    },
    talleStore: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Talles.create({
                talle: req.body.name,
            }).then((result) => {
                res.redirect("/admin/talles");
            }).catch(error => console.log(error))
        }
    },
    talleEdit: (req, res) => {
        db.Talles.findByPk(req.params.id).then((talle) => {
            res.render("admin/talles/editTalle", {
                talle,
                session: req.session,
            });
        });
    },
    talleUpdate: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Talles.update(
                {
                    talle: req.body.name,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            ).then((result) => {
                res.redirect("/admin/talles");
            });
        } else {
            db.Colours.findByPk(req.params.id).then((colour) => {
                res.render("admin/talles/editTalle", {
                    colour,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                });
            });
        }
    },
    talleDestroy: (req, res) => {
        let pivotTalleProducts = [];
        pivotTalleProducts.push(db.Talle_products.findAll({ where: { id_talle: req.params.id } }));
        pivotTalleProducts.forEach(pivotTalleProduct => {
            db.Products.destroy({
                where: {
                    id: pivotTalleProduct.id_product
                }
            });
        });
        db.Talle_products.destroy({
            where: {
                id_talle: req.params.id
            }
        }).then((result) => {
            db.Talles.destroy({
                where: {
                    id: req.params.id,
                },
            }).then((result) => {
                return res.redirect("/admin/talles");
            });
        });
    },
};