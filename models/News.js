const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crete Schema
const NewsSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
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

module.exports = News = mongoose.model('news', NewsSchema);
