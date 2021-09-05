module.exports = {
  home: (req, res) => {
    res.render("home", {
      session: req.session
    });
  },
};
