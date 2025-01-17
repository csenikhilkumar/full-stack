const {Router} = require('express');
const z =require("zod")
const {admin, course}=require("../database/db")
const { adminAuthmiddel } = require("../middlewares/adminAuthmiddel");
const bcrypt =require("bcrypt")
const adminrouter = Router();
const {admin_secrate}=require("../config")
const jwt = require("jsonwebtoken")


adminrouter.post("/signup",async function(req,res){
const requirebody = z.object({
    username:z.string().min(2).max(20),
    password:z.string()
})
const safeparsewithsuccess = await requirebody.safeParse(req.body)
 if (!safeparsewithsuccess){
res.json({
    "massage":"you are using wrong cridentials please write right cred.."
}) 
}
const username = req.body.username;
const password =req.body.password
const hashedPassword = await bcrypt.hash(password,17)
const user = await admin.create({
    username:username,
    password:hashedPassword
})
res.json({
    "msg":"you are succesfully signed_up"
})
})


adminrouter.post("/signin",async function(req,res){
    const username = req.body.username;
    const password =req.body.password
    const check= await admin.findOne({
        username:username
    })
    if(!check){
        res.json({
            "msg":"username not valid please try again "
        })
    }

    const passwordMatch =await bcrypt.compare(password,check.password)
    if(passwordMatch){
        // const token=jwt.sign({id:usercheck._id.toString()},user_secrate)
        const token = jwt.sign({id:check._id.toString()},admin_secrate)
        res.json({
        token:token
        })
    }
})


adminrouter.post("/course",adminAuthmiddel,async function(req,res){
const adminId=req.adminId
const title = req.body.title
const description = req.body.description
const price = req.body.price
const imageUrl=req.body.imageUrl
const courses = course.create({
    title :title,
    description:description,
    price:price

})
res.json({
    "msg":"course succesfully created",
    courseId:courses._id
})
})

adminrouter.get("/allcourse",adminAuthmiddel,async function (req,res){
const adminId=req.adminId
const username =req.body.username
const allCourses= await course.find({})
res.json({
    // allCourses:allCourses,
    allCourses
})
})
 
module.exports={
    adminrouter:adminrouter
}