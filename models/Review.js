const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crete Schema
const ReviewSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String
    },
    
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Review = mongoose.model('review', ReviewSchema);