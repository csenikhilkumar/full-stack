
const {Router} = require("express")
const UserRouter=Router()
const jwt =require("jsonwebtoken")
const {z} =require("zod")
const {usersModel,purchagesModel,courseModel}=require("../database/db")
const{userAuthmiddle}=require("../../middlewares/user_auth")
const {users_jwt_secrate}=require("../config")
const bcrypt  =require("bcrypt")

UserRouter.post("/signup",async function(req,res){
    const requirebody =z.object({
        email:z.string().min(2).max(200).email(),
        password:z.string().min(2).max(200),
        firstName:z.string().min(2).max(200),
        lastName:z.string().min(2).max(200)
    })
    console.log("Received body:", req.body); 
    const safeparsewithsuccess = await requirebody.safeParse(req.body)
    if(!safeparsewithsuccess.success){
        res.json({
            "msg":"invalid cridentiol"
            
        })
        return
    }
    const email =req.body.email;
    const password =req.body.password;
    const firstName=req.body.firstName;
    const lastName =req.body.lastName
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(password,6)
          await usersModel.create({
        email:email,
        password:hashedPassword,
        firstName:firstName,
        lastName:lastName
    })
    res.status(201).json({ msg: "Signed up successfully" });
})

UserRouter.post("/signin",async function(req,res){
    const email =req.body.email;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const user =await usersModel.findOne({
        email:email,
    })
    console.log(user)
    if(!user){
        res.json({
            "msg":"user not exist please write correct username or email"
        })
    }

    const passwordMatch = await bcrypt.compare(password,user.password)
    if(passwordMatch){
        const token = jwt.sign({id:user._id.toString()},users_jwt_secrate)
        res.json({
            token:token
        })
    }
    else{
        res.json({
            "msg":"invalid credentiols because you are use wrong password"})
    }
    
    })


UserRouter.get("/purchases",userAuthmiddle,async function(req,res){
        const userId=req.body.userId
        const courses=await  purchagesModel.find({
            userId:userId
        })
        const coursedata = await courseModel.find({
            _id: { $in: courses.map(x => x.courseId) }
          });
          
        res.json({
            courses,
            coursedata
        })
    }) 

module.exports={
    UserRouter:UserRouter
}
