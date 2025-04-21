// const mongoose=require("mogoose");
const mongoose=require("mongoose")
const connection=mongoose.connect(process.env.MONGODBURL)
module.exports=connection