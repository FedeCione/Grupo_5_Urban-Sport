let { getproductos, writeJSON} = require('../data/dataBase');

module.exports = {

    admin:(req,res)=>{
        res.render("admin");
    },

    panelProductos:(req, res) => {

        res.render('panelProductos',{
            getproductos
        })
    },

    formAgregar: (req, res) => {
            res.render('agregar')
    },

    agregar:(req,res)=>{

        let lastId = 1;

        getproductos.forEach(element=> {
            if(element.id > lastId){
                lastId = element.id
            }
        })

        let{marca, descripcion, categoria, subcategoria,color,talle,precio} = req.body

        let newProducto = {
            id: lastId +1,
            marca: marca.trim(),
            descripcion: descripcion.trim(),
            categoria: categoria.trim(),
            subcategoria: subcategoria.trim(),
            color: color.trim(),
            talle: talle.trim(),
            precio: precio.trim()
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
            product
        })
    },

    editar:(req,res)=>{
            let{marca, descripcion, categoria, subcategoria,color,talle,precio} = req.body;

        getproductos.forEach(element => {
            if(element.id === +req.params.id){
                element.id = element.id,
                element.marca = marca,
                element.descripcion = descripcion,
                element.categoria = categoria,
                element.subcategoria = subcategoria,
                element.color = color,
                element.talle =talle,
                element.precio = precio
            }
        }) git
        writeJSON(getproductos)
        res.render('panelProductos')
     },

    //  NOSE PORQUE  no edita

   eliminar:(req,res)=>{
        getproductos.forEach(element =>{
            if (element.id === +req.params.id){
                let deleteProduct = getproductos.indexOf(element);
                getproductos.splice(deleteProduct,1)
            }
        })
        writeJSON(getproductos)
        res.render('panelProductos')
    }
  
// NOSE PORQUE no elimina y NO ME ENVIA AL PANEL DE PRODUCTOS 
}