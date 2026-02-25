const express=require("express");
const connectDb = require("./config/db");
const { holding } = require("./model/HoldingsModel");
const { position } = require("./model/Position");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const { order } = require("./model/Order");

require("dotenv").config();


const app=express();
const PORT=process.env.PORT ||3004;
app.use(cors());
app.use(bodyParser.json());

//End point
//By this endpoints i can connect to dashboard that is part of frontend
app.get("/holdings",async(req,res)=>{
    //reading data
    //sending to frontend
    let holdings=await holding.find({});
    res.json(holdings);



})

app.get("/orders",async(req,res)=>{
    let orders=await order.find({});
    res.json(orders);
})
app.get("/positions",async(req,res)=>{
    //reading data
    //sending to frontend
    let positions=await position.find({});
    res.json(positions);
})

app.post("/newOrder",async(req,res)=>{
    let newOrder=new order({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
    });
    newOrder.save();
    res.send("saved");


})

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