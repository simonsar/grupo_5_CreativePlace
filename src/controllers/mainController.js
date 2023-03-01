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
    editProcess: (req, res) => {
        let idProducto = req.params.id
        function producto(producto) {
            return producto == idProducto
        }

        let productoEditar = productos.find(producto)
        res.render('edit-product')
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

        let productResult = [];

        for(let i = 0; i < productos.length; i++) {
            if (productos[i].nombre.toUpperCase().includes(busqueda.toUpperCase())) {
                productResult.push(productos[i]); 
            }
        }
        
        res.render('productResult', {productResult, productResult});
    }

};

module.exports = controller;