const express=require("express");
const app=express();
const {UserRouter}=require('./routers/User.Router');
const {ProductRouter}=require("./routers/Product.Router")
const {connection}=require("./configs/db");
const {OrderRouter}=require("./routers/Order.router")
const cors=require('cors');
require('dotenv').config()
app.use(cors());
app.use(express.json());
app.use("/User",UserRouter);
app.use("/product",ProductRouter);
app.use("/Order",OrderRouter);
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error);
        console.log("db is not connected")
    }
    console.log(`http://localhost:${process.env.port}`)
})