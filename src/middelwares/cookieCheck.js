module.exports = function(req,res,next){
    if(req.cookies.userUrbanSport){
        req.session.user = req.cookies.userUrbanSport;
        res.locals.user = req.session.user
    }
    next()
}