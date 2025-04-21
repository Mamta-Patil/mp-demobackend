const mongoose=require("mongoose")

const studentSchema =new mongoose.Schema({
    Name:String,
    Roll_No:{type:Number,unique:true},
    Standerd:Number
}) 

const studentModel=mongoose.model("info",studentSchema)
module.exports=studentModel