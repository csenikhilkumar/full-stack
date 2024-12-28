const mongoose=require("mongoose");
// console.log("connect to")
mongoose.connect("mongodb+srv://admin:7fegnJGsBAVLeCoh@cluster0.t9tqw.mongodb.net/coursera-app")
const { object, number, string } = require("zod");
const Schema =mongoose.Schema;
const ObjectId =mongoose.Types.ObjectId;
const userSchema = new Schema ({
  
    email:{type:String,require:true,unique:true},
    password:String,
    firstName:String,
    lastName:String,
})

const adminSchema= new Schema({
    email:{type:String,require:true,unique:true},
    password:String,
    firstName:String,
    lastName:String,
    
})


const courseSchema= new Schema({
  title:String,
  description:String,
  price:Number,
  imageUrl:String,
  creatorId:String

    
})

const purchagesSchema= new Schema({
  courseId:ObjectId,
    userId:ObjectId
})

const usersModel=mongoose.model("user",userSchema)
const adminModel=mongoose.model("admin",adminSchema)
const purchagesModel=mongoose.model("purchase",purchagesSchema)
const courseModel =mongoose.model("course",courseSchema)

module.exports={
    usersModel:usersModel,
    adminModel:adminModel,
    purchagesModel:purchagesModel,
    courseModel:courseModel
}