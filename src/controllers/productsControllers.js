let db = require('../database/models')
const fetch = require('node-fetch')

module.exports = {
    carrito: (req, res) => {
        db.Products.findAll({
          include: [{association: "subcategories"},
            {
              association: "images",
            }
          ]
      })
    .then(products => {
      res.render('carrito',{
        title: "products test",
        products,
        session: req.session
       })   
    }).catch(err => console.log(err))
    },
    
    productDetail:(req,res)=>{
        res.render("productDetail", {
            session: req.session
        });
    }
}