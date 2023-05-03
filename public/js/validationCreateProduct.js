window.addEventListener('load', function(){
    let form = document.querySelector('.create-product')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let errors = [];

        let image = document.querySelector('.imagen')
        if(image.value == ''){//preguntar si esto esta bien (aylu me mando link de stack overflow con la rta)
            errors.push('El producto debe tener una imagen.')
        }

        let nameProduct = document.getElementById('name')
        if(nameProduct.value == ''){
            errors.push('El producto debe tener un nombre.')
        }

        let description = document.getElementById('text')
        if(description.value == '' ){
            errors.push('El producto debe tener una descripción.')
        }

        /*let category = document.getElementById('category')
        if(category.value == ''){
            errors.push('El producto debe tener una categoría.')
        }*/

        let price = document.getElementById('price')
        if(price.value <= 0){
            errors.push('Debes asignarle un precio al producto.')
        }

        /*let courseDays = document.getElementById('course-days')
        if(courseDays.value == ''){
            errors.push('Debes elegir dias en Cronograma.')
        }


        let dateStart = document.getElementById('dateStart')
        if(dateStart.value == ''){
            errors.push('Debes elegir una fecha de inicio.')
        }

        let dateEnd = document.getElementById('dateEnd')
        if(dateEnd.value == 0){
            errors.push('Debes elegir una fecha de finalización.')
        }

        let shift = document.getElementById('shift')//este esta mal tengo que corregirlo
        if(shift && shift.value ==""){
            errors.push('Debes elegir un turno.')
        }*/ 
        
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