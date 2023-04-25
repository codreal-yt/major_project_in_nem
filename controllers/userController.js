// users model
const Users = require("../models/users");

// render the profile page
exports.profile = async function (req, res) {

    try {
        if(req.cookies.user_id){
            let userDetails = await Users.findById(req.cookies.user_id);
     
            // console.log('User Details:',userDetails);
     
            return res.render("userProfile", {
             title: "User Profile",
             details: userDetails
           });
         }else{
             return res.redirect('/users/sign-in');
         }
    } catch (error) {
        console.log(`Error to find details of user profile ${error}`);
        return res.redirect('/users/sign-in');
    }

};

// render the sign-up page
exports.signUp = function (req, res) {
  return res.render("signUp", {
    title: "User Sign-UP",
  });
};

// create new user data
exports.create = async function (req, res) {
  try {
    // console.log(req.body);

    let user = await Users.findOne({ email: req.body.email });

    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }

    if (!user) {
      Users.create(req.body);
      console.log(`New User Created Successfully`);
      return res.redirect("/users/sign-in");
    } else {
      return res.redirect("back");
    }
  } catch (error) {
    console.log(`Error to create new user ${error}`);
    return res.redirect('back');
  }
};

// render the sign-in page
exports.singIN = function (req, res) {
  return res.render("signIn", {
    title: "User Sign-IN",
  });
};

// sign-in and create a session for the user
exports.createSession = async function(req, res){
    try {
        // Steps to authenticate
        // Find the user
        let user = await Users.findOne({email: req.body.email});

        if(user){
            // match password
            if(user.password != req.body.password){
                console.log('Email/Password Missmatched', req.body.password);
                return res.redirect('back');
            }

            // create session
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        }else{
            console.log('No Input User Found');
            return res.redirect('back');
        }
    } catch (error) {
        console.log(`Error to find the user details ${error}`);
        return res.redirect('back');
    }
}


// Logout or Destroy Session
exports.destroySession = function(req, res){
  
    res.cookie('user_id', null);
    return res.redirect('/');
}