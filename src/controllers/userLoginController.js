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
        res.render('register')

    },
    registerProcess: (req,res) =>{
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            country: req.body.country,
            email: req.body.email,
            password: req.body.password
        }
        users.push(user);

        fs.writeFileSync(usuariosJSON, JSON.stringify(users, null, 2));

        res.redirect('/');
    }
};

module.exports = userController;    