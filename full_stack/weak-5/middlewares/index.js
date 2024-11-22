const express = require ("express")
const app =express();

app.use(function middlewares(req,res,next){
    let age = req.query.age
    if(age >= 14){
        console.log("you are eligible for ride")
        next();
    }
    else{
        console.log("you are not eligible for ride")
           res.status(404).json({msg:"not eligible"})
    }
})
// app.use(middlewares)
app.get("/ride1",function(req,res){

    res.json({msg:"your ride is booked"})
})
app.listen(3000,function(){
    console.log("your server is runnig on port 3000")
})
