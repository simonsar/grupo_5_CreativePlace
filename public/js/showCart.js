if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    if(JSON.parse(localStorage.getItem('productInCart')) == null || JSON.parse(localStorage.getItem('productInCart')).length == 0 ) {
        emptyCart()
    }else{
        displayCart()
    }
}

function emptyCart(){

}

function displayCart(){
    
}