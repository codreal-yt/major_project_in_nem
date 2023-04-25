//require the library of mongoose
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/major_project_db');

//Acquire the connection 
const db = mongoose.connection;

//If Error in monogoose database connection
db.on('error', console.error.bind(console, 'error connecting to the db'));

//Successfully database connection
db.once('open', function(){
    console.log('Successfully connected to the database');
});