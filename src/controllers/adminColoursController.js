const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
    colours: (req, res) => {
        db.Colours.findAll().then((colours) => {
            res.render("admin/colours/panelColours", {
                colours,
                session: req.session,
            });
        });
    },
    colourCreate: (req, res) => {
        res.render("admin/colours/addColour", {
            session: req.session,
        });
    },
    colourStore: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Colours.create({
                name: req.body.name,
            }).then((result) => {
                res.redirect("/admin/colours");
            }).catch(error => console.log(error))
        }
    },
    colourEdit: (req, res) => {
        db.Colours.findByPk(req.params.id).then((colour) => {
            res.render("admin/colours/editColour", {
                colour,
                session: req.session,
            });
        });
    },
    colourUpdate: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Colours.findByPk(req.params.id).then((colour) => {
                db.Colours.update(
                    {
                        name: req.body.name,
                    },
                    {
                        where: {
                            id: req.params.id,
                        },
                    }
                ).then((result) => {
                    res.redirect("/admin/colours");
                });
            });
        } else {
            db.Colours.findByPk(req.params.id).then((colour) => {
                res.render("admin/colours/editColour", {
                    colour,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                });
            });
        }
    },
    colourDestroy: (req, res) => {
        db.Colours.destroy({
            where: {
                id: req.params.id,
            },
        }).then((result) => {
            return res.redirect("/admin/colours");
        });
    },
};
