const express =require("express")
const jwt =require("jsonwebtoken");
const mongoose=require("mongoose")
const jwt_secrete ="helloiam"
mongoose.connect("mongodb+srv://admin:7fegnJGsBAVLeCoh@cluster0.t9tqw.mongodb.net/users-1626")
const app = express();

const {usermodel,todomodel}=require("./db");

app.use(express.json())
function auth(req,res,next){
    const token =req.headers.authorization
    const response =jwt.verify(token,jwt_secrete)
    if(response){
        req.userId=response.id
        next()
    }
    else{
        res.status(403).json({
            massage:"anauthorized access"
        })
    }
}

app.post("/signup",async function(req,res){
    const email =req.body.email;
    const password=req.body.password;
    const username =req.body.username;
    await usermodel.create({
        email:email,
        password:password,
        username:username
    })

    res.json({
        "massage":"you are signed-up"
    })

})

app.post("/signin",async function(req,res){
    const email =req.body.email;
    const password=req.body.password;
    const username =req.body.username;
    const user = await usermodel.findOne({
        email:email,
        password:password,
        usrname:username
    })

    if(user){
        console.log({
            id:user._id.toString()
        })
        const token =jwt.sign({
            id:user._id.toString()
        },jwt_secrete)
        res.json({
           token:token
        })
    }
    else{
        res.json({
            "masssge":"invalid cridentials"
        })
    }

})

app.post("/todo",auth, async function(req,res){

    const userId=req.userId
    const todos =await todomodel.create({
    description:"hii i am nikhil",
    userId ,
    })
    res.json({
        "massage":"todos created "
    })

})

app.get("/todos",auth, async function(req,res){
    const userId=req.userId
    const todo =await todomodel.findOne({
        userId
    })
    if (todo){
    res.json({
        todo
    })
    }
    else{
        res.status(403).json("invalid todo")
    }
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})