const {model}=require("mongoose");
const { Position } = require("../schemas/Position");

const position=new model("position",Position);
module.exports={position};