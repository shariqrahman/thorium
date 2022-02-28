const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    }, 
    prices: {
        indianPrice: String,
        europePrice: String,
    }, 
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    authorName: String, 
    totalPages: Number,
    stockAvailable: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('BookList', bookSchema)
















// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: {
//         type: String,
//         require: true,
//     },
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     year: {
//         type: Number,
//         default:2021,
//     },
//     tags: [String],
//     authorName: String, 
//     totalPages: Number,
//     stockAvailable: false
    
// }, { timestamps: true });


// module.exports = mongoose.model('BookCollection', bookSchema)
