const express = require("express");
const app = express();
const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');
const session = require('express-session');
const cookie = require('cookie-parser')
const path = require('path')

const usuarioMiddle = require('./middlewares/usuario')

const methodOverride = require('method-override');
const userApiRouter = require("./routes/userApiRouter");
const productsApiRouter = require("./routes/productsApiRouter");
app.use(express.static('public'));
app.use(session({
    secret: "Secreto",
    resave: true,
    saveUninitialized: true
}));
app.use(methodOverride('_method'));



app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.use(cookie())

app.use(usuarioMiddle)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/", mainRouter);

// Sprint 5

app.use('/', loginRouter);
app.use('/api/users', userApiRouter)
app.use('/api/products', productsApiRouter)

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});

app.use((req, res, next) => {       //Este es el middleware que redirecciona a la vista de 404Nfound (funciona!)
    res.status(404).render('404notFound');
    next();
})

