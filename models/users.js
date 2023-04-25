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
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;