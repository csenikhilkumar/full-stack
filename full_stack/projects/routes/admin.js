const express = require("express")
const app =express()
const {Router} = require("express")
const {z}=require("zod")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
// const {usersModel,courseModel,adminModel,purchagesModel}=require("./database/db")
const {jwt_secrate}=require("../config")
const {adminAuthmiddle}=require("../middlewares/admin_auth")
const { adminModel, courseModel} = require("../database/db");
const adminRouter=Router()


app.use(express.json());

    adminRouter.post("/signup",async function(req,res){
        const requirebody =z.object({
            email:z.string().min(2).max(20).email(),
            password:z.string().min(2).max(20),
            firstName:z.string().min(2).max(200),
            lastName:z.string().min(2).max(200)
        })
        console.log("Received body:", req.body); 
        const safeparsewithsuccess = await requirebody.safeParse(req.body)
        if(!safeparsewithsuccess.success){
            res.json({
                "msg":"invalid cridentiol"
            })
        }
        const email =req.body.email;
        const password =req.body.password;
        const firstName=req.body.firstName;
        const lastName =req.body.lastName
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password,6)
              await adminModel.create({
            email:email,
            password:hashedPassword,
            firstName:firstName, 
            lastName:lastName
        })
        res.json({
            msg:"you are signed up"
        }) 
    
    })


    adminRouter.post("/signin",async function(req,res){
        const email =req.body.email;
        const password=req.body.password;
        const firstName=req.body.firstName;
        const lastName=req.body.lastName;
        const admin =await adminModel.findOne({
            email:email,
          
        })
    
        if(!admin){
            res.json({
                "msg":"user not exist please write correct username or email"
            })
        }

        const passwordMatch = await bcrypt.compare(password,admin.password)
        if(passwordMatch){
            const token = jwt.sign({id:admin._id.toString()},jwt_secrate)
            res.json({
                token:token
            })
        }  
        else{
            res.json({
                "msg":"invalid credentiols because you are use wrong password"})
        }
        
    })
    adminRouter.post("/course",adminAuthmiddle ,async function(req,res){
            const adminId=req.userId
            const {title,description,imageUrl,price,creatorId}=req.body
            const course = await courseModel.create({
            title:title,
            description:description,
            imageUrl:imageUrl,
            price:price,
            creatorId:adminId
            })
            res.json({
                "msg":"course created",
                courseId:course._id
            })

    }) 

    adminRouter.put("/course",adminAuthmiddle,async function(req,res){
        const adminId=req.userId
        const {title,description,imageUrl,price,courseId}=req.body
        const course = await courseModel.updateOne({_id:courseId,creatorId:adminId},{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        courseId:adminId
        })
        res.json({
            "msg":"course has been updated",
            "courseId":course._id
        })

    }) 
   
    adminRouter.get("/course/bulk",function(req,res){
        const adminId =req.userId;
        const courses = adminModel.findOne({
            creatorId:adminId
        })
        res.json({
            "msg":"course updated",
            courses:courses.id
        })
    }) 

module.exports={
    adminRouter:adminRouter
}
