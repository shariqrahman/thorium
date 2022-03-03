const { count } = require("console");
const authorModel = require("../models/authorModel");
const bookModel = require("../models/newBookModel");
const publisherModel = require("../models/publisherModel");

// 1.
const createBook = async function (req, res) {
  let data = req.body;
  let ad = data.author;
  let pd = data.publisher;

  let author1 = await authorModel.findById(ad);
  let publisher1 = await publisherModel.findById(pd);

  if (data.hasOwnProperty("author")) {
    if (author1 === null) {
      return res.send({ error: "author is not present" });
    } else {
      if (data.hasOwnProperty("publisher")) {
        if (publisher1 === null) {
          return res.send({ error: "publisher is not present" });
        } else {
          let bookData = await bookModel.create(data);
          return res.send({ book: bookData });
        }
      } else {
        return res.send({ error: "publisher id is required" });
      }
    }
  } else {
    return res.send({ error: "author id is required" });
  }
};

const getBooksData = async function (req, res) {
  let books = await bookModel.find().populate("author").populate("publisher");
  res.send({ data: books });
};


// 2.
const updateHardCover= async function (req,res){
  const update = await bookModel.updateMany({$or: [{"myPublisher":"6220ee256cd524bdd3ed1e2e" },{"myPublisher": "6221227d82084c6ce4704832"}]},{"isHardCover": true},{new:true})
  res.send("changes Updated")
}

// 3.
const updatePrice= async function (req, res) {
  let increasePrice = await bookModel.updateMany({ratings:{$gt:3.5}},{$inc : {price: +10}});
  res.send({msg: "Pirice Changed successfully Check your Database for updated price"})
}


module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.updateHardCover = updateHardCover;
module.exports.updatePrice = updatePrice;
























// const updateHardCover = async function (req, res) {
//   let data = req.body;
//   let books = await bookModel.find().populate("publisher");
//   let booksByPublisher = books.filter(
//     (ele) =>
//       ele.publisher.name == "Penguin" || ele.publisher.name == "HarperCollins"
//   );
//   let booksName = booksByPublisher.map((x) => x.name);
//   console.log(booksName);
//   let updatedCover = [];
//   for (let i = 0; i < booksName.length; i++) {
//     let element = booksName[i];
//     let updateData = await bookModel.findOneAndUpdate(
//       { name: element },
//       { $set: data },
//       { new: true }
//     );
//     updatedCover.push(updateData);
//   }
//   res.send({ updatedCover: updatedCover });
// };