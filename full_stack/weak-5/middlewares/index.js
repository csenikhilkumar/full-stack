const express = require ("express")
const app =express();
let requestCount=0
function middlewares(req,res,next){
    let age = req.query.age
    req.name = "nikhilkumar"
    console.log("request is",req.method)
    if(age >= 14){
        console.log("you are eligible for ride")
        next();
    }
    else{
        console.log("you are not eligible for ride")
           res.status(404).json({msg:"not eligible"})
    }
}
// app.use(middlewares)
//let i explain this line , firstly clint send a request to the user ,this fristly hit the ride1 rout and call the middleware function and  middleware function check the condition and after checking condition the  
// middleware function is allow to access the req and  res objects
app.get("/ride1",middlewares,function(req,res){
    requestCount = requestCount+1,
    // req.name="hiteshkumar"
   console.log( "total number of request are "+requestCount)
   console.log(req.name)
    res.json({msg:"your ride is booked",
        
      
    })
})
app.listen(3000,function(){
    console.log("your server is runnig on port 3000")
})
