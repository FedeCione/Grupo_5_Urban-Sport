module.exports = (req, res, next) => {
    if (req.session.user.rol_id === 0) {
        next()
    } else {
        res.redirect('/')
    }
}