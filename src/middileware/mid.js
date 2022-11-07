const jwt = require("jsonwebtoken");

const verification = function(req, res, next){
    let token = req.Headers['x-auth-token']
    if(!token)
    {
        return res.send({ status: false, msg: "Token must be present" })
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
          return res.send({ status: false, msg: "Token is invalid" });
        }
    }
   
}

module.exports.verification = verification
