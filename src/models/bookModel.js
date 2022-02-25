const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    category: [ String, String
    ],
    year: Number
}, { timestamps: true });

module.exports = mongoose.model('MSQ_Book', bookSchema)


// String, Number
// Boolean, Object/json, array