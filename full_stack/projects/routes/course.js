const {Router} =require("express")
const courseRouter =Router()
const {purchagesModel,courseModel}=require("../database/db")
const {userAuthmiddle}=require("../middlewares/user_auth")

courseRouter.post("/purchase",userAuthmiddle,async function(req,res){
  const userId=req.body.userId;
  const courseId=req.body.courseId;
  const course=await purchagesModel.create({
    courseId,
    userId
  })  
  res.json({
    "msg":"course purchased successfully"
     
}) 
}) 

courseRouter.get("/priview",userAuthmiddle,async function(req,res){
  const userId=req.userId;
  const courses = await purchagesModel.find({})
  res.json({
      courses
  })
})
 

module.exports={
  courseRouter:courseRouter
}

 