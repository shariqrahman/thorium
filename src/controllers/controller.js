const authorModel = require('../models/authorsModel')
const bookModel = require('../models/bookModel')


// 1.
const createNewAuthor = async function (req,res) {
    const reqAuthor = req.body;
    const SavedData = await authorModel.create(reqAuthor)
    res.send( {msg : SavedData})
    
}


// 2.
const createNewBook = async function (req,res) {
    const reqBook = req.body;
    const Saved = await bookModel.create(reqBook)
    res.send( {msg : Saved})
    
}


// 3.
const bookByChetan = async function (req, res) {
    let authorDetails = await authorModel.findOne({author_name : "Chetan Bhagat"})
    let authorId = authorDetails.author_id
    let chetanBook = await bookModel.find({author_id : authorId}).select({name : 1, _id : 0})
    res.send({bookByChetan: chetanBook })
}


// 4.
const upadatedBookPrice = async function (req, res) {
    let update = req.body
    let bookData = await bookModel.findOneAndUpdate(
        { name : "Two states"}, {$set : update}, {new : true}
    )
    let authorId = bookData.author_id
    let author = await authorModel.findOne({author_id : authorId}).select({author_name : 1, _id :0})
    console.log(author)
    res.send({author_name : author.author_name, price : bookData.price})
}
 

// 5.
const authorsName = async function(req,res){
    let books =  await (await bookModel.find({price: {$gte : 50, $lte : 100}}).select({author_id :1, _id:0})).map(x => x.author_id)
    console.log(books)
    let arr = []
    for(let i=0; i< books.length ; i++){
        let arr1 = await (await authorModel.find({author_id : books[i]}).select({author_name : 1, _id : 0 })).map(x => x.author_name)
        arr.push(arr1 )
    }
    const arrayOfAuthors = arr.flat()
    res.send({author_name : arrayOfAuthors})
}

module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.bookByChetan = bookByChetan
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName