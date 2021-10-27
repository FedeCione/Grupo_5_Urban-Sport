let { bannerCarousel, getproductos } = require('../data/dataBase')


module.exports = {
  home: (req, res) => {
        
        res.render('home',{
              session: req.session,
              carousel: bannerCarousel
        })
        
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
