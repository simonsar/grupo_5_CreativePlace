if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    if (JSON.parse(localStorage.getItem('productInCart')) == null) {
        const cart = [];
        localStorage.setItem('productInCart', JSON.stringify(cart))
    }
    let addCart = document.getElementById('addCart')
    addCart.addEventListener('click', addProduct)
}

function addProduct(){
    let product = {
        id: document.getElementById('idProduct').innerText,
        img: document.getElementById('img').alt, //Tenemos una sola imagen, tenemos que subir mas y agregarlas con ejs al alt en la vista
        name: document.getElementById('name').innerText,
        description: document.getElementById('description').innerText,
        price: document.getElementById('price').innerText.replace('$', ''), //PREGUNTA 1: name, descrption y price estan en el mismo div, debería traerlos todos juntos?
        
    }

    let cart = JSON.parse(localStorage.getItem('productInCart'))
    if (cart.length == 0) {
        product.amount = 1  
        product.subtotal = product.price
        cart.push(product)
    }else{
        let ifExist = cart.find(row => row.id == product.id)
        if (ifExist) {
            ifExist.amount += 1
            ifExist.subtotal += ifExist.price
        }else{
            product.amount = 1  
            product.subtotal = product.price
            cart = [...cart, product]
        }
    }
    localStorage.setItem('productInCart', JSON.stringify(cart))
}