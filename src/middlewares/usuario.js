const db = require('../database/models');

function usuarioMiddle (req, res, next) {
    let user = null 
    //cookie
    if(req.session && req.session.user){
        user = req.session.user
        console.log('acá estoy!')
    }
    res.locals.user = user
    
    console.log(res.locals.user)
    next();
}

module.exports = usuarioMiddle