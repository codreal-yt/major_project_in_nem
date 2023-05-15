// Importing mongoose library
const mongoose = require('mongoose');

// User Schema 
const feedSchema = new mongoose.Schema({
    content:{
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;