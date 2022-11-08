const jwt = require("jsonwebtoken");

const verification = function(req, res, next){
    try{
    let token = req.headers['x-auth-token']
    
    if(!token)
    {
        return res.status(401).send({ status: false, msg: "Token must be present" })
    }
    else
    {
        
        
        let decodedToken = jwt.verify(token, "Naman");
        console.log(decodedToken)
        let verUser = decodedToken.userId
        let uId = req.params.userId
        if(verUser == uId){

            next()
        }
        else {
          return res.status(401).send({ status: false, msg: "Token is invalid" });
        }
    }
}
   catch(error){
  return res.status(500).send(error.massage)

   }
}

module.exports.verification = verification
