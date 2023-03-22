const path = require('path');
const fs = require('fs');
const db = require('../database/models');


const productosJSON = path.join(__dirname, '../database/products.json')
let productos = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const controller = {
    index: (req, res) => {
        db.Course.findAll()
            .then((cursos)=> {
                res.render('home', {productos: cursos});
            })
        //return res.render('home', {productos: productos})
    },                                                                              
    detalle: (req, res) => {
        db.Course.findByPk(req.params.id)
            .then((curso)=> {
                res.render('detalle-de-producto', {producto: curso});
            })
        /*let producto = productos.find((curso) => req.params.id == curso.id );
        return res.render('detalle-de-producto', {producto: producto});*/
    },
    carrito: (req, res) => {
        return res.render('carrito-de-compras')
    },
    edit: (req, res) => {
        db.Course.findByPk(req.params.id)
            .then((curso)=> {
                res.render('edit-product.ejs', {producto: curso});
            })
        /*let producto = productos.find((curso) => req.params.id == curso.id );
        return res.render('edit-product.ejs', {producto: producto});*/
    }, 
    editProcess: (req, res) => {
        let product = {
            name: req.body.nombre,
            price: req.body.precio,
            description: req.body.descripcion,
        };
        db.Course.update(
            product,
        {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/detalle/' + req.params.id);

        /*productos.forEach(producto => {
            if(producto.id == req.params.id){  
                producto.precio = req.body.precio
                producto.nombre = req.body.nombre,
                producto.precio = req.body.precio,
                producto.descripcion = req.body.descripcion,
                producto.modulos = req.body.modulos,
                producto.cronograma = {
                    dias: req.body.dias,
                    horarios: req.body.horarios,
                },
                producto.fechaInicio = req.body.fechaInicio,
                producto.fechaFinalizacion = req.body.fechaFinalizacion,
                producto.imagen = req.body.imagen    
        
        }});

        fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2));*/
        
    },
    create: function(req, res) {
        res.render('create-product.ejs')
    },
    products: (req, res) => {
        db.Course.findAll()
            .then((cursos)=> {
                res.render('productList', {productos: cursos});
            })
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

        db.Course.create({
            name: product.nombre,
            price: product.precio,
            description: product.descripcion
        })

         
        /*
        productos.push(product);

        fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2));*/

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
    },
    deleteProcess: (req, res) => {
        db.Course.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products')
    }

};

module.exports = controller;