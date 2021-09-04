let { users, writeUsersJSON } = require('../data/dataBase')
const { validationResult } = require('express-validator');

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
                pass: password,
                rol: "ROl_USER",
                avatar : req.file ? req.file.filename : "default.png"
            };

            users.push(newUser);

            writeUsersJSON(users);

            res.redirect('/users/login')
            
        } else {
            
            res.render('register',{
                errors: errors.mapped(),
                old: req.body
            })
        }

    },
    login:(req,res)=>{
        
        res.render("login");
    },
    loginRegister:(req,res)=>{
       
        
        
    },
    logout:(req,res)=>{
       
        res.render("register");
    },
    
    
    olvidecuenta:(req,res)=>{
        res.send('ok')
    }
   
};