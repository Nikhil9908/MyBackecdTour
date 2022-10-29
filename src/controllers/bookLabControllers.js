const authorModels = require('../models/authorModels');
const BookLabModel = require('../models/bookLabModels')

const createLabBook = async function(req, res){
    let data = req.body
    let savedData = await BookLabModel.create(data);
    res.send({msg: savedData})
}

const findBook = async function(req, res){
    // let author = req.query.author
    let authorName = await authorModels.findOne({authorName:"Chetan Bhagat"})
    let book = await BookLabModel.find({authorId:authorName.authorId})
    res.send({msg:book}) 
}

const findAndUpdate = async function(req, res){
    let bookName = await BookLabModel.findOneAndUpdate({name:"Two states"},
    {$set:{price:100}},{new:true})
    let AuthorName = await authorModels.find({authorId:bookName.authorId}).select({authorName:1, _id:0})
    res.send({msg:bookName, Author:AuthorName});
}

const findBookByPrice = async function(req, res){
    let bookByPrice = await BookLabModel.find({price:{$gte:50 , $lte:100}}).select({authorId:1})
    let AuthorList = bookByPrice.map(x => x.authorId)
    let authorName = await authorModels.find({authorId:{$in: AuthorList }})

    res.send({msg:authorName})
}

module.exports.createLabBook= createLabBook;
module.exports.findBook = findBook;
module.exports.findAndUpdate = findAndUpdate;
module.exports.findBookByPrice = findBookByPrice;