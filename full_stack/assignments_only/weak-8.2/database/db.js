const mongoose =require("mongoose")
// const { number } = require("zod")
const Schema =mongoose.Schema
// const ObjectId =mongoose.Types.ObjectId
const userSchema =new Schema({
    email:{type:String,require:true,unique:true},
    password:String
})

const adminSchema = new Schema ({
    email:{type:String,require:true,unique:true},
    password:String
})
const courseSchema =new Schema({
    title:String,
    description:String,
    price:{type:Number,required:true},
    imageUrl:String,
    
})




const user = mongoose.model("user",userSchema)
const admin = mongoose.model("admin",adminSchema)
const course = mongoose.model("course",courseSchema)
 
module.exports={
    user:user,
    admin:admin,
    course:course
}