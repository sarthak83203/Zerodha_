const {model, default: mongoose}=require("mongoose");
const { Holding } = require("../schemas/Holding");
const holding=new model("holding",Holding);

module.exports={holding};
