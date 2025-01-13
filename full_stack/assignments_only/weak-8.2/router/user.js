const{Router}=require('express');
const userrouter=Router();
const {user, course}=require("../database/db")
const z = require("zod")
const bcrypt = require("bcrypt")
const mongoose =require("mongoose")
const {userAuthmiddle}=require("../middlewares/userAuthmiddle")



userrouter.post("/signup",async function(req,res){
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
    const users = await user.create({
        username:username,
        password:hashedPassword
    })
    res.json({
        "msg":"you are succesfully signed_up"   
    })
    })


     userrouter.get("/allcourses",userAuthmiddle,async function(req,res){
        const allcourese=await course.find({})
        res.json({
            allcourese:allcourese 
        })
    })
  

    userrouter.put("/allcourses/:courseId",userAuthmiddle,async function(req,res){
                const courseId =req.params.courseId;
                const userId =req.userId
                const username =req.headers.username
             await user.updateOne({userId:userId},{$push: {purchagedCourses: courseId } })
                res.json({"msg":"you are bought a course successfully"})    
            })
            
userrouter.get("/purchagedcourses",userAuthmiddle,async function(req,res){  
  const userId =req.userId
    const username =req.headers.username
    console.log(username)
    const User =await user.findOne({
        username:username
  })
  console.log(User)
  console.log(User.purchagedCourses)
const courses =await course.find({
    _id: {
        "$in":User.purchagedCourses
    }
})
console.log(courses)
  res.json({
    courses:courses
  })

}); 


 module.exports={
        userrouter:userrouter
        }
