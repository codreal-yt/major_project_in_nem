// Express module
const express = require('express');
// Path module
const path = require('path');
//call the universal layout of this projects :)
const expressLayout = require('express-ejs-layouts');
// Loading Cookie Parser
const cookieParser = require('cookie-parser');
// Mongo Store For session cookies
const MongoStore = require('connect-mongo');

// Assigning Port
const port = 8000;
// Using Express functionality
const app = express();
//Calling the database connection
const db = require('./config/mongoose');
// Used for Session Cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//Form data extracted
app.use(express.urlencoded());
// Cookie Parser
app.use(cookieParser());
app.use(expressLayout);
//Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// Set view with ejs
app.set('view engine', 'ejs');
// app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
// Use Middleware to load static files
app.use(express.static('./assets'));
// App Session
app.use(
  session({
    name: 'NEM',
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
        mongoUrl: "mongodb://localhost/major_project_db",
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
//Call and using the router in the middleware
app.use('/', require('./routes'));

// Creating server
app.listen(port, function(err){
    if(err){
        console.log(`Error to running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
   
})