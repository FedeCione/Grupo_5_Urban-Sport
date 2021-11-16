
const cards = document.getElementById('cards')

const templateCard = document.getElementById('template-card').content

const fragment = document.createDocumentFragment()
let cart = {}


let db = async () => {
        try {
            let res = await fetch(' http://localhost:3020/api/products')
            let data = await res.json()
          console.log(data) 
            createTemplateCard(data)
        } catch (error) {
            console.log(error)
        }
   }

document.addEventListener('DOMContentLoaded', function(){
    

db(); 


})
    
const createTemplateCard = data => {
    data.data.forEach(element => {
        
       templateCard.querySelector('h3').textContent = element.name
       templateCard.querySelector('p').textContent = `${element.description.slice(0,16)}...` 
       templateCard.querySelector('h6').textContent = `${element.price} `
       templateCard.querySelector('.btn').dataset.id = element.id

       let nameImages = element.images.map(imagen =>{ 
        return imagen.name})
        console.log(nameImages)

       templateCard.querySelector('img').setAttribute('src',`images/admin/productos/${nameImages}` )

       const clone = templateCard.cloneNode(true)
       fragment.appendChild(clone)
    });
    cards.appendChild(fragment)
}



cards.addEventListener('click', e => {
    addCart(e)
    cartNumbers(cart)
    totalCost(cart)
    swal("Se agrego al carrito");
    e.preventDefault()

})

const addCart = e => {
   /*console.log(e.target) 
   console.log(e.target.classList.contains('btn'))
 PREGUTAMOS SI CONTIENE LA CLSE, devolviendo true o false 
    */
    if(e.target.classList.contains('btn')){
        console.log(e.target.parentElement)
        setCart(e.target.parentElement) //enviamos toda la info del producto 
    }
    /* Detiene cualquier otro evento que se genera en el item */
    e.stopPropagation()
}

const setCart = obj => {
    const product = {
        id : obj.querySelector('.btn').dataset.id, //para acceder al id del product
        image: obj.querySelector('img').src,
        name : obj.querySelector('h3').textContent,
        price : obj.querySelector('h6').textContent,
        quantity : 0 
        
    }
    if(cart.hasOwnProperty(product.id)){
        product.quantity = cart[product.id].quantity + 1
    }
    cart[product.id] = {...product}
   /*  showCart() */
    
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers){
        document.querySelector('.add-cart-icon').textContent = productNumbers
    }
}

function cartNumbers(cart){
    
        console.log(Object.values(cart))
    let productNumber = localStorage.getItem('cartNumbers')
    console.log(typeof productNumber)
    productNumber = parseInt(productNumber)

    if(productNumber){
        localStorage.setItem('cartNumbers', productNumber + 1)
        document.querySelector('.add-cart-icon').textContent = productNumber + 1
    } else {
        localStorage.setItem('cartNumbers',  1)
        document.querySelector('.add-cart-icon').textContent = 1
    }

    setItems(Object.values(cart))
}

function setItems(cart) {
    console.log(cart)
    
        //console.log(cartItems)trae los obj guardado en json
    
        cart.forEach(product => {
            console.log(product)
            let cartItems = localStorage.getItem('productsInCart')
            cartItems = JSON.parse(cartItems)
            if(cartItems != null){

                if(cartItems[product.name] == undefined){
                    cartItems = {
                        ...cartItems,
                        [product.name]: product
                    }
                    
                }
                cartItems[product.name].quantity += 1
            }else{
                product.quantity = 1
                cartItems = {
                    [product.name]: product
                }
                
            }
            
            localStorage.setItem("productsInCart", JSON.stringify(cartItems))

        })
        
     
}

function totalCost(cart) {
    let product = Object.values(cart)
    console.log(product)
    product.forEach( element => {
        console.log(element)
        let cartCost = localStorage.getItem('totalCost')
        

        if(cartCost != null){
            cartCost = parseInt(cartCost)
            let productPrice = parseInt(element.price)
            localStorage.setItem('totalCost', cartCost + productPrice)
        }else{
            localStorage.setItem("totalCost", element.price)
        }
        
    })
    
}




onLoadCartNumbers()
