const path = require('path');
const fs = require('fs');

const jsonProductos = path.join(__dirname, '../database/products.json')
let productos = JSON.parse(fs.readFileSync(jsonProductos));

const controller = {
    index: (req, res) => {
        return res.render('home', {productos: productos})
    },
    register: (req, res) => {
        return res.render('register')
    },
    login: (req, res) => {
        return res.render('login')
    },
    detalle: (req, res) => {
        let producto = productos.find((curso) => req.params.id == curso.id );
        console.log(producto);
        return res.render('detalle-de-producto', {producto: producto});
    },
    carrito: (req, res) => {
        return res.render('carrito-de-compras')
    },
    edit: (req, res) => {
        return res.render('load-edit-product')
    }    
}

module.exports = controller;