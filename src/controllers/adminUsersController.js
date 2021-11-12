const { validationResult } = require("express-validator");
const db = require("../database/models");
const fs = require("fs");

module.exports = {
    users: (req, res) => {
        db.Users.findAll().then((users) => {
            res.render("admin/users/panelUsers", {
                users,
                session: req.session,
            });
        });
    },
    userEdit: (req, res) => {
        db.Users.findByPk(req.params.id).then((user) => {
            res.render("admin/users/editUser", {
                user,
                session: req.session,
            });
        });
    },
    userUpdate: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Users.update(
                {
                    name: req.body.name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    rol_id: req.body.rol_id,
                    province: req.body.province,
                    city: req.body.city,
                    avatar: req.file && req.file.filename,
                    dni: req.body.dni,
                    postalcode: req.body.postalcode
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            ).then((result) => {
                res.redirect("/admin/users");
            });
        } else {
            db.Users.findByPk(req.params.id).then((user) => {
                res.render("admin/users/editUser", {
                    user,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                });
            });
        }
    },
    userDestroy: (req, res) => {
        db.Users.findByPk(req.params.id).then((user) => {
            fs.existsSync("./public/images/users/", user.avatar)
                ? fs.unlinkSync("./public/images/users/" + user.avatar)
                : console.log("-- No se encontró");
            db.Users.destroy({
                where: {
                    id: req.params.id
                }
            }).then((result) => {
                return res.redirect("/admin/users");
            });
        });
    },
};