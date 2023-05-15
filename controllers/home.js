// Home Page Controller
exports.home = function(req, res){
    return res.render("home", {
        title: 'HOME | Codreal Social Site'
    })
}