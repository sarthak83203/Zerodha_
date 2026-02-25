const {model}=require("mongoose");
const { Order } = require("../schemas/Order");

const order=new model("order",Order);
module.exports={order};