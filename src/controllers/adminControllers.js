module.exports = {
    agregar:(req,res)=>{
        res.render("agregar");
    },
    editar:(req,res)=>{
        res.render("editar");
    },
    eliminar:(req,res)=>{
        res.render("eliminar");
    },
    loginAdministrador:(req,res)=>{
        res.render("loginAdministrador");
    },
    panel:(req,res)=>{
        res.render("panel");
    }
}