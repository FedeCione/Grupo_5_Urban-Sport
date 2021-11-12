module.exports = (req, res, next) => {
    if (req.session.user.rol_id === 1) {
        next()
    } else {
        res.redirect('/')
    }
}