const express = require("express")
const app = express();
const cors=require("cors")
const path = require('path');
const jwt = require("jsonwebtoken")
const jwt_secrate="nikhilkumar"
app.use(express.json())
app.use(cors())
let users =[];
// assignment
function auth(req,res,next){
    const token = req.headers.token;
    const decodeinfo = jwt.verify(token,jwt_secrate)
    const username = decodeinfo.username
    if(username){
        next()
    }
    else{
        res.json({
            msg:"you are not logged in"
        })
    }
}


app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

app.post("/signup",function(req,res){
    const username = req.body.username
    const password = req.body.password
    users.push({
        username:username,
        password:password
    })
    res.json({
        msg:"you are signed up"
    })
    console.log(users)
})

app.post("/signin",function(req,res){
    const username = req.body.username
    const password = req.body.password

    let foundUser = null
    for(let i = 0;i<users.length;i++){
        if(users[i].username==username&&users[i].password==password){
            foundUser=users[i]
        }
    }
    if(foundUser){
        const token = jwt.sign({"username":username},jwt_secrate)
        // foundUser.token =token
        res.json({
            token:token
        })
    }
    else{
        res.status(404).json({
            "msg":"invalid username and password"
        })
    }
    console.log(users)
})

app.get("/me",auth,function(req,res){
    const token = req.headers.token;
    const decodeinfo = jwt.verify(token,jwt_secrate)
    const username = decodeinfo.username
    let foundUser=null
    
        for(let i =0;i<users.length;i++){
          if(users[i].username==username){
            foundUser=users[i]
        }
    }
       
            res.json({
                username:foundUser.username,
                password:foundUser.password
            })
})

app.listen(3000,function(){
    console.log("server is runnig on port 3000")
})