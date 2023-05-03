const db = require('../database/models');

function sessionUsuario (req, res, next) {
    //cookie
    if(req.session.user && req.session.user.roleID == 1){
        next();
    }else{
        res.redirect("/login");
    }
    
}

module.exports = sessionUsuario