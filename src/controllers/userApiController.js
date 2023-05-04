const db = require('../database/models');



module.exports = {
    detail: async (req, res) => {
        let response = {}
        try {
            response.status = 200
            const usuario = await db.User.findByPk(req.params.id)
            usuario.password = undefined
            usuario.roleID = undefined//esto calculo que le falta un const "role" para traer los roles, preguntar
            response = {...usuario.dataValues, ...response}
            //response.rutaImg = '/img/img-users/' + usuario.imagen (si aplicamos imagen de perfil va esto)
            return res.json(response)
            
            }catch (error) {
            response.status = 403
            response.msg = error.msg
            return res.json(response)
            }       
        },

    list: async (req, res)=>{
        let response = {}
        try {
            response.status = 200
            const listado = await db.User.findAll()
            response.count = listado.length
            response.users = listado.map((user) => {
                return {
                    id: user.id ,
                    nombre: user.nombre,
                    email: user.email,
                    detail: '/api/users/' + user.id

                }
            })
            return res.json(response)

        } catch (error) {
            response.status = 403
            response.msg = error.msg
            return res.json(response)
        }
    }
    }
