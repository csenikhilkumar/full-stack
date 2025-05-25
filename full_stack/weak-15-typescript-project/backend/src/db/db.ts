import mongoose from "mongoose"
import { ref, title } from "node:process"
import { string } from "zod"
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name:String,
    email:{type:String,required:true,unique:true},
    password:String,
})

const userData = new Schema({
    
    
    link:String,
    title:String,
    tags:[{type:mongoose.Types.ObjectId,ref:"tag"}],
    UserId:{type:mongoose.Types.ObjectId,ref:"User",required:true},
    
})


const userLink = new Schema({
    
    
    hash:String,
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true,unique:true},
    
})

export const LinkSchema = mongoose.model("link",userLink)
export const user = mongoose.model("User",userSchema)
export const UserData= mongoose.model("Data",userData) 

