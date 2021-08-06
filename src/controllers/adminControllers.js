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
    admin:(req,res)=>{
        res.render("admin");
    },
    panel:(req,res)=>{
        res.render("panel");
    }
}