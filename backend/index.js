const express=require("express");
const connectDb = require("./config/db");

const app=express();
app.listen(3002,()=>{
    console.log("App Started");
})

//this is backend URL
connectDb();