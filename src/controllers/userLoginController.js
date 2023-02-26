const path = require('path');
const fs = require('fs');

const usuariosJSON = path.join(__dirname, '../database/users.json');
let users = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

const userController = {
    login: (req, res) => {
        res.render('login')
    },
    loginProcess: (req, res) => {
        let usuarioingreso = req.body   
    },
    register: (req, res) => {
        res.render('register.ejs')
        res.render('register.ejs')

    },
};

module.exports = userController;    