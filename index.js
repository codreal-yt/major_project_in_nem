// Express module
const express = require('express');
// Path module
const path = require('path');
//call the universal layout of this projects :)
const expressLayout = require('express-ejs-layouts');

// Assigning Port
const port = 8000;
// Using Express functionality
const app = express();
//Calling the database connection
const db = require('./config/mongoose');

app.use(expressLayout);
//Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// Set view with ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Use Middleware to load static files
app.use(express.static('./assets'));


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