if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    let addCart = document.getElementById('addCart')
    addCart.addEventListener('click', addProduct)
}

function addProduct(){
    let product = {
        img: document.getElementById('img').alt, //Tenemos una sola imagen, tenemos que subir mas y agregarlas con ejs al alt en la vista
        name: document.getElementById('name').innerText,
        description: document.getElementById('description').innerText,
        price: document.getElementById('price').innerText.replace('$', ''), //name, descrption y price estan en el mismo div, debería traerlos todos juntos?
        moduls: ,
        duration:, //No se si me combiene traer moduls, duration,date,shift porque en realidad es como una vista previa en el carrito, nada mas, no creo que requiera tanto detalle.
        date: ,
        shift: 

    }
}