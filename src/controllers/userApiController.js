const db = require('../database/models');



module.exports = {
    detail: async (req, res) => {
        let response = {}
        try {
            response.status = 200
            const usuario = await db.User.findByPk(req.params.id)
            delete usuario.password
            delete usuario//.el codigo del rol(no lo encontre en el modelo User)-mirar linea 33 del modelo-   
            response = {...usuario, ...response}
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
            response.users = listado.map((usuario) => {
                return {
                    id: usuario.id ,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    detail: '/api/users/' + usuario.id

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
