// Express
const express = require('express');
// EJS
const ejs = require('ejs');
const path = require('path');
// Used for Session Cookie
const session = require('express-session');
// Loading Cookie Parser
const cookieParser = require('cookie-parser');
// Mongo Store For session cookies
const MongoStore = require('connect-mongo');

// Port
const port = 8001
// Using Express functionality
const app = express();
//Calling the database connection
const db = require('./config/mongoose');
// Passport Library
const passport = require('passport');
// Passport Local Strategy
const passportLocal = require('./config/passport-local-strategy');

//Form data extracted
app.use(express.urlencoded({extended: false}));
// Cookie Parser
app.use(cookieParser());
// Set view with ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Use Middleware to load static files
app.use(express.static('./assets'));

// App Session
app.use(
    session({
      name: 'Social Site',
      secret: 'Subscribe To Codreal',
      saveUninitialized: false,
      resave: false,
      cookie: {
          // 1min = 60 * 1000
          // 60 min = 60 * 60 * 1000
          maxAge: (1000 * 60 * 60)
      },
      store: MongoStore.create(
        {
          mongoUrl: "mongodb://localhost/social_site",
          // autoRemove: 'disabled'
          ttl: 2 * 24 * 60 * 60,
          autoRemove: "interval",
          autoRemoveInterval: 10, // In minutes. Default
        },
        function (err) {
          console.log(err || "connect mongodb setup ok");
        }
      ),
    })
  );

// Intialize Passport
app.use(passport.initialize());
app.use(passport.session());
// Router
app.use('/', require('./routes'));

// Server
app.listen(port, function(err){
    if(err){
        console.log(`Error to running the server ${err}`);
    }
    console.log(`Server running successfully on ${port}`);
})