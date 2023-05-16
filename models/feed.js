// Importing mongoose library
const mongoose = require('mongoose');

// Feed Schema 
const feedSchema = new mongoose.Schema({
    content:{
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    // Including the arrays of ids of all comment
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    // Including the arrays of likes
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ]
}, {
    timestamps: true,
    versionKey: false
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;