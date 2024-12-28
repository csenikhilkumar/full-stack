
const {Router} = require("express")
const adminRouter=Router()



    adminRouter.post("/signup",async function(req,res){
    
    res.send("User signup route");
    })


    adminRouter.post("/signin",function(req,res){
        res.send("User signup route");
    })


    adminRouter.put("/purchase",function(req,res){
        res.send("User signup route");
    }) 
    adminRouter.get("/purchase/bulk",function(req,res){
        res.send("User signup route");
    }) 

module.exports={
    adminRouter:adminRouter
}
