// Express
const express = require('express');
// EJS
const ejs = require('ejs');
const path = require('path');

// Port
const port = 8001
// Using Express functionality
const app = express()

// Set view with ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Use Middleware to load static files
app.use(express.static('./assets'));

// Router
app.use('/', require('./routes'));

// Server
app.listen(port, function(err){
    if(err){
        console.log(`Error to running the server ${err}`);
    }
    console.log(`Server running successfully on ${port}`);
})