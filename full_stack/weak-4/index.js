const express = require("express")
const app = express()

// function  that return a booleanif the age of personis more than 14
let age =  0;

// using middleware in same log
function isOldEnough(req,res,next){
    
    if (age>=14){
        next()
    }
    else{
        res.json({
            msg:"you are not eligible because your age less than 14"
        })
    
    }
}
app.use(isOldEnough)


app.get("/ride1",function(req,res){
    
            res.status(200).json({
                msg:"your ride is booked"
            })
        
    })
    app.listen(3000,function(){
        console.log("the server is running on port 3000")
    })


