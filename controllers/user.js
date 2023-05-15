// Importing user model
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Sign IN Page Render
exports.sign_in_page_render = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect(
            '/'
        );
      }

  return res.render("sign_in", {
    title: "USER SIGN IN",
  });
};

// Sign Up Page Render
exports.sign_up_page_render = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect(
            '/'
        );
      }

  return res.render("sign_up", {
    title: "USER SIGN UP",
  });
};

// Create New User
exports.create_user = async function (req, res) {
  try {
    let user = await Users.findOne({ email: req.body.email });

    if (req.body.password != req.body.confirm_password) {
      console.log("Password Not Matched!!");
      return res.redirect("back");
    }

    if (!user) {
      // Bcrypt Password
      const hashPassword = await bcrypt.hash(
        req.body.password,
        Number(bcryptSalt)
      );
      Users.create({
        fullname: req.body.fullname,
        email: req.body.email,
        mob: req.body.mob,
        password: hashPassword,
        confirm_password: hashPassword,
      });
      console.log(`New User Created Successfully`);
      return res.redirect("/user/sign-in");
    } else {
      return res.redirect("back");
    }
  } catch (error) {
    console.log(`Error to create new user ${error}`);
    return res.redirect("/user/sign-up");
  }
};

// Passport Authentication
exports.createSession = function(req, res){
    return res.redirect('/');
  }
  
// Logout or Destroy Session
  exports.destroySession = function(req, res){
    
      // res.cookie('user_id', '');
     
      req.logout(function(err) {
        if (err) { return next(err); }
        return res.redirect('/user/sign-in');
      });
  }

  // Feed Controller
  exports.feedPost = function(req, res){
    console.log(req.body);
  }