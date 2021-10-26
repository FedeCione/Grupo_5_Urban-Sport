window.addEventListener('load',function(){
        let $inputEmail = document.querySelector('#correo');
        let $inputPass = document.querySelector('#password');
        let $errorEmail = document.querySelector('#errorEmail');
        let $errorPass = document.querySelector('#errorPass');
        let $form = document.querySelector('#form');
        let $errorForm = document.querySelector('#errorForm');
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        
        $inputEmail.addEventListener('blur', function(){
        
            let iconEmail = document.querySelector('.isEmail')
            switch(true){
                case !$inputEmail.value.trim():
                    $errorEmail.innerHTML = "El campo email es obligatorio" 
                    iconEmail.classList.add('fa-times-circle')
                    iconEmail.style.color ="tomato"
                    break;
                case !regExEmail.test($inputEmail.value):
                    $errorEmail.innerHTML = "Ingresa un email valido"
                    iconEmail.classList.add('fa-times-circle')
                    iconEmail.style.color ="tomato"
                    break;
                default:
                    iconEmail.classList.remove('fa-times-circle')
                    $errorEmail.innerHTML = ""
                    iconEmail.classList.add('fa-check-circle')
                    iconEmail.style.color =""
                   
                    break;
            }
        })
        $inputPass.addEventListener('blur', function(){
            console.log($inputPass.value)
            let iconPass = document.querySelector('.isPass')
            switch(true){
                case !$inputPass.value.trim():
                    $errorPass.innerHTML = "Debes ingresar una contraseña " 
                    /* iconPass.classList.add('fa-times-circle')*/ 
                    iconPass.style.color ="tomato"
                    break;
                case !regExPass.test($inputPass.value.trim()):
                    $errorPass.innerHTML = "La contraseña debe contener entre 6 y 12 caracteres, al menos una mayúscula, un número y un caracter especial ($%&/!)"
                  /*   iconPass.classList.add('fa-times-circle')*/ 
                    iconPass.style.color ="tomato"
                    break;
                default:
                    
                    $passwordError.innerHTML = ""
                    iconPass.style.color =""
                   
                    break;
            }
        })

        $form.addEventListener('submit',function(e){
            let error = false;
            e.preventDefault()
            console.log($form.elements)
            let elementsForm = this.elements
    
            for(let i = 0; i < elementsForm.length-1; i++){
                if(elementsForm[i].value == ""){
                    elementsForm[i].classList.add('fa-times-circle');
                    $errorForm.style.color = "tomato"
                    $errorForm.innerHTML = "Los campos señalados son obligatorios"
                    error = true;
                }}
    
                if(!error){
                    console.log('todo ok!')
                    $form.submit()
                }
        })
})