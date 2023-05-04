// Passport Library
const passport = require('passport');
// passport local
const LocalStrategy = require('passport-local').Strategy;
// Import user models
const Users = require('../models/users');

// Authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, 
   async function (email, password, done){
        //find a user and establish the identity
        try {
            let user =  await Users.findOne({email: email});
            // console.log(user);
            if(!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            return done(null, user);
        } catch (error) {
            console.log('Error in finding user --> Passport');
            return done(err);
        }
    }
));

//Serializing the users to decide which key to kept in the cookies
passport.serializeUser(function (user, done) {
    // console.log('Passport Id:', user);
    return done(null, user.id);
});

//Deserializing the user from the key in the cookies
passport.deserializeUser( async function (id, done) {
   try {
    let user = await Users.findById(id);
    // console.log('Passport Id:', user);
        return done(null, user);
   } catch (error) {
    console.log('Error in finding user --> Passport');
    return done(error);
   }
});

//check if the user is authenticated 
passport.checkAuthentication = function (req, res, next) {
    //if the user is signed in the pass the request to the controllor's
    if (req.isAuthenticated()) {
        return next();
    }
    //if the user is not signed-in
    return res.redirect('/users/sign-in');
}

//sending the new users session of the cookies to the view
passport.setAuthenticationUser = function (req, res, next) {

    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    return next();
}

module.exports = passport;