const {Schema}=require("mongoose"); //coming from mongoose

const Holding=new Schema({
    name:String ,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
})
module.exports={Holding};