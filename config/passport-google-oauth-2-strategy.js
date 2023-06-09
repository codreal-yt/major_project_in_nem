// Passport Library
const passport = require("passport");
const googleAuthPassport = require("passport-google-oauth").OAuth2Strategy;
// crypto library
const crypto = require("crypto");

// Users Models
const Users = require("../models/users");

//passport use new strategy for google login
passport.use(
  new googleAuthPassport(
    {
      clientID:
        "Enter your clientID generated by google",
      clientSecret: "Enter your client Secret Key",
      callbackURL: "http://localhost:8000/users/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        //Find the user from database
        let user = await Users.findOne({ email: profile.emails[0].value });
        // console.log("Access Token", accessToken);
        // console.log("Refresh Token", refreshToken);
        // console.log("google user:", profile);
        //check if user is find
        if (user) {
          return done(null, user);
        } else {
          //create the user in the database
          let createUser = await Users.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
          });

          return done(null, createUser);
        }
      } catch (error) {
        console.log("Error in google strategy-passport", error);
        return;
      }
    }
  )
);

module.exports = passport;
