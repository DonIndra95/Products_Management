const express= require("express")
const { authentication, authorization } = require("../auth/auth")
const { createProduct, getProducts, getProductDetails, updateProduct, deleteProduct } = require("../controllers/productController")
const { userRegister, putUser, loginUser, getUserDetails } = require("../controllers/userController")
const { userValidation, putUserValidations } = require("../validations/userValidations")
const router= express.Router()

//User APIs

router.post("/register",userValidation,userRegister)
router.post("/login",loginUser)
router.get("/user/:userId/profile",authentication,authorization,getUserDetails)
router.put("/user/:userId/profile",authentication,authorization,putUserValidations,putUser)

//Product APIs

router.post("/products",createProduct)
router.get("/products",getProducts)
router.get("/products/:productId",getProductDetails)
router.put("/products/:productId",updateProduct)
router.delete("/products/:productId",deleteProduct)

module.exports=router