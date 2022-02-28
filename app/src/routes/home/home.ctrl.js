const home = (req, res) => {
    res.render("home/index");
};
const apply = (req, res) => {
    res.render("home/apply");
};

module.exports = {
    home,
    apply
}

