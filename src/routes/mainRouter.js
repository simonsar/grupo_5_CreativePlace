const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require('../controllers/mainController');
const sessionUsuario = require('../middlewares/sessionUsuario');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../../public/img/img-courses'))

    },

    filename: (req, file, cb) => {
        const newFileName = 'course-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName )
    }
})

const upload = multer({ storage })


router.get('/', mainController.index);

router.get('/detalle/:id', mainController.detalle);

//router.get('/carrito', mainController.carrito);

router.get('/productos/editar/:id', sessionUsuario, mainController.edit); //Edicion de productos

router.put('/productos/editar/:id', mainController.editProcess);

//Sprint 4

router.get('/products', mainController.products); //Listado productos

router.get('/search', mainController.search);

router.get('/products/create', sessionUsuario,mainController.create); //Form creacion productos

router.post('/products/create', upload.single('createImage'),mainController.createProcess); //Accion de creacion (donde se envia form)

router.delete('/delete/:id', sessionUsuario, mainController.deleteProcess);

router.get('/developing',mainController.developing )

//DEBERIAMOS EDITAR QUE EN LINEA 25 Y 27 USAMOS "PRODUCTS" Y EN LA 15 Y 17 "PRODUCTOS"

module.exports = router;