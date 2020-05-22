const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    fullUrl: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    click: {
        type: Array,
        required: true,
        default: [],
    }
})

module.exports = Link = mongoose.model('Link', linkSchema);