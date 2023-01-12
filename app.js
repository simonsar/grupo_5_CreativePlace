const express = require("express");
const app = express();


app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get("/detalle-de-producto", (req, res) => {
    res.sendFile(__dirname + '/views/detalle-de-producto.html')
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html')
});

app.get('/carrito-de-compras', (req,res) => {
    res.sendFile(__dirname + '/views/carrito-de-compras.html')
});