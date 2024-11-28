const express = require("express")
const app = express();
app.use(express.json());
const users = []
function ganarateToken(){
  let option=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    token=""
    for(let i=0;i<32;i++){
        token+=option[Math.floor(Math.random()*option.length)]
    }
    return token
}
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
        const token = ganarateToken()
        foundUser.token =token
        res.json({
            massage:token
        })
    }
    else{
        res.status(404).json({
            "msg":"invalid username and password"
        })
    }
    console.log(users)
})
app.listen(3000,function(){
    console.log("your server is running on port 3000")
})