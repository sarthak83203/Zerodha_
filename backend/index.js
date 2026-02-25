const express=require("express");
const connectDb = require("./config/db");
const { holding } = require("./model/HoldingsModel");
const { position } = require("./model/Position");
require("dotenv").config();

const app=express();
const PORT=process.env.PORT ||3004;

app.listen(PORT,()=>{
    console.log("App Started");
})

// app.get("/addPositions",async(req,res)=>{
//     let temp=[
//  {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
 

// //for each item i am making a new model
// temp.forEach((item)=>{
//     let newhold=new position({ //model name is Holding
//       product:item.product,
//       name:item.name,
//       qty:item.qty,
//       avg:item.avg,
//       price:item.price,
//       net:item.net,
//       day:item.day,
//       isLoss:item.isLoss,


//     })
//     newhold.save();


// })
// res.send("Done yes");


// })


//this is backend URL


connectDb();