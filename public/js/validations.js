windows.addEventListener('load', function(){
    let form = document.querySelector('.form-register')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let errores = [];

        let firstName = document.getElementById('firstName')
        if(firstName.value == ''){
            
        }

        let lastName = document.getElementById('lastName')
        if(lastName.value == ''){
            
        }

        let country = document.getElementById('country')
        if(country.value == ''){//como hago aca?
            
        }

        let email = document.getElementById('email')
        if(email.value == ''){
            
        }

        let password = document.getElementById('password')
        if(password.value == ''){
            
        }
    })
})