const mongoose = require('mongoose')

const bookLabSchema = new mongoose.Schema({
    name: { type: String, required: true },
    authorId: { type: Number, required: true },
    price: Number,
    ratings: Number,

}, { timestamps: true });

module.exports = mongoose.model('Booklab', bookLabSchema);