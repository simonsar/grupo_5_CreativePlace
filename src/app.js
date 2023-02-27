const express = require("express");
const app = express();
const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');

const path = require('path')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use("/", mainRouter);

app.use("/detalle", mainRouter);

app.use('/carrito', mainRouter);

app.use('/editar', mainRouter);

app.use('/products', mainRouter);

app.use('/products/create', mainRouter);

// Sprint 5

app.use('/', loginRouter);

app.use('/', loginRouter);




app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});

app.use((req, res, next) => {       //Este es el middleware que redirecciona a la vista de 404Nfound (funciona!)
    res.status(404).render('404notFound');
    next();
})