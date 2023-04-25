// User Profile Controller
exports.profile = function(req, res){
    return res.render('userProfile', {
        title: "PROFILE"
    })
}

// User SignUp Controller
exports.signUp = function(req, res){
    return res.render('signUp', {
        title: 'User Sign-UP'
    })
}

// User SignIN Controller
exports.singIN = function(req, res){
    return res.render('signIn', {
        title: 'User Sign-IN'
    })
}