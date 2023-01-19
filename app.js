const express = require("express");
const app = express();
const mainRoutes = require('./src/routes/mainRouter');

app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});

app.use("/", mainRoutes);

app.use("/detalle-de-producto", mainRoutes);

app.use('/login', mainRoutes);


app.use('/register', mainRoutes);

app.use('/carrito-de-compras', mainRoutes);

app.set('view engine', 'ejs');