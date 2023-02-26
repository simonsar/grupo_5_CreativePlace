const path = require('path');
const fs = require('fs');

const usuariosJSON = path.join(__dirname, '../database/users.json');
let productos = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

const userController = {
    login: (req, res) => {
        return res.render('login')
    },
    loginProcess: (req, res) => {
        let usuarioingreso = req.body   
    },
    register: (req, res) => {
        return res.render('register')
    },
};

module.exports = userController;