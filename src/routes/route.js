const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const orderController = require('../controllers/orderController')
const middleware = require('../middlewares/commonMiddlewares')


///============================= USER API =================================

router.post('/createUser',middleware.headerValidation , userController.createUser)
router.get ('/getUser', userController.getUsersData)

//=============================== PRODUCT API ===================================================

router.post('/createProduct',productController.createProduct)



//================================= ORDER API ====================================

router.post('/createOrder',middleware.headerValidation,orderController.createOrder)

module.exports = router;

module.exports = router;