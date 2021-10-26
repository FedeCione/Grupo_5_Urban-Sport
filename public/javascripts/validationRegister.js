function qs(element){
    return document.querySelector(element)
}
window.addEventListener('load', function(){

    let $inputName = qs('#nombre'),
    $nameErrors = qs('#errorName'),
    $inputLastName = qs('#apellido'),
    $lastNameError = qs('#errorLastName'),
    $inputEmail = qs('#correo'),
    $emailError = qs('#errorEmail'),
    $inputPassword = qs('#password'),
    $passwordError = qs('#errorPassword'),
    $inputRepeatPassword = qs('#password_repeat'),
    $passwordRepeatError = qs('#errorPasswordRepeat'),
    $inputAvatar = qs('#avatar'),
    $avatarError = qs('#errorAvatar'),
    $inputTerms = qs('#terms'),
    $termsError = qs('#errorTerms'),
    $inputForm = qs('#form'),
    $submitError = qs('#submitError'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExNumber = /^[0-9]$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,12}$/;

    $inputName.addEventListener('blur', function(){
        console.log($inputName.value)
        let icon = document.querySelector('.far')
        switch(true){
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "El campo nombre es obligatorio"
                
                icon.classList.add('fa-times-circle')
                icon.style.color ="tomato"
                break;
            case $inputName.value.trim().length < 3:
                $nameErrors.innerHTML = "El campo nombre debe tener mas de 3 caracteres"
                icon.classList.add('fa-times-circle')
                icon.style.color ="tomato"
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Ingresa un nombre valido"
                break;
            default:
               icon.classList.remove('fa-times-circle')
                $nameErrors.innerHTML = ""
                icon.classList.add('fa-check-circle')
                icon.style.color =""
               
                break;
        }
    })

    $inputLastName.addEventListener('blur', function(){
        console.log($inputLastName.value)
        let iconLN = document.querySelector('.lsNa')
        switch(true){
            case !$inputLastName.value.trim():
                $lastNameError.innerHTML = "El campo apellido es obligatorio"
                
                iconLN.classList.add('fa-times-circle')
                iconLN.style.color ="tomato"
                break;
            case $inputLastName.value.trim().length < 3:
                $lastNameError.innerHTML = "El campo apellido debe tener mas de 3 caracteres"
                iconLN.classList.add('fa-times-circle')
                iconLN.style.color ="tomato"
                break;
            case !regExAlpha.test($inputLastName.value.trim()):
                $lastNameError.innerHTML = "Ingresa un apellido valido"
                iconLN.classList.add('fa-times-circle')
                iconLN.style.color ="tomato"
                break;
            default:
               iconLN.classList.remove('fa-times-circle')
                $lastNameError.innerHTML = ""
                iconLN.classList.add('fa-check-circle')
                iconLN.style.color =""
               
                break;
        }
    })

    $inputEmail.addEventListener('blur', function(){
        
        let iconEmail = document.querySelector('.isEmail')
        switch(true){
            case !$inputEmail.value.trim():
                $emailError.innerHTML = "El campo email es obligatorio" 
                iconEmail.classList.add('fa-times-circle')
                iconEmail.style.color ="tomato"
                break;
            case !regExEmail.test($inputEmail.value):
                $emailError.innerHTML = "Ingresa un email valido"
                iconEmail.classList.add('fa-times-circle')
                iconEmail.style.color ="tomato"
                break;
            default:
                iconEmail.classList.remove('fa-times-circle')
                $emailError.innerHTML = ""
                iconEmail.classList.add('fa-check-circle')
                iconEmail.style.color =""
               
                break;
        }
    })
    
    $inputPassword.addEventListener('blur', function(){
        console.log($inputPassword.value)
        let iconPass = document.querySelector('.isPass')
        switch(true){
            case !$inputPassword.value.trim():
                $passwordError.innerHTML = "Debes ingresar una contraseña " 
                /* iconPass.classList.add('fa-times-circle')*/ 
                iconPass.style.color ="tomato"
                break;
            case !regExPass.test($inputPassword.value.trim()):
                $passwordError.innerHTML = "La contraseña debe contener entre 6 y 12 caracteres, al menos una mayúscula, un número y un caracter especial ($%&/!)"
              /*   iconPass.classList.add('fa-times-circle')*/ 
                iconPass.style.color ="tomato"
                break;
            default:
                
                $passwordError.innerHTML = ""
                iconPass.style.color =""
               
                break;
        }
    })
    
    $inputRepeatPassword.addEventListener('blur', function(){
        console.log($inputRepeatPassword.value)
        let iconPass2 = document.querySelector('.isPass2')
        switch(true){
            case !$inputRepeatPassword.value.trim():
                $passwordRepeatError.innerHTML = "Repite tu contraseña " 
                iconPass2.classList.add('fa-times-circle')
                iconPass2.style.color ="tomato"
                break;
            case $inputRepeatPassword.value !== $inputPassword.value:
                $passwordRepeatError.innerHTML = "Las contraseñas no coinciden"
                iconPass2.classList.add('fa-times-circle')
                iconPass2.style.color ="tomato"
                break;
            default:
                iconPass2.classList.remove('fa-times-circle')
                $passwordRepeatError.innerHTML = ""
                iconPass2.style.color =""
                iconPass2.classList.add('fa-check-circle')
               
                break;
        }
    })

    $inputTerms.addEventListener('click', function(){
        $inputTerms.value = "on"
        $inputTerms.classList.toggle('far')
        $inputTerms.classList.remove('fa-times-circle')
        $termsError.innerHTML = ""
    })

    $inputForm.addEventListener('submit',function(e){
        let error = false;
        e.preventDefault()
        console.log($inputForm.elements)
        let elementsForm = this.elements

        for(let i = 0; i < elementsForm.length-1; i++){
            if(elementsForm[i].value == ""){
                elementsForm[i].classList.add('fa-times-circle');
                $submitError.style.color = "tomato"
                $submitError.innerHTML = "Los campos señalados son obligatorios"
                error = true;
            }}
            
            if(!$inputTerms.checked){

                $termsError.style.color = "tomato"
                $termsError.innerHTML = "Debes aceptar las bases y condiciones"
                error = true
            }

            if(!error){
                console.log('todo ok!')
                $inputForm.submit()
            }
    })

    $inputAvatar.addEventListener('change', function fileVAlidation(){
        let filePath = $inputAvatar.value, //capturamos el valor del input
        allowefExtensions = /(.jpg|.jpeg|.png| .gif| .web)$/i //extensiones
        if(!allowefExtensions.exec(filePath)){//El metodo exec ejecuta una 
            $avatarError.innerHTML = "Carga un archivo de imagen valido. con la"
            $inputAvatar.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            //imagen preview
            console.log($inputAvatar.files);
            if($inputAvatar.files && $inputAvatar.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = ' <img src="' + e.target.result +'"/>'
                };
                reader.readAsDataURL($inputAvatar.file[0]);
                $avatarError.innerHTML = '';
                $inputAvatar.classList.remove('is-invalid')
            }
        }
    })
})