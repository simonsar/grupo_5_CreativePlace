const { Association } = require('sequelize');
const db = require('../database/models');



module.exports = {
    detail: async (req, res) => {//Este no funciona
        let response = {}
        try {
            response.status = 200
            const course = await db.Course.findByPk(req.params.id, {include: [{association: 'commission'}]} )
            response = {...course.dataValues, ...response}
            response.image = '/img/img-courses/' + course.image
            return res.json(response)
            
            }catch (error) {
            response.status = 403
            response.msg = error.msg
            console.log(error)
            return res.json(response)
            }    
               
        },

    list: async (req, res)=>{
        let response = {}
        try {
            response.status = 200
            const listado = await db.Course.findAll({include: [{association:'commission'}]})
            const commission = await db.Commission.findAll({include: [{association:'course'}]})

            response.products = listado.map((course) => {
                return {
                    id: course.id ,
                    nombre: course.name,
                    descripcion: course.description,
                    detail: '/api/products/' + course.id,
                    commissions: course.commission.length

                }
            })
            console.log(response)
            return res.json(response)

        } catch (error) {
            response.status = 403
            response.msg = error.msg
            return res.json(response)
        }
    }
    }
    
