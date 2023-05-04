const db = require('../database/models');

async function usuarioMiddle (req, res, next) {
    let user = null 
    if (req.cookies && req.cookies.user) {
        req.session.user = await db.User.findOne({
            where:{email: req.cookies.user}
        })
    }
    if(req.session && req.session.user){
        user = req.session.user
        //console.log('acá estoy!')
    }
    res.locals.user = user
    
    //console.log(res.locals.user)
    next();
}

module.exports = usuarioMiddle