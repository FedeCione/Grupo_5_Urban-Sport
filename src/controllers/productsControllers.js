module.exports = {
    carrito:(req,res)=>{
        res.render("carrito", {
            session: req.session
        });
    },
    productDetail:(req,res)=>{
        res.render("productDetail", {
            session: req.session
        });
    }
}