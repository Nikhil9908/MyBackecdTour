const authorModels = require('../models/authorModels')

const createAuthor = async function(req, res){
    let data = req.body
    let savedData = await authorModels.create(data)
    res.send({msg: savedData})
}

module.exports.createAuthor = createAuthor