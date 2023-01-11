import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
    fees:{type:mongoose.Decimal128,required:true}
});


const studemtModel=mongoose.model("student",studentSchema);

const s2=studemtModel({
    name:"monu",
    age:20,
    fees:5000
});


// s2.save();

export default studemtModel;