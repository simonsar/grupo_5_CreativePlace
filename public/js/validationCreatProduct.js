window.addEventListener('load', function(){
    let form = document.querySelector('.create-product')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let errors = [];

        let image = document.querySelector('.imagen')
        if(image.value == ''){//preguntar si esto esta bien
            errors.push('El producto debe tener una imagen.')
        }

        let nameProduct = document.getElementById('name')
        if(nameProduct.value == ''){
            errors.push('El producto debe tener un nombre.')
        }

        let description = document.getElementById('description')
        if(description.value == ''){
            errors.push('El producto debe tener una descripción.')
        }

        let category = document.getElementById('category')
        if(category.value == ''){
            errors.push('El producto debe tener una categoría.')
        }

        let price = document.getElementById('price')
        if(price.value > 0){
            errors.push('Debes asignarle un precio al producto.')
        }

        let courseDays = document.getElementById('courseDays')
        if(courseDays.value == ''){
            errors.push('Debe elegir dias en Cronograma.')
        }

        let schedules = document.getElementById('schedules')
        if(schedules.value == ''){
            errors.push('Debes elegir los horarios de clase.')
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