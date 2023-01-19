const controller = {
    index: (req, res) => {
        return res.render('home')
    },
    register: (req, res) => {
        return res.render('login')
    },
    login: (req, res) => {
        return res.render('register')
    },
    detalle: (req, res) => {
        return res.render('detalle-de-producto')
    },
    carrito: (req, res) => {
        return res.render('carrito-de-compras')
    },
    edit: (req, res) => {
        return res.render('load-edit-product')
    }    
}

module.exports = controller;