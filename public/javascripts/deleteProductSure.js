let deleteProduct = document.getElementsByClassName('btn-delete-cart')
console.log(deleteProduct)


document.addEventListener('DOMContentLoaded', function(){

        for( var i = 0; i < deleteProduct.length; i++){
            var button = deleteProduct[i]
            console.log(deleteProduct[i])
            button.addEventListener('click', function(event){
                var buttonClick = event.target
                swal({
                    title: "Estas Seguro?",
                    text: "Una vez borrado no hay vuelta atras!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      buttonClick.parentElement.parentElement.remove()
                     updateCartTotal()  
                      swal("El product ha sido borrado con exito!", {
                        icon: "success",
                      });
                    } else {
                      swal("El producto continua en el carrito!");
                    }
                  });
                
            })
        }

})

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('productItem')[0]
    var cartRows = cartItemContainer.getElementsByClassName('price')
    var total = 0
    for( var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i].innerHTML
        var productQuantity = document.getElementsByClassName('quantity')[0].innerHTML

        var price = parseInt(cartRow)
        var quantity = parseInt(productQuantity)
        total = total + (price * quantity)
        console.log(typeof price)
    }
    
}