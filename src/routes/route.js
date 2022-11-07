const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth=require("../middileware/mid")


router.post("/User", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.verification,userController.getUserData)

router.put("/users/:userId", auth.verification,userController.updateUser)
router.delete("/users/:userId",  auth.verification,userController.markUser) 

module.exports = router;