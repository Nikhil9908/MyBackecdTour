const jwt = require('jsonwebtoken')
const userModel= require("../models/userModel")

const createUser=async function(req,res){
  try{
    let data = req.body
    if(data){
    let savedData = await userModel.create(data)
    res.status(201).send({msg:savedData})
    }
    else{
      res.status(400).send({msg: "bad Request"})
    }
}
 catch(error){

   return res.status(500).send({status:false , message:error.message})

  
 }
}


const loginUser= async function(req,res){
  try{
    let userName = req.body.emailId
    let password = req.body.password
    let user = await userModel.findOne({emailId:userName,password:password})
    if (!user) 
      return res.status(403).send ({ status:false,msg:"username or the password is not correct"})
    let payload = {userId: user._id.toString()}
    let token = jwt.sign(payload,"Naman")
    res.status(200).send({status:true,data:token})
} 
catch(error){
   return res.status(500).send({status: false, msg: error.massage})
}
}

// let user = await userModel.findOne({emailId:userName,password:password})
const getUserData = async function (req, res) {
  try{
    let token =req.headers['x-auth-token']
    console.log(token) 
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
    res.status(202).send({ status: true, data: userDetails }); // 202 for accepted
   }
  catch(error){
    return res.status(500).send("this is error", error.massage)
  }
}
  const updateUser = async function (req, res) {
    try{
    let userData = req.body;
    let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(205).send({ status: updatedUser, data: updatedUser }); //reset content
    }
    catch(error){
      return res.status(500).send(error.massage)
    }
  };

  const markUser = async function (req, res) {
    try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set: {isDeleted: true}}, {new:true});
   return  res.status(201).send({ status: "true", data: updatedUser });  
  }
  catch(error){
   return   res.status(500).send("error", error.massage)

  }
  };
  


module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.markUser=markUser
