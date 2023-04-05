const db = require('../database/models');

module.exports = async (req, res, next) => {
    let user = null 
    //cookie
    if(req.session && req.session.user){
        user = req.session.user
    }
    res.locals.user = user
    
    return next();
}