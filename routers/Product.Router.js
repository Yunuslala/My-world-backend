const express=require("express");
const ProductRouter=express.Router();
const {AddProduct,GetAllProduct,GetProductById}=require("../controllers/Product.controller")

ProductRouter.post('/Add',AddProduct);
ProductRouter.get("/get",GetAllProduct);
ProductRouter.get("/get/:id",GetProductById);

module.exports={
    ProductRouter
}