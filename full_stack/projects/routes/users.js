
const {Router} = require("express")
const UserRouter=Router()



UserRouter.post("/signup",async function(req,res){
    
    res.send("User signup route");
    })


UserRouter.post("/signin",function(req,res){
        res.send("User signup route");
    })


UserRouter.get("/purchases",function(req,res){
        res.send("User signup route");
    }) 

module.exports={
    UserRouter:UserRouter
}
