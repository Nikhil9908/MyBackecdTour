const bookModel = require('../models/bookModel')
const BookModel = require('../models/bookModel')

const createBook = async function( req, res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData = async function(req, res){
    let allBooks = await BookModel.find().select({bookName:1 , authorName:1, _id:0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function(req, res){
let yearBooks= await bookModel.find({year: 2021})

    res.send({msg: yearBooks})
}
const getParticularBooks= async function(req, res){
  let BookName = req.query.name
  let BookYear = req.query.year
  let BookAuthor = req.query.author 

  const bookData = await bookModel.find({$or :[{bookName:{$eq: BookName }},{year:{$eq: BookYear}},{authorName:{$eq: BookAuthor}}]})
   
  res.send({msg: bookData})
    
}

// const getParticularBooks = async function(req, res){
//     const bookData= await bookModel.find(req.body)
//     res.send(bookData)
//  }

const getXINRBooks = async function(req, res){
    const BookByINR = await bookModel.find({'prices.indianPrice' :{$in: ["200","800","1000"]}})
    res.send({msg:BookByINR})
}

const getRandomBooks = async function(req, res){
    let BookByPage = await bookModel.find({$and :[{totalPages:{$gt: 500}},{stockAvailable:{$eq: true}}]})
    res.send({msg: BookByPage})
}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks