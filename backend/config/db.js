require("dotenv").config();
const mongoose=require("mongoose");
const connectDb=async(req,res)=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Successfully connected database");
    }).catch(()=>{
        console.log("Server Error is there....");
    })

}
module.exports=connectDb;