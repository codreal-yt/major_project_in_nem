// Passport Library
const passport = require('passport');
// JWT Passport
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

// Users Model
const Users = require('../models/users');

let opt = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'NEM'
}

passport.use(new JWTStrategy(opt, function(jwtPayLoad, done){

    Users.findById(jwtPayLoad._id, function(err, user){
        if(err){
            console.log('Error in finding user from jwt', err);
            return;
        }

        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    });
}));

module.exports = passport; 