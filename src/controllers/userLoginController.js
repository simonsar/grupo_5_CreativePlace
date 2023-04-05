const {validationResult} = require('express-validator');
const User = require('../database/models/User');
const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const usuariosJSON = path.join(__dirname, '../database/users.json');
const db = require('../database/models');

let users = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

const userController = {
    login: (req, res) => {
        res.render('login')
    },
    loginProcess: async (req, res) => {
         //let userToLogin = User.findByField('email', req.body.email);
        try {
            let usuario = await db.User.findOne({
                where:{email: req.body.email}
            })

            if(usuario){
                if (!bcryptjs.compareSync(req.body.password, usuario.password)){
                    return res.render('login',{
                        errors: {
                            msg: 'La contraseña no es correcta'
                        }
                    })
                }
                req.session.user = usuario
                res.locals.user = usuario
                return res.redirect('/'/*perfil*/);
            }else{
                return res.render('login',{
                    errors: {
                        msg: 'Email no registrado'
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
    editarUsuario: () => {

    },
    eliminarUsuario: () => {
        
    },
    register: (req, res) => {
        res.render('register')

    },
    registerProcess: async (req,res) =>{
        
        let errors = validationResult(req);
        
        if(errors.isEmpty() && await db.User.findOne({where:{email: req.body.email}}) == null){
             let user = {
                first_Name: req.body.firstName,
                last_Name: req.body.lastName,
                country: req.body.country,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10)
            }
            users.push(user);

            db.User.create(user);

            fs.writeFileSync(usuariosJSON, JSON.stringify(users, null, 2));

            res.redirect('/login');
        }else{
            res.render('register', {
                errors: errors.array(),
                old: req.body
            });
            console.log(errors)
        }

        /*let userInDb = User.findByField('email', req.body.email);

        if (userInDb) {//esto no esta funcionando 
            return res.render('register', {
                errors: {
                    email: {
                    msg: 'Este email ya está registrado'
                    }
                },

                oldData: req.body

            });
            
        }*/

        
       
    }
};

module.exports = userController;    