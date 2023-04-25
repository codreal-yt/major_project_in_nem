// Importing mongoose library
const mongoose = require('mongoose');

// User Schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    passward: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})