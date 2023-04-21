/*const db = require('../database/models');



module.exports = {
    detail: async (req, res) => {//falta hacer este, me perdi
        let response = {}
        try {
            response.status = 200
            const usuario = await db.User.findByPk(req.params.id)
            usuario.password = undefined
            usuario.role_id = undefined
            response = {...usuario.dataValues, ...response}
            response.rutaImg = '/img/img-users/' + usuario.imagen
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
            const listado = await db.Course.findAll({include: [{association:'categoria'}]})
            response.count = listado.length
            response.countByCategory = //no tenemos categorias
            response.products = listado.map((course) => {
                return {
                    id: course.id ,
                    nombre: course.nombre,
                    descripcion: course.descripcion,
                    detail: '/api/products/' + usuario.id,
                    category: course.categoria

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
    */
