const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    author: {
        type: String,
        required: true
    },
    queue: {
        type: [String]
    },
    borrowedBy: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Book', bookSchema);