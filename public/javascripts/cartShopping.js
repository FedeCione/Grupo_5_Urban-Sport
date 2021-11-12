/* const items = document.getElementById('items')
const total = document.getElementById('total')
const templateCart = document.getElementById('template-cart').content
const templateTotalCart = document.getElementById('total-cart').content
const fragmentCart = document.createDocumentFragment()
 */


document.addEventListener('DOMContentLoaded', function(){
    function displayCart(){
        let cartItems = localStorage.getItem('productsInCart')
        let cartCost = localStorage.getItem('totalCost')
        cartItems = JSON.parse(cartItems)
        console.log(typeof cartItems)
        let productContainer = document.querySelector('.container-cart')
        let totalPrice = document.querySelector('.final-price')

        console.log(productContainer)

        if(cartItems && productContainer){
            
            Object.values(cartItems).map(item => {
                console.log(item)
                productContainer.innerHTML += `
                <div class="product"><i class="fas fa-times-circle"></i>
                
                <img src="${item.image}">
                <span>${item.name}</span> 
                
                <div class="quantity">${item.quantity}</div>              
                <div class="price">${parseInt(item.price) * parseInt(item.quantity)},00</div>
                
                </div>
                
                `
                totalPrice.innerHTML = '$' + cartCost+ ",00"            })
        }
    }

displayCart();  
     
    
})

