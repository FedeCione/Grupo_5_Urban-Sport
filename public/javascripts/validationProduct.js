function qs(element) {
    return document.querySelector(element)
}
window.addEventListener('load', function () {

    let $inputName = qs('#productName'),
        $nameErrors = qs('#errorName'),
        $inputBrand = qs('#product-brand'),
        $brandErrors = qs('#errorBrand'),
        $inputDescription = qs('#product-description'),
        $descriptionErrors = qs('#errorDescription'),
        $inputCategory = qs('#category-product'),
        $categoryErrors = qs('#errorCategory'),
        $inputColour = qs('#colour-product'),
        $colourErrors = qs('#errorColour'),
        $inputTalle = qs('#talle-product'),
        $talleErrors = qs('#errorTalle'),
        $inputPrice = qs('#price-product'),
        $priceErrors = qs('#errorPrice'),
        regExDiscount = /^([0-9]|[1-9][0-9]|100)$/
        $inputDiscount = qs('#product-discount'),
        $discountErrors = qs('#errorDiscount'),
        $inputImage = qs('#images-files'),
        $imageErrors = qs('#errorImage'),
        $inputStock = qs('#stock'),
        $stockErrors = qs('#errorStock');


    $inputName.addEventListener('blur', function () {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "El nombre del producto es obligatorio"
                break;
            case $inputName.value.trim().length < 3:
                $nameErrors.innerHTML = "El nombre del producto debe tener mas de 3 caracteres"
                break;
            default:
                $nameErrors.innerHTML = ""
                break;
        }
    })

    $inputBrand.addEventListener('blur', function () {
        switch (true) {
            case !$inputBrand.value:
                $brandErrors.innerHTML = "Debes seleccionar una marca"
                break;
            default:
                $brandErrors.innerHTML = ""
                break;
        }
    })

    $inputDescription.addEventListener('blur', function () {
        switch (true) {
            case !$inputDescription.value.trim():
                $descriptionErrors.innerHTML = "Debes poner una descripcion del producto"
                break;
            case $inputDescription.value.trim().length < 20:
                $descriptionErrors.innerHTML = "La descripcion debe ser de minimo 20 caracteres"
                break;
            default:
                $descriptionErrors.innerHTML = ""
                break;
        }
    })

    $inputCategory.addEventListener('blur', function () {
        switch (true) {
            case !$inputCategory.value:
                $categoryErrors.innerHTML = "Debes seleccionar una categoria"
                break;
            default:
                $categoryErrors.innerHTML = ""
                break;
        }
    })

    $inputColour.addEventListener('blur', function () {
        switch (true) {
            case !$inputColour.value:
                $colourErrors.innerHTML = "Debes seleccionar un color"
                break;
            default:
                $colourErrors.innerHTML = ""
                break;
        } 
    })

    $inputTalle.addEventListener('blur', function () {
        switch (true) {
            case !$inputTalle.value:
                $talleErrors.innerHTML = "Debes seleccionar un talle"
                break;
            default:
                $talleErrors.innerHTML = ""
                break;
        }
    })

    $inputPrice.addEventListener('blur', function () {
        switch (true) {
            case !$inputPrice.value.trim():
                $priceErrors.innerHTML = "Debes ingresar el precio del producto"
                break;
            default:
                $priceErrors.innerHTML = ""
                break;
        }
    })

    $inputDiscount.addEventListener('blur', function () {
        switch (true) {
            case !$inputDiscount.value.trim():
                $discountErrors.innerHTML = "Debes ingresar el descuento del producto(0%-100%)"
                break;
            case !regExDiscount.test($inputDiscount.value):
                $discountErrors.innerHTML = "Debes ingresar un valor entre 0% y 100%"
                break;
            default:
                $discountErrors.innerHTML = ""
                break;
        }
    })

    $inputImage.addEventListener('change', function () {
        let filePath = $inputImage.value,
        allowedExtensions = /(.jpg|.jpeg|.png|.web)$/i
        if(!allowedExtensions.exec(filePath)){
            $imageErrors.innerHTML = "Solo puedes cargar archivos con extencion tipo .jpg|.jpeg|.png|.web"
            $inputImage.value = '';
            return false;
        }
    })

    $inputStock.addEventListener('blur', function () {
        switch (true) {
            case !$inputStock.value.trim():
                $stockErrors.innerHTML = "Debes ingresar el stock del producto"
                break;
            default:
                $stockErrors.innerHTML = ""
                break;
        }
        if(isNaN($inputStock.value)) {
            $stockErrors.innerHTML = "Debes ingresar un valor numerico"
        }
    })

})