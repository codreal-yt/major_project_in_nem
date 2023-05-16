//loading the mongoose
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({

  //User ID
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //this defines the object id of the liked object
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    //this field is used for defining the type of the liked object since this is a dynamic reference
    onModel: {
        type: String,
        required: true,
        enum: ['Feed', 'Comment']
    }
}, {
    timestamps: true
});


const Like = mongoose.model('Like', likeSchema);

module.exports = Like;