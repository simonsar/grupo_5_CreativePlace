window.addEventListener('load', function(){
    let form = document.querySelector('.form-login')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let errors = [];

        let email = document.querySelector('.email')
        if(email.value == ''){
            errors.push('El mail debe ser válido.')
        }

        let password = document.querySelector('.password')
        if(password.value.length < 8){
            errors.push('La contraseña debe ser válida.')
        }

        if(errors.length > 0){
            let ulErrors = document.querySelector('.errors')
            ulErrors.innerHTML = ""
            e.preventDefault();
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>'
                
            }
        }else{
            form.submit()
        }
    })
})