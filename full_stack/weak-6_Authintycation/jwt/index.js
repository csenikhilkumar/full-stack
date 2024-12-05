const express = require ("express")
const jwt=require("jsonwebtoken")
const jwt_secrate="nikhilkumar";
const app = express();
app.use(express.json());
let users=[];
app.post("/signup",function(req,res){
    const username =req.body.username;
    const password= req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.json({
        "msg":"you are signed up"
    })
    console.log(users)

})

app.post("/signin",function(req,res){
    const username =req.body.username;
    const password= req.body.password;
    let foundUser = null;
    for(let i =0;i<users.length;i++){
        if(users[i].username==username&&users[i].password==password){
            foundUser=users[i];
        }
    }
    if(foundUser){
        const token =jwt.sign({
           username:username
        },jwt_secrate)
        res.json({
            "token":token
        })
    }
    else{
        res.status(403).json({
            "msg":"invalid token"
        })
    }
    console.log(users)
})
app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodeinformation=jwt.verify(token,jwt_secrate)
    const username=decodeinformation.username
    const user = users.find(user => user.username === username);
    if (user) {
        res.send({
            username: user.username,
            password:user.password
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
    console.log(users)
})
    


app.listen(3000,function(){
    console.log("server is runnig on 3000 port ")
})