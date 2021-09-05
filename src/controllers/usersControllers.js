let { users, writeUsersJSON } = require('../data/dataBase')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    /* RegisterForm */
    register:(req,res)=>{
        res.render("register");
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
        
        res.render("login",{
            session: req.session
          });
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
                session:req.session 
            })
        
        }
    },
    logout:(req,res)=>{
       
        res.render("register");
    },
    
    
    olvidecuenta:(req,res)=>{
        res.send('ok')
    }
   
};