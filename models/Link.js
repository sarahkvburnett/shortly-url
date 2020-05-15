const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    links: {
        type: Array,
        required: true,
    }
})

module.exports = Link = mongoose.model('Link', linkSchema);