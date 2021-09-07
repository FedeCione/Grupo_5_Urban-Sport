let { users, writeUsersJSON } = require('../data/dataBase');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');

module.exports = {
    /* Register Form */
    register:(req,res)=>{
        // Si esta la sesion iniciada, redirige a home, sino renderiza register
        if(req.session.user) {
            res.redirect('/');
        } else {
            res.render("register", {
                session: req.session
            });
        }
    },
    processRegister:(req,res)=>{
      
        let errors = validationResult(req);

        if (errors.isEmpty()){

            let lastId = 0;

            users.forEach( user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });
            //Capturando los datos del formulario
            let { 
                name,
                last_name,
                email,
                password
            } = req.body;

            let newUser = {
                id : lastId + 1,
                name,
                last_name,
                email,
                pass: bcrypt.hashSync(password, 10),
                rol: "ROl_USER",
                avatar : req.file ? req.file.filename : "default.png"
            };

            users.push(newUser);

            writeUsersJSON(users);

            res.redirect('/users/login',{
                session: req.session
              })
            
        } else {
            
            res.render('register',{
                errors: errors.mapped(),
                old: req.body
            })
        }

    },
    login:(req,res)=>{
        // Si esta la sesion iniciada, redirige a perfil, sino renderiza login
        if(req.session.user) {
            res.redirect('/users/perfil');
        } else {
            res.render("login",{
                session: req.session,
            });
        }

    },
    loginRegister:(req,res)=>{
        let errors = validationResult(req)
            
        if(errors.isEmpty()){

            let user = users.find(user => user.email === req.body.email)
            
            req.session.user = { 
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            if(req.body.remember){ // Si el checkbox está seleccionado creo la cookie
                res.cookie('kannemannCookie',req.session.user,{expires: new Date(Date.now() + 900000), httpOnly: true})
            } 

            res.locals.user = req.session.user; //Creo la variable user en la propiedad locals dentro del objeto request y como valor le asigno los datos del usuario en sesión
        
            res.redirect('/')
                     
        } else{
            res.render('login', {
                errors: errors.mapped(), 
                session: req.session 
            })
        
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    },

    perfil: (req, res) =>{
        let user = users.find(user => user.id === req.session.user.id);
        res.render('perfil', {
            session: req.session,
            user
        });

},
    
    olvidecuenta:(req,res)=>{
        res.render('olvidecuenta', {
            session: req.session
        });
    },
   
};