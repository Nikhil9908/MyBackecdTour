const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorId: { type: Number, required: true, unique: true },
    authorName: { type: String, required: true },
    age: Number,
    address: String
}, { timestamps: true })

module.exports = mongoose.model('Author', authorSchema)