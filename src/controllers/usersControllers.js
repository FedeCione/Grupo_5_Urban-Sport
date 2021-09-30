let { users, writeUsersJSON } = require('../data/dataBase');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = {
    /* Register Form */
    register: (req, res) => {
        // Si esta la sesion iniciada, redirige a home, sino renderiza register
        if (req.session.user) {
            res.redirect('/', {
                session: req.session
            });
        } else {
            res.render("register", {
                session: req.session
            });
        }
    },
    processRegister: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            //Capturando los datos del formulario
            let {
                name,
                last_name,
                email,
                password
            } = req.body;

            db.Users.create({
                name,
                last_name,
                email,
                password: bcrypt.hashSync(password, 10),
                rol_id: 0,
                avatar: req.file ? req.file.filename : "default.png"
            }).then(() => {
                res.redirect("/users/login")
            })
                .catch(err => console.log(err))
        } else {
            res.render('register', {
                session: req.session,
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: (req, res) => {
        // Si esta la sesion iniciada, redirige a perfil, sino renderiza login
        if (req.session.user) {
            res.redirect('/users/profile');
        } else {
            res.render("login", {
                session: req.session,
            });
        }

    },
    processLogin: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.Users.findOne({
                where: {
                    email: req.body.email
                },
            })
                .then((user) => {
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        last_name: user.last_name,
                        email: user.email,
                        avatar: user.avatar,
                        rol_id: user.rol_id
                    }
                    if (req.body.remember) { // Si el checkbox está seleccionado creo la cookie
                        res.cookie('userUrbanSport', req.session.user, { expires: new Date(Date.now() + 900000), httpOnly: true })
                    }
                    res.locals.user = req.session.user; //Creo la variable user en la propiedad locals dentro del objeto request y como valor le asigno los datos del usuario en sesión
                    res.redirect('/')
                })
        } else {
            res.render('login', {
                errors: errors.mapped(),
                session: req.session
            })
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.userUrbanSport) {
            res.cookie('userUrbanSport', '', { maxAge: -1 })
        }
        res.redirect('login');
    },

    profile: (req, res) => {
        db.Users.findByPk(req.session.user.id).then((user) => {
            res.render("profile", {
                session: req.session,
                user
            });
        });
    },
    editProfile: (req, res) => {
        db.Users.findByPk(req.params.id).then((user) => {
            res.render("editProfile", {
                session: req.session,
                user
            });
        });
    },
    updateProfile: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let {
                name,
                last_name,
                tel,
                dni,
                address,
                postalcode,
                province,
                city
            } = req.body;
            db.Users.update(
                {
                    name,
                    last_name,
                    phone: tel,
                    dni,
                    address,
                    postalcode,
                    province,
                    city,
                    avatar: req.file && req.file.filename
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            ).then((result) => {
                res.redirect("/users/profile");
            });
        } else {
            res.render("profile", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
            });
        }
    },

    olvidecuenta: (req, res) => {
        res.render('olvidecuenta', {
            session: req.session
        });
    },

};