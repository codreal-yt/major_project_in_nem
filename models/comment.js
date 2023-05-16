// Importing mongoose library
const mongoose = require('mongoose');

// Comment Schema 
const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        require: true
    },
    // Comment belongs to a user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feed'
    }
}, {
    timestamps: true,
    versionKey: false
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;