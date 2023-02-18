const path = require('path');
const fs = require('fs');

const productosJSON = path.join(__dirname, '../database/products.json')
let productos = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const controller = {
    index: (req, res) => {
        return res.render('home', {productos: productos})
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
            id: 7,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            modulos: req.body.modulos,
            cronograma:{
                dias: req.body.dias,
                horarios: req.body.horarios,
            },
            fechaInicio: req.body.fechaInicio,
            fechaFinalizacion: req.body.fechaFinalizacion,
            imagen: req.body.imagen,
        };
        productos.push(product);

        fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2));

        res.redirect('/products');

        //GUARDAR
        
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