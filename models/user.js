// Importing mongoose library
const mongoose = require('mongoose');

// User Schema 
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    mob: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('Users', userSchema);

module.exports = User;