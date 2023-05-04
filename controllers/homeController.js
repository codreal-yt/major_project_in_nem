exports.home = function (req, res) {
  //Check authenticated or not

  if (req.isAuthenticated()) {
    return res.render("home", {
        title: "MAJOR PROJECT IN NODEJS",
      });
  }else{
    return res.redirect('/users/sign-in')
  }
  
};
