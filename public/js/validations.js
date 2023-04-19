windows.addEventListener('load', function(){
    let form = document.querySelector('.form-register')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let errors = [];

        let firstName = document.getElementById('firstName')
        if(firstName.value == ''){
            errors.push('Este campo debe ser completado obligatoriamente.')
        }

        let lastName = document.getElementById('lastName')
        if(lastName.value == ''){
            errors.push('Este campo debe ser completado obligatoriamente.')
        }

        let country = document.getElementById('country')
        if(country.value == ''){//como hago aca?
            errors.push('Debes elegir tu país de residencia.')
        }

        let email = document.getElementById('email')
        if(email.value == ''){
            errors.push('El mail elegido debe ser válido.')
        }

        let password = document.getElementById('password')
        if(password.value.length < 8){
            errors.push('La contraseña debe tener un minimo de 8 caracteres.')
        }

        if(errors.length > 0){
            e.preventDefault();
            let ulErrors = document.querySelector('.errors')
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>'
                
            }
        }
    })
})