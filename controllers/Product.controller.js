const {ProductModel}=require("../models/Product.Model");

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



const AddProduct=async(req,res)=>{
    try {
        const response=await fetch('https://fakestoreapi.com/products')
          const Data=await response.json()
          console.log(Data)
        const saveProduct=await ProductModel.insertMany(Data);
        console.log(saveProduct)
        res.status(201).send({"msg":"Products has been added"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const GetAllProduct=async(req,res)=>{
    try {
        const AllProduct=await ProductModel.find();
        res.status(200).send(AllProduct)
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}
const GetProductById=async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id)
        const data=await ProductModel.findOne({_id:id});
        console.log(data)
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error}) 
    }
}


module.exports={
    GetAllProduct,AddProduct,GetProductById
}