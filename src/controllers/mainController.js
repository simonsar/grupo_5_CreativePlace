const path = require('path');
const fs = require('fs');

const productosJSON = path.join(__dirname, '../database/products.json')
let productos = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

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
        return res.render('edit-product.ejs')
    },
    create: function(req, res) {
        res.render('create-product.ejs')
    },
    
    products: (req, res) => {

        res.render('productList', {productos: productos});
    },
    createProcess: (req, res) => {
        let product = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            precio: req.body.precio,
            descripcionmodulo: req.body.modulo,
            duracion: req.body.duracion,
            horasporsemana: req.body.dedicacion,
            fecha: req.body.fecha,
            turno: req.body.turno
        }

        //GUARDAR
        let archivoProducto = fs.readFileSync('producto.json', {encoding: 'utf-8'});
        let productosCreate;
        if (archivoProducto == "") {
            productosCreate = [];
        } else {
            productosCreate = JSON.parse(archivoProducto);
        };
        
        productosCreate.push(product);

        productosJSON = JSON.stringify(productosCreate);
        fs.writeFileSync('producto.json', productosJSON);

        res.redirect('/products')

    },
    search: (req, res) => {
        let busqueda = req.query.search;

        let archivoJSON = fs.readFileSync('producto.json', {encoding: 'utf-8'});
        let products = JSON.parse(archivoJSON);

        let productResult = [];

        for(let i = 0; i < products.length; i++) {
            if (products[i].name.includes(busqueda)) {
                productResult.push(products[i]);
            }
        }
        
        res.render('productResult', {productResult, productResult});
    }
};

module.exports = controller;