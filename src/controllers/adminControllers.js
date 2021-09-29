let { getproductos, writeJSON} = require('../data/dataBase');
let db = require("../database/models")
module.exports = {

    admin:(req,res)=>{
        res.render("admin",{
            session: req.session
        });
    },

    panelProductos:(req, res) => {

        res.render('panelProductos',{
            session: req.session,
            getproductos
            /*db.Product.findAll()
            .then(function(products){
                return res.render("panelProductos",{products:products})
            })*/
        })
    },

    formAgregar: (req, res) => {
            res.render('agregar',{
                session: req.session
            })
    },

    agregar:(req,res)=>{
       

       let lastId = 1;

        getproductos.forEach(element=> {
            if(element.id > lastId){
                lastId = element.id
            }
        })

        let{marca, descripcion, categoria, subcategoria,color,talle,precio} = req.body;

        let newProducto = {
            id: lastId +1,
            marca: marca.trim(),
            descripcion: descripcion.trim(),
            categoria: categoria.trim(),
            subcategoria: subcategoria.trim(),
            color: color.trim(),
            talle: talle.trim(),
            precio: precio.trim(),
            imagen: req.file ? req.file.filename : "sinFoto-image.png" //Si existe req.file (si subieron un archivo), guarda el nombre de ese archivo en el JSON, y si no guarda el "default-image.png".

        }

        getproductos.push(newProducto);

        writeJSON(getproductos);

        res.redirect('panelProductos')

    },

    formEditar:(req,res)=>{
        let product = getproductos.find(element => {
            return element.id === +req.params.id
        })
        res.render('editar',{
            session: req.session,
            product
        })
    },

    editar:(req,res)=>{
            let{marca, descripcion, categoria, subcategoria,color,talle,precio} = req.body;

        getproductos.forEach(product => {
            if(product.id === +req.params.id){
                product.id = product.id,
                product.marca = marca,
                product.descripcion = descripcion,
                product.categoria = categoria,
                product.subcategoria = subcategoria,
                product.color = color,
                product.talle =talle,
                product.precio = precio
            }
        })
        writeJSON(getproductos)
        res.redirect('/admin/panelProductos')
     },


   eliminar:(req,res)=>{
        getproductos.forEach(product =>{
            if (product.id === +req.params.id){
                let deleteProduct = getproductos.indexOf(product);
                getproductos.splice(deleteProduct,1);
            }
        })
        writeJSON(getproductos)
        res.redirect('/admin/panelProductos');
    }
  
}