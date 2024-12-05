const express = require ("express");
const jwt = require ("jsonwebtoken");
const jwt_secrate="nikhilkumawat";
const app = express();
app.use(express.json())

let users = []
app.post("/sign",function(req,res){
    const username = req.body.username
    const password =req.body.password
    users.push({
        username:username,
        password:password
    })

    res.json({
        msg:"you are signin"
    })
})
app.use(express.json())
    app.use(function(req,res,next){
       const username=req.body.username
       const password=req.body.password
       foundUser=null
    for(let i=0;i<users.length;i++){
        if(users[i].username==username&&users[i].password==password){
          foundUser=users[i]
          if(foundUser){
          next()
          }
        }
        else{
            res.json({
                "msg":"unauthorized access"
            })
        }
    }
})

app.post("/signin",function(req,res){
    const username = req.body.username
    const password =req.body.password
    let foundUser=null;
    const user = users.find(user=>user.username)
    if(user){
        const token=jwt.sign({
            username:user.username
        },jwt_secrate)
    res.json({
        "token":token,
        "msg":"you are signed in"
    })    
    }
    else{
        res.json({
         "mag":"unauthorized token"
        })
    }
    console.log(users)
    
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})
