let deleteProduct = document.getElementsByClassName('btn-delete-cart')
console.log(deleteProduct)


document.addEventListener('DOMContentLoaded', function(){

        for( var i = 0; i < deleteProduct.length; i++){
            var button = deleteProduct[i]
            console.log(deleteProduct[i])
            button.addEventListener('click', function(event){
                var buttonClick = event.target
                buttonClick.parentElement.parentElement.remove()

            })
        }


        


})
