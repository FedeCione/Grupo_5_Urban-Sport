let { bannerCarousel, getproductos } = require('../data/dataBase')
let db = require('../database/models')
const sequelize = db.sequelize;


module.exports = {
  home: (req, res) => {
    db.Products.findAll({
      include: [{association: "subcategories"},
        {
          association: "images",
        }
      ]
  })
.then(products => {
  res.render('home',{
    title: "products test",
    products,
    session: req.session,
    carousel: bannerCarousel
   })   
}).catch(err => console.log(err))
     
        
  },
    search:(req, res) => {
      let resultSearch = [];

      getproductos.forEach( product => {
          if( product.subcategoria.includes(req.query.keywords)){
            resultSearch.push(product)
          }
      });

      if(resultSearch !== 0){
        res.render('results', {
          session: req.session,
          resultSearch,
          search: req.query.keywords
        });
      
      }
    }
};
