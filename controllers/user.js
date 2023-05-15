// Sign IN Page Render
exports.sign_in_page_render = function(req, res){
    return res.render('sign_in',{
        title: 'USER SIGN IN'
    })
}

// Sign Up Page Render
exports.sign_up_page_render = function(req, res){
    return res.render('sign_up',{
        title: 'USER SIGN UP'
    })
}