const express =require ("express")
const app =express();
const jwt = require("jsonwebtoken")
const jwt_secrete ="iloveanmol"
const mongoose =require("mongoose");
const{usermodel,todomodel}=require("./db")
mongoose.connect("mongodb+srv://admin:7fegnJGsBAVLeCoh@cluster0.t9tqw.mongodb.net/users-162657")
app.use(express.json())

async function auth(req,res,next){
    const token = req.headers.authorization;
    const decodeinfo = await jwt.verify(token,jwt_secrete)
    if(decodeinfo){
        req.userId=decodeinfo.id
        next()
    }
    else{
        res.json({
            massage:"unathorized token"
        })
    }
}


app.post("/signup",async function(req,res){

    const email =req.body.email;
    const password =req.body.password;
    const username =req.body.username;
    await usermodel.create({
    email:email,
    password:password,
    username:username
})

res.json({
    massage:"you are signed_up"
})

})



app.post("/signin",async function(req,res){
    const email =req.body.email;
    const password =req.body.password;
    const username =req.body.username;
    const user =await usermodel.findOne({
email:email,
password:password,
username:username
    })
    if (user){
        const token = jwt.sign({
            id:user._id.toString()
           },jwt_secrete)
           res.json({
            token:token
        })
    }

})



app.post("/todos",auth,async function(req,res){
 const userId=req.userId
 await todomodel.create({
    tital:"i am nikhil how can i help you",
    userId
 })
res.json({
    massage:"todo is succesfully created "
})
})


app.get("/todo",auth,async function(req,res){
const userId=req.userId;
const todo =await todomodel.findOne({
    userId
})
res.json({
    todo
})

})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})