const { count } = require("console")
const BookModel= require("../models/bookModel")

// 1.
const createBook = async function (request, response) {
    const data = request.body; 
    const dataRes = await BookModel.create(data); 
    response.send({msg: dataRes}); 
}

// 2.
const bookList = async function (request, response) {
    const dataRes = await BookModel.find().select({
        'bookName': 1,
        'authorName': 1,
        '_id': 0
    }); 
    response.send({msg: dataRes}); 
}


// 3.
const getBooksInYear = async function (request, response) {
    const year = request.body.year; 
    const dataRes = await BookModel.find({'year': year}).select({
        'bookName': 1,
        '_id': 0
    }); 
    response.send({msg: dataRes});
}

// 4.
const getParticularBooks = async function (request, response) {
    const data = request.body; 
    const dataRes = await BookModel.find(data).select({
        'bookName': 1,
        '_id': 0
    }); 
    response.send({msg: dataRes});
}


// 5.
const getXINRBooks = async function (request, response) {
    let xinrBooks =  await BookModel.find({"prices.indianPrice" : {$in : ["500","200","100"]}})
    response.send({xinrBooks})
}

// 6.
const getRandomBooks = async function (request, response) {
    let randomBooks = await BookModel.find({ $or:[{stockAvailable:true},{totalPages: {$gt:500}}]})
    response.send({randomBooks})
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks



