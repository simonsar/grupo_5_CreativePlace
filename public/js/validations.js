windows.addEventListener('load', function(){
    let form = document.querySelector('.form-register')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let firstName = document.getElementById('firstName')
        if(firstName.value == ''){
            send.message('asasas')
        }
    })
})